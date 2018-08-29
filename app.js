// const path = require("path");

// var pathObj = path.parse(__filename);
// var pathDir = path.parse(__dirname);

// console.log(pathObj);
// console.log(pathDir);

// const os = require("os");

// console.log("total memory: " + os.totalmem()/1024);
// console.log(`free memory: ${os.freemem() / 1024}`);

const fs = require("fs");

// var filesSync = fs.readdirSync("./");
// console.log(filesSync);

fs.readdir("./", (err, files) => {
	if (err) console.log("Error", err);
	else console.log("Result", files);
});