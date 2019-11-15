let component_name='test-component';
let out_dir='output/';

if (process.env.NODE_ENV == 'production') {
    module.exports = {
        filenameHashing: false,
        productionSourceMap: false,
        outputDir: out_dir,

        configureWebpack: {
            devtool: 'source-map',
            output: {
                filename: component_name+'.js'
            }
        },
        css: {
            extract: {
                filename: component_name+'.css'
            },
        },
        chainWebpack: config => {
            config.optimization.delete("splitChunks");
            config.plugins.delete('html');
            config.plugins.delete('preload');
            config.plugins.delete('prefetch');
        },
        pages: {
            entry: './src/index.js'
        }
    }
}
else {
    module.exports = {
        devServer: {
            host: '127.0.0.1',
            port: 8090, // CHANGE YOUR PORT HERE!
            https: false,
            hotOnly: false,
        },
    }
}