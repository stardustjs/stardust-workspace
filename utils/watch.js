// Watch changes in major Stardust modules

let multirun = require("multirun")

multirun.run([
    "cd stardust-core && yarn run watch",
    "cd stardust-webgl && yarn run watch",
    "cd stardust-bundle && yarn run watch",
    "cd stardust-examples && yarn start"
]);