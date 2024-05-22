async function getData() {
  const data = await fetch("https://swapi.dev/api/people");
  const people = await data.json();
  console.log(people);
}

getData();
