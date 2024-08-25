const { expect } = require('chai');
const { exec } = require('child_process');

describe('Tests for CLI Password Strength Checker -', () => {
  it('should return score 5 for a strong password', (done) => {
    exec('node index.js check StrongP@ssw0rd --minLength 8 --minUpperCase 1 --minLowerCase 1 --minDigits 1 --minSpecialChars 1', (error, stdout, stderr) => {
      if (error) done(error);
      expect(stdout).to.include('Score: 5');
      done();
    });
  });

  it('should return score 4 for a password meeting most criteria but missing special character', (done) => {
    exec('node index.js check Passw0rd123 --minLength 8 --minUpperCase 1 --minLowerCase 1 --minDigits 1 --minSpecialChars 1', (error, stdout, stderr) => {
      if (error) done(error);
      expect(stdout).to.include('Score: 4');
      done();
    });
  });

  it('should return score 2 for a password missing three criteria', (done) => {
    exec('node index.js check pass123 --minLength 8 --minUpperCase 1 --minLowerCase 1 --minDigits 1 --minSpecialChars 1', (error, stdout, stderr) => {
      if (error) done(error);
      expect(stdout).to.include('Score: 2');
      done();
    });
  });

  it('should return score 2 for a password missing three criteria', (done) => {
    exec('node index.js check password --minLength 8 --minUpperCase 1 --minLowerCase 1 --minDigits 1 --minSpecialChars 1', (error, stdout, stderr) => {
      if (error) done(error);
      expect(stdout).to.include('Score: 2');
      done();
    });
  });

  it('should return score 0 for an empty password', (done) => {
    exec('node index.js check "" --minLength 8 --minUpperCase 1 --minLowerCase 1 --minDigits 1 --minSpecialChars 1', (error, stdout, stderr) => {
      if (error) done(error);
      expect(stdout).to.include('Score: 0');
      done();
    });
  });

  it('should handle incorrect command usage', (done) => {
    exec('node index.js invalidCommand', (error, stdout, stderr) => {
      if (error) done();
      else done(new Error('Invalid command execution did not throw an error.'));
    });
  });

  it('should return score 3 for a strong password with different minimum criteria', (done) => {
    exec('node index.js check Str0ngP@ss --minLength 8 --minUpperCase 2 --minLowerCase 2 --minDigits 2 --minSpecialChars 2', (error, stdout, stderr) => {
      if (error) done(error);
      expect(stdout).to.include('Score: 3');
      done();
    });
  });
});
