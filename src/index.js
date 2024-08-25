const yargs = require("yargs");

yargs.command({
  command: "check",
  description: "Check the password strength",
  builder: {
    minLength: {
      demandOptions: false,
      description: "Minimum length of the password",
      type: "number",
    },
    minUpperCase: {
      demandOptions: false,
      description: "Minimum number of uppercase characters",
      type: "number",
    },
    minLowerCase: {
      demandOptions: false,
      description: "Minimum number of lowercase characters",
      type: "number",
    },
    minDigits: {
      demandOptions: false,
      description: "Minimum number of digits",
      type: "number",
    },
    minSpecialChars: {
      demandOptions: false,
      description: "Minimum number of special characters",
      type: "number",
    },
  },
  handler: (argv) => {
    const checkPasswordStrength = (password) => {
      let score = 0;

      const commandParameters = {
        minLength: argv.minLength,
        minUpperCase: argv.minUpperCase,
        minLowerCase: argv.minLowerCase,
        minDigits: argv.minDigits,
        minSpecialChars: argv.minSpecialChars,
      };

      const upperCaseMatch = password.match(/[A-Z]/g) || [];
      const lowerCaseMatch = password.match(/[a-z]/g) || [];
      const digitsMatch = password.match(/\d/g) || [];
      const specialCharsMatch = password.match(/[\W_]/g) || [];

      // minLength control
      if (password.length >= commandParameters.minLength) score++;

      // minUpperCase control
      if (upperCaseMatch.length >= commandParameters.minUpperCase) score++;

      //minLowerCase control
      if (lowerCaseMatch.length >= commandParameters.minLowerCase) score++;

      //minDigits control
      if (digitsMatch.length >= commandParameters.minDigits) score++;

      //minSpecialCharacters control
      if (specialCharsMatch.length >= commandParameters.minSpecialChars)
        score++;

      return { password, score };
    };

    const result = checkPasswordStrength(argv._[1]);

    console.log(`Password: ${result.password}`);
    console.log(`Score: ${result.score}`);
  },
});

yargs.parse();
