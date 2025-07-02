const { withNativeWind } = require('nativewind/metro');
const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);
config.transformer.assetPlugins = ['expo-asset/tools/hashAssetFiles'];

module.exports = withNativeWind(config, { input: './styles/global.css' });
