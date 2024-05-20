import fs from "node:fs";

const [, , ...foods] = process.argv;

// (currentValue, indexOfTheCurrentValue, totalArray)
console.log([1, 2, 3].map((number) => number * 2));

const startArray = [1, 2, 3];

const result = startArray.map((current, _index, total) => {
  return current;
});

console.log(result);

// (currentValue, indexOfTheCurrentValue, totalArray)
console.log(["a", "b", "c"].filter((current) => current > "b"));

// [true, false, true].reduce();

fs.writeFile(
  "foods.txt",
  foods.map((food) => `${food}\n`).join(""),
  (error) => {
    if (error) {
      console.log("Something went wrong: ", error.message);
      return;
    }
    console.log("All done! Yum yum!");
  }
);
