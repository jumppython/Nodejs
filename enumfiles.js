const OUT_FILE = __dirname + "/files.txt";

const args = process.argv;

const runtime = args.shift(), scriptname = args.shift();

const target_dir = args.shift();

const dir = (target_dir === undefined)?".":target_dir

console.log(dir)


const fs = require("fs");

const dir_list = fs.readdirSync(dir)

const files = dir_list.filter(n=>fs.statSync(dir+"/"+n).isFile())

const result = files.join("\r\n")

console.log(result)

fs.writeFileSync(OUT_FILE, result)

console.log("saved = "+OUT_FILE)