const fs = require("fs");
const path = require("path");
const fileName = process.argv[2];

if (fileName === undefined) {
  console.error("Please add a file path!");
} else {
  const file = path.resolve(__dirname, fileName);
  const fileData = fs.readFileSync(file, "utf-8");

  // generates random binary
  const data = Array.from({ length: 2 ** 12 }, () => {
    return Math.floor(Math.random() * (1 - 0 + 1));
  });   // credit to tahlil     https://github.com/tahlilma/

  fs.writeFileSync(file, data + fileData);
  console.log("File corrupted!");
}