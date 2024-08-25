
## Read-Only Files:
- test/*

## Commands
- run: 
```bash
npm start
```
- install: 
```bash
npm install
```
- test: 
```bash
npm test
```
Create Password Checker CLI Tool
--------------------------------

**Project Specifications**

Implement a CLI tool in NodeJS for checking password strength based on the criteria.

**Criteria for Calculating Score:**

1.  Length Check
    
    *   If the password length is greater than or equal to the defined `--minLength` fetched from CLI options, assign 1 point.
2.  Uppercase Letter Check
    
    *   If the number of Uppercase characters is greater than or equal to the defined `--minUpperCase` fetched from CLI options, assign 1 point.
3.  Lowercase Letter Check
    
    *   If the number of Lowercase characters is greater than or equal to the defined `--minLowerCase` fetched from CLI options, assign 1 point.
4.  Digits Check
    
    *   If the number of digits is greater than or equal to the defined `--minDigits` fetched from CLI options, assign 1 point.
5.  Special Characters Check
    
    *   If the number of Special characters is greater than or equal to the defined `--minSpecialChars` fetched from CLI options, assign 1 point. Special characters can be `!@#$`

Function `checkPasswordStrength`:

*   Check the password strength based on the criteria
*   It expects the _password_ in the function parameter
*   Return `{ password: <password>, score: <score> }`

#### Notes - 

*   Handle all the edge test cases written in index.spec.js
*   Use `yargs` to get the values of the password and the options from the CLI command. [More Info](https://www.npmjs.com/package/yargs)

Example

```
//CLI Command
$ node index.js check StrongP@ssw0rd --minLength 8 --minUpperCase 1 --minLowerCase 1 --minDigits 1 --minSpecialChars 1

//Output
$ Password: StrongP@ssw0rd
$ Score: 5


//CLI Command
$ node index.js check Passw0rd123 --minLength 8 --minUpperCase 1 --minLowerCase 1 --minDigits 1 --minSpecialChars 1

//Output
$ Password: Passw0rd123
$ Score: 4
```
 

Complete the project so that it passes the unit tests.