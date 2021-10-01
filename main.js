function main(args) {
    const { execSync } = require("child_process");
    const result = await execSync(args).toString();
    return result;
}
main("ls");
