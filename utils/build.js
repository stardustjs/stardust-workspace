// Watch changes in major Stardust modules

let multirun = require("multirun")

let COMMANDS = {
    "watch": [
        "cd stardust-core && yarn run watch",
        "cd stardust-webgl && yarn run watch",
        "cd stardust-bundle && yarn run watch",
        "cd stardust-examples && yarn start"
    ],
    "build:stardust-core": "cd stardust-core && yarn run build",
    "build:stardust-webgl": "cd stardust-webgl && yarn run build",
    "build:stardust-isotype": "cd stardust-isotype && yarn run build",
    "build:stardust-bundle": "cd stardust-bundle && yarn run build",
    "build:stardust-examples": "cd stardust-examples && yarn run build"
};

let sequence = process.argv.slice(2);
if (sequence.length == 0) {
    sequence = [
        "build:stardust-core",
        "build:stardust-webgl",
        "build:stardust-isotype",
        "build:stardust-bundle"
    ];
}
multirun.runCommands(COMMANDS, sequence, "Build");
