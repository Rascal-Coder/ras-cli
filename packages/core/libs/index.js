"use strict";

module.exports = core;
/**
 * Node modules
 */
const { version } = require("../package");
const chalk =require("chalk");
const log = console.log;
async function core() {
  checkPkgVersion(); // 检查当前运行版本
}

function checkPkgVersion() {
  log(chalk.green('Version'), version);
}
