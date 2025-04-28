const withAndroidMyHelloModule = require('./withAndroidMyHelloModule');
const withIOSMyHelloModule = require('./withIOSMyHelloModule');
const { withPlugins } = require('@expo/config-plugins');

const withMyHelloModule = (config) => {
  return withPlugins(config, [
    withAndroidMyHelloModule,
    withIOSMyHelloModule,
  ]);
};

module.exports = withMyHelloModule;