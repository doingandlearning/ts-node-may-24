import { setTimeout } from "timers/promises";

async function getData(signal) {
  try {
    let data = await fetch("https://api.github.com/users", { signal });

    if (typeof data !== "string") {
      data = await data.json();
    }
    console.log(data);
  } catch (error) {
    if (error.name === "AbortError") {
      console.log("Operation aborted");
    }
  }
}

const ac = new AbortController();
getData(ac.signal);

setTimeout(3000, () => ac.abort());
