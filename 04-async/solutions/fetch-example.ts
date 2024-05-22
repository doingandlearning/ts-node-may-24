interface Person {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string[];
  species: never[];
  vehicles: string[];
  starships: string[];
  created: string;
  edited: string;
  url: string;
}

interface APIResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Person[];
}

async function getData() {
  const data = await fetch("https://swapi.dev/api/people"); // This is a response object
  console.log(data);
  const people: APIResponse = await data.json(); //
  // console.log(people.results[0].name, people.results[0]);
  // console.log(people.results[0]);
}

getData();
