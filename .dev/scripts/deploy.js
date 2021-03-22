const themeKit = require('@shopify/themekit');
const yargs = require('yargs');
const path = require("path");

let { command = "deploy", env = null, verbose = true } = yargs(process.argv).argv;

if(typeof process.env.NODE_ENV !== "undefined" && env === null) {
  env = process.env.NODE_ENV;
}

if(env === null) {
  env = "development";
}

function deploy() {
  const dir = path.resolve(__dirname, "../../dist");
  themeKit.command(command, {
    dir, 
    verbose, 
    env, 
    config: path.join(dir, "./config.yml")
  });
}

deploy(command);
