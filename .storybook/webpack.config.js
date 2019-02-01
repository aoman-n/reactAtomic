const path = require('path')
const componentsPath = path.join(__dirname, '../src/components');
const stylesPath = path.join(__dirname, '../src/styles');
const imagesPath = path.join(__dirname, '../src/images');

module.exports = (baseConfig, env, defaultConfig) => {
  defaultConfig.resolve.alias['components'] = componentsPath;
  defaultConfig.resolve.alias['styles'] = stylesPath;
  defaultConfig.resolve.alias['images'] = imagesPath;
  console.log(defaultConfig);
  return defaultConfig;
}