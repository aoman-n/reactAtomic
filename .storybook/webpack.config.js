const path = require('path')
const componentsPath = path.join(__dirname, '../src/components');

module.exports = (baseConfig, env, defaultConfig) => {
  defaultConfig.resolve.alias['components'] = componentsPath;
  console.log(defaultConfig);
  return defaultConfig;
}