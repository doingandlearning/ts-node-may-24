export default async function store(value: Buffer) {
  if (Buffer.isBuffer(value) === false) {
    throw Error("input must be a buffer");
  }
  await new Promise((resolve, reject) => {
    setTimeout(() => resolve(""), 3000);
  });

  const id = Math.random().toString(36).split(".")[1].slice(0, 4);
  return { id };
}
