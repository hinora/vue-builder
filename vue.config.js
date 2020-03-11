// vue config
let component_name = "vue-component";
let out_dir = "./example/dist/";

// config developer and product
var pathSrc = "src/";
var path = require("path");
//
var breakComponent = [];

if (process.env.NODE_ENV == "production") {
    processBeforeRunBuild();
    module.exports = {
        filenameHashing: false,
        productionSourceMap: false,
        outputDir: out_dir,

        configureWebpack: {
            devtool: "source-map",
            output: {
                filename: component_name + ".js"
            }
        },
        css: {
            extract: {
                filename: component_name + ".css"
            }
        },
        chainWebpack: config => {
            config.optimization.delete("splitChunks");
            config.plugins.delete("html");
            config.plugins.delete("preload");
            config.plugins.delete("prefetch");
        },
        pages: {
            entry: pathSrc + "index.js"
        }
    };
} else {
    processBeforeRunServer();
    module.exports = {
        devServer: {
            host: "127.0.0.1",
            port: 8090, // CHANGE YOUR PORT HERE!
            https: false,
            hotOnly: false
        },
        configureWebpack: {
            resolve: {
                alias: {
                    "@": path.join(__dirname, pathSrc)
                }
            },
            entry: {
                app: path.join(__dirname, pathSrc, "main.js")
            }
        }
    };
}
// ================ developer ================
function processBeforeRunServer() {
    let component = handlingParam();
    createFileMain(component);
}
function handlingParam() {
    if (process.argv.length != 4) {
        console.error("Missing argv component");
        process.exit();
    }
    let component = process.argv[3];
    if (component.indexOf("--c") == -1) {
        console.error("Missing argv component");
        process.exit();
    }

    return component.slice(4);
}
function createFileMain(component) {
    let main = pathSrc + "main.js";
    let fs = require("fs");
    if (fs.existsSync(main)) {
        fs.unlinkSync(main);
    }
    fs.writeFileSync(main, dataMain(component));
}
function dataMain(component) {
    return (
        `import Vue from "vue";
import Dev from "./components/` +
        component +
        `/Dev";
import Component from "./components/` +
        component +
        `/` +
        component +
        `";
Vue.config.productionTip = false;
new Vue({
    render(h) {
        return h("div", [h(Dev), h(Component)]);
    }
}).$mount("#app");`
    );
}
// ================ end developer ================

// ================ product ================
function processBeforeRunBuild() {
    let listDirB = getDirectories(pathSrc + "components");
    let listDir = new Array();
    for (let i = 0; i < listDirB.length; i++) {
        if (!breakComponent.includes(listDirB[i])) {
            listDir.push(listDirB[i]);
        }
    }

    createFileIndex(listDir);
    // console.log(listDir);
}
function getDirectories(path) {
    let fs = require("fs");
    return fs.readdirSync(path).filter(function(file) {
        return fs.statSync(path + "/" + file).isDirectory();
    });
}

function createFileIndex(listDir) {
    let main = pathSrc + "components/index.js";
    let fs = require("fs");
    if (fs.existsSync(main)) {
        fs.unlinkSync(main);
    }
    fs.writeFileSync(main, dataIndex(listDir));
}
function dataIndex(listDir) {
    let importString = "";
    let exportString = "export {";
    for (let i = 0; i < listDir.length; i++) {
        importString +=
            "import " +
            listDir[i] +
            " from './" +
            listDir[i] +
            "/" +
            listDir[i] +
            "';";
        exportString += listDir[i] + ",";
    }
    exportString += "}";

    return importString + exportString;
}
// ================ end product ================
