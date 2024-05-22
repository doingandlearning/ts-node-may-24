async function getPeople() {
  const data = await fetch("https://swapi.dev/api/people"); // This is a response object
  const people = await data.json(); //
  return people.results;
}

async function getSpecies() {
  const data = await fetch("https://swapi.dev/api/species"); // This is a response object
  const people = await data.json(); //
  return people.results;
}

async function getAllData() {
  // const people = await getPeople();
  // const species = await getSpecies();

  // const [people, species] = await Promise.all([getPeople(), getSpecies()]);
  const [people, species] = await Promise.allSettled([
    getPeople(),
    getSpecies(),
  ]);

  if (people.status === "fulfilled") {
    console.log("Got all the people ...");
    console.log(people.value);
  } else {
    console.log("Something went wrong ...", people.reason);
  }

  const result = await Promise.race([getPeople(), getSpecies()]);
  console.log(result);
}

getAllData();

// Promise.allSettled()

// Promise.race()
