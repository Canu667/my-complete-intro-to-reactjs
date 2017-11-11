const path = require('path')

module.exports = {
    context:__dirname, /* running this from root directory - ALWAYS */
    entry: './js/ClientApp.jsx', /* front door to your application. Everything is included from here */
    devtool: 'cheap-eval-source-map', /* inline all my source maps into my code */
    output: {
        path: path.join(__dirname, 'public'), /* we will always land in public directory */
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json']
    },
    stats: {
        colors: true, /* color in terminal */
        reasons: true,
        chunks: true
    },
    module: { /* it uses some kind of rule on your code */
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader'
            }
        ]
    }
}