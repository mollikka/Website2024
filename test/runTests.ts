// runTests.ts
import Mocha from 'mocha';

const mocha = new Mocha({
  timeout: 60000, // Customize the timeout if needed
  reporter: 'spec', // You can specify other Mocha reporters if preferred
});

// Add each test file to Mocha
mocha.addFile('tests/linkValidation.test.ts');

mocha.run((failures) => {
  process.exitCode = failures ? 1 : 0;
});
