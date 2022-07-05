const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    'baseUrl': 'https://react-redux.realworld.io',
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
      
    },
    
  },
  

});




