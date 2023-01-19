const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "wore59",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://example.cypress.io",
  },
});
