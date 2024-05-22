import fs from "node:fs/promises";

async function getData(name: string) {
  try {
    const directorString = await fs.readFile("directors.json", "utf-8");
    const directors = JSON.parse(directorString);

    const companiesString = await fs.readFile("companies.json", "utf-8");
    const companies = JSON.parse(companiesString);

    const person = directors!.find((director) => director.name === name);
    console.log(person);
    const relevantCompanies = companies!.filter((company) =>
      company.directors.includes(name)
    );

    console.log(relevantCompanies);
  } catch (error) {
    console.log(error);
  }
}

getData("Alice Brown");
