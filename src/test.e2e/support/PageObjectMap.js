var file, files, extraFiles, extralFilesPattern, globule, i, len, page, path;

globule = require('globule');
path = require('path');

files = globule.find('src/test.e2e/page-objects/**/*.page.js');

console.log('found ' + files.length + ' common page objects..');


for (i = 0; i < files.length; i++) {
    page = require(path.resolve(files[i]));
    module.exports[page.name] = page["class"];
}