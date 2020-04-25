# expo-svg

Sample Expo (react-native) application which uses SVG

## Process

```sh
expo init
cd expo-svg
yarn add --dev react-native-svg-transformer
yarn add --dev metro-config
touch metro.config.js
```

Add this to `metro-config.js`
```js
const { getDefaultConfig } = require("metro-config");

module.exports = (async () => {
  const {
    resolver: { sourceExts, assetExts }
  } = await getDefaultConfig();
  return {
    transformer: {
      babelTransformerPath: require.resolve("react-native-svg-transformer")
    },
    resolver: {
      assetExts: assetExts.filter(ext => ext !== "svg"),
      sourceExts: [...sourceExts, "svg"]
    }
  };
})();
```
And add this to `app.json` :
```
{
  "expo": {
    "packagerOpts": {
      "config": "metro.config.js",
      "sourceExts": [
        "expo.ts",
        "expo.tsx",
        "expo.js",
        "expo.jsx",
        "ts",
        "tsx",
        "js",
        "jsx",
        "json",
        "wasm",
        "svg"
      ]
    }
  }
}
```

## Screenshot
<div align="center">
  <img src="https://github.com/maxgfr/expo-svg/blob/master/.github/screenshot.png" height="540" width="280"/>
</div>
