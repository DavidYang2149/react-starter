/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    /* eslint-disable no-unused-vars */
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  video: true,
  chromeWebSecurity: false,
  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    configFile: 'reporter-config.json',
  },
});
