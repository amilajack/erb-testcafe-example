const path = require('path');
const createTestCafe = require('testcafe');

createTestCafe('localhost', 1337, 1338)
  .then(testCafe =>
    testCafe
      .createRunner()
      .src(path.join(__dirname, 'e2e.spec.js'))
      .browsers(`electron:${path.join(__dirname, '..', '..', 'app')}`)
      .run()
  )
  .catch(console.log);
