const Util = require("./lib/util");
const util = new Util();

async function main(args) {
    const { execSync } = require("child_process");
    let result;
    try {
        result = await execSync(args).toString();
    } catch (e) {
        result = e;
    }
    return result.message ?
    util.log("Error", result.message) :
    util.log("Success", result);
}
await main("ls");
