import { readFile } from "node:fs/promises";

async function main() {
  console.log("Read File Demo");
  let filePath = "D:Web-Pgmg-TechnologiesWeb_Html_Pgmgday_2\1.html";
  let output = await readFile(filePath, { encoding: "utf-8" });
  console.log(output);
}
main();
