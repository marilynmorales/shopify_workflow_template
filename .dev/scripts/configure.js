const themeKit = require('@shopify/themekit');
const yargs = require('yargs');
const path = require("path");

const { env = 'development', store,  password, themeid } = yargs(process.argv).argv;

function configure() {
  const dir = path.resolve(__dirname, "../../");
  themeKit.command("configure", {
    password,
    store,
    themeid,
    env, 
    "ignored-file": "./config/settings_data.json"
  });
}

configure();
