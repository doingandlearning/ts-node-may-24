import fs from "node:fs";

fs.readFile("directors.json", "utf-8", (error: Error | null, data: string) => {
  console.log(data);
});
