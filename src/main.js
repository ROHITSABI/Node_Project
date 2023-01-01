// import { sum } from "./mymath.js";
// import { mul } from "./mymath.js";

import { readFile } from "node:fs/promises";
async function main() {
  console.log("Reading File Path");
  let filepath = "D:Web-Pgmg-TechnologiesWeb_Html_Pgmgday_2\1.html";
  let output = await readFile(filepath, { encoding: "utf-8" });
  console.log(output);
}
main();
