const path = require('path'),
    glob = require('glob')
    

let globPath = {
    js: './src/**/*.js',
    html: './src/**/*.html'
}

// vue 多页面入口
function getEntries(globPath) {
    let entries = {}, basename, tmp, pathname;
    glob.sync(globPath).forEach((entry) => {
        basename = path.basename(entry, path.extname(entry));
        tmp = entry.split('/').splice(-3);
        pathname = tmp.splice(0, 1) + '/' + basename;
        entries[pathname] = entry;
    });
    return entries;
}

// js && html 入口
exports.entriesJs = getEntries(globPath.js)
exports.entriesHtml = getEntries(globPath.html)