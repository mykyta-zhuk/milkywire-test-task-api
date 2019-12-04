const _ = require('lodash');
const constants = require('../constants');

class Config {
  constructor(env) {
    this.env = env;
    this.config = this.buildConfig();
  }

  parseEnv(env) {
    const parsedEnv = {};
    Object.keys(env).forEach((key) => {
      const lowerCaseKey = key.toLowerCase();
      const convertingArray = lowerCaseKey.split('_');
      convertingArray.push(env[key]);
      const envObj = this.convertArrayToObject(convertingArray);
      _.merge(parsedEnv, envObj);
    });
    return parsedEnv;
  }

  convertArrayToObject(array, obj = {}) {
    let result = obj;
    while ((array.length - 1) !== 0) {
      result = Object.assign(
        {},
        result,
        { [array.shift()]: this.convertArrayToObject(array, result) },
      );
      return result;
    }
    if ((array.length - 1) === 0) {
      return array.shift();
    }
    return result;
  }

  buildConfig() {
    const parsedEnv = this.parseEnv(this.env);
    const config = _.merge(...constants, parsedEnv);
    return config;
  }
}

module.exports = (new Config(process.env)).config;
