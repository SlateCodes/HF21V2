async function main(args) {
    const { execSync } = require("child_process");
    let result;
    try {
        result = await execSync(args).toString();
    } catch (e) {
        result = e;
    }
    return result.message ? result.message : result
}
await main("ls");
