const { withDangerousMod } = require('@expo/config-plugins');
const fs = require('fs');
const path = require('path');

const withIOS = (config) => {
  return withDangerousMod(config, [
    'ios',
    async (config) => {
      const podfilePath = path.join(
        config.modRequest.projectRoot,
        'ios',
        'Podfile'
      );
      let contents = await fs.promises.readFile(podfilePath, 'utf8');

      if (!contents.includes(`pod 'MyHelloModule', :path => '../modules/my-hello-module/ios'`)) {
        contents = contents.replace(
          /(target ['"].*['"] do)/,
          `$1\n  pod 'MyHelloModule', :path => '../modules/my-hello-module/ios'`
        );
      }

      await fs.promises.writeFile(podfilePath, contents);
      return config;
    },
  ]);
};

module.exports = withIOS;
