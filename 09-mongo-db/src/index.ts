import app from "./server";
import connectToDb from "./utils/db";
const PORT = 3000;

async function startup() {
  try {
    console.log("Connecting to database ...");
    await connectToDb();
    console.log("Connected to database");
    app.listen(PORT, () => {
      console.log(`Listening on port http://localhost:${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
}

startup();
