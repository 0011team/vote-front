const { ANALYZE, ASSET_HOST } = process.env

// for those who using CDN
const assetPrefix = ASSET_HOST || ''
const withSass = require('@zeit/next-sass');


// module.exports = withSass({
//   cssModules: true,
//   cssLoaderOptions: {
//     importLoaders: 2,
//   },
//   assetPrefix,
//   target: 'serverless',
//   webpack: (config, { dev }) => {
//     config.output.publicPath = `${assetPrefix}${config.output.publicPath}`
//     if (ANALYZE) {
//       const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
//       config.plugins.push(new BundleAnalyzerPlugin({
//         analyzerMode: 'server',
//         analyzerPort: 8888,
//         openAnalyzer: true
//       }))
//     }
//     return config
//   }
// })

const withCSS = require("@zeit/next-css");
module.exports = withCSS(withSass({
   experimental: { scss: true },
   webpack (config, options) {
       config.module.rules.push({
           test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
           use: {
               loader: 'url-loader',
               options: {
                   limit: 100000
               }
           }
       });

       return config;
   }
}));