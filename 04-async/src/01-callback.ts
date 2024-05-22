import fs from "node:fs";

// Callback Hell!
fs.readFile(
  "directors.json",
  "utf-8",
  (error: Error | null, directorsData: string) => {
    if (error) {
      console.log(error);
      return;
    }
    const directors = directorsData;
    fs.readFile(
      "companies.json",
      "utf-8",
      (error: Error | null, companiesData: string) => {
        if (error) {
          console.log(error);
          return;
        }
        const companies = companiesData;
        fs.readFile(
          "projects.json",
          "utf-8",
          (error: Error | null, projectsData: string) => {
            if (error) {
              console.log(error);
              return;
            }
            const projects = projectsData;
            console.log(directors, companies, projects);
          }
        );
      }
    );
  }
);

// Down here!
