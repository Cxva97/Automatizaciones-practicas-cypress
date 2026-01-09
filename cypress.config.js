const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportHeight: 692,
  viewportWidth: 1111,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    retries: {
      openMode: 2, // intentos en modo abierto
      runMode: 1 // intentos en modo ejecucion, terminal
    },
    //defaultCommandTimeOut: 10000, // tiempo de espera para comandos
    //pageLoadTimeout: 15000, // tiempo de espera para carga de pagina
    env: {
        username: 'admin',
        api: 'api123',
        ambiente:'prod',
        devUrl: 'https://dev.laboratoriodetesting.com/',
        prodUrl: 'https://www.laboratoriodetesting.com/'
    }   // variables de entorno
  },
});
