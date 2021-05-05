const themeKit = require('@shopify/themekit');
const yargs = require('yargs');
const path = require("path");

const { env = 'development', store,  password, theme_id: themeid } = yargs(process.argv).argv;

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
