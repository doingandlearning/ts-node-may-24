import app from "./server";

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Listening on port http://localhost:${PORT}`);
});