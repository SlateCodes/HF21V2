const { execSync } = require("child_process");

const result = await execSync("ls").toString()
