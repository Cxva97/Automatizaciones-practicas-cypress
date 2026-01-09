const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportHeight: 692,
  viewportWidth: 1111,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    retries: {
      openMode: 2,
      runMode: 1
    }
  },
});
