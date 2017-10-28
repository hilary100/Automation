var config = require('cukefarm').config;

config.specs = 'src/test.e2e/features/**/*.feature';
config.capabilities.browserName = 'chrome';
config.capabilities.chromeOptions = {args: [
    // "show-fps-counter=true",
    "--disable-infobars",
    "--disable-gpu"
]};


files = [
    'src/test.e2e/support/*.js',
    'node_modules/cukefarm/lib/step_definitions/**/*.js',
    'src/test.e2e/step_definitions/**/*.js'
];
for (i = 0; i < files.length; i++) {
    config.cucumberOpts.require.push(files[i]);
}

// config.cucumberOpts = {
//     tags: ["@punter"]
// };


exports.config = config;