const { defineConfig } = require("cypress");

const sqlServer = require('cypress-sql-server');

async function setupNodeEvents(on, config) {
  config.db = {
    userName: "ramazanoff2",
    password: "M29p25asy",
    server : "ramazanoff2.database.windows.net",
    options: {
      database: "ramazanoff2",
      encrypt: true,
      rowCollectionOnRequestCompletion : true
    }
  }

  tasks = sqlServer.loadDBPlugin(config.db);
  on('task', tasks);

  return config;
}

module.exports = defineConfig({
  projectId: "mgecgq",
  e2e: {
    setupNodeEvents
  },
});
