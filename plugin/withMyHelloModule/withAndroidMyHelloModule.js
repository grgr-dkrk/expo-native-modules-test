const { withDangerousMod } = require('@expo/config-plugins');
const fs = require('fs');
const path = require('path');

function withAndroidMyHelloModule(config) {
  config = withDangerousMod(config, [
    'android',
    async (config) => {
      const mainApplicationPath = path.join(
        config.modRequest.projectRoot,
        'android',
        'app',
        'src',
        'main',
        'java',
        ...config.android.package.split('.'),
        'MainApplication.kt'
      );
      
      let contents = await fs.promises.readFile(mainApplicationPath, 'utf8');

      if (!contents.includes('import com.myhellomodule.MyHelloPackage')) {
        contents = contents.replace(
          'import com.facebook.react.ReactApplication',
          `import com.facebook.react.ReactApplication\nimport com.myhellomodule.MyHelloPackage`
        );
      }

      if (!contents.includes('MyHelloPackage()')) {
        contents = contents.replace(
          'return packages',
          'packages.add(MyHelloPackage())\n    return packages'
        );
      }

      await fs.promises.writeFile(mainApplicationPath, contents);
      return config;
    },
  ]);

  config = withDangerousMod(config, [
    'android',
    async (config) => {
      const settingsGradlePath = path.join(
        config.modRequest.projectRoot,
        'android',
        'settings.gradle'
      );

      let contents = await fs.promises.readFile(settingsGradlePath, 'utf8');

      if (!contents.includes(":my-hello-module")) {
        contents += `
include ':my-hello-module'
project(':my-hello-module').projectDir = new File(rootProject.projectDir, '../modules/my-hello-module/android')
`;
      }

      await fs.promises.writeFile(settingsGradlePath, contents);
      return config;
    },
  ]);

  config = withDangerousMod(config, [
    'android',
    async (config) => {
      const appBuildGradlePath = path.join(
        config.modRequest.projectRoot,
        'android',
        'app',
        'build.gradle'
      );

      let contents = await fs.promises.readFile(appBuildGradlePath, 'utf8');

      if (!contents.includes("implementation project(':my-hello-module')")) {
        contents = contents.replace(
          'dependencies {',
          "dependencies {\n    implementation project(':my-hello-module')"
        );
      }

      await fs.promises.writeFile(appBuildGradlePath, contents);
      return config;
    },
  ]);

  return config;
}

module.exports = withAndroidMyHelloModule;
