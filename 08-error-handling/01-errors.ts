new Error("Something went wrong!");
new SyntaxError("Something went wrong!");
new TypeError("Something went wrong!");
new URIError("Something went wrong!");

class CHError extends Error {
  code: string;

  constructor(message, code = "ERR_CH_ERR") {
    super(message);
    this.code = code;
    this.name = "CHError";
  }
}

try {
  const newError: RangeError & { code?: string } = new RangeError(
    "Something went wrong!"
  );
  newError.code = "ERR_USER_INPUT_412";
  throw new CHError("Something went wrong!", "ERR_USER_INPUT_412");
} catch (error) {
  if (error.code === "ERR_USER_INPUT_412") {
    // Sent to our team
    console.log("Meaningful message ... ");
    console.log(error);
  }
}
