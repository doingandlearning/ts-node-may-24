// Promise

// Restaurant -> waiter

// Slip of paper -> Promise (pending)
// Settled
// - Resolved
// - Rejected

import fs from "node:fs/promises";

interface Director {
  name: string;
  age: number;
  company: string;
}

interface Company {
  name: string;
  location: string;
  directors: string[]; // Array<string>
}

let directors: null | Array<Director>; // Director[]
let companies: null | Company[];
let projects;

// <>

fs.readFile("directors.json", "utf-8")
  .then((data) => {
    directors = JSON.parse(data);
    return fs.readFile("companies.json", "utf-8");
  })
  .then((data) => {
    companies = JSON.parse(data);
    return fs.readFile("projects.json", "utf-8");
  })
  .then((data) => {
    projects = JSON.parse(data);
    const name = "Alice Brown";
    const person = directors!.find((director) => director.name === name);
    console.log(person);
    const relevantCompanies = companies!.filter((company) =>
      company.directors.includes(name)
    );

    console.log(relevantCompanies);
  })
  .catch((error) => console.log(error));

// What's finished?
