import fs from "node:fs";

fs.readFile("./package.json", (error, contents) => {
  if (error) {
    console.log("There was an error.");
    console.log(error.message);
    return;
  }
  console.log(contents.toString());
});
