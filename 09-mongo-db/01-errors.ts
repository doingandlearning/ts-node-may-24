new Error("Something went wrong!");
new SyntaxError("Something went wrong!");
new TypeError("Something went wrong!");
new URIError("Something went wrong!");

class CHError extends Error {
  code: string;
  reqDetails: string;
  constructor(message, code = "ERR_CH_ERR") {
    super(message);
    this.code = code;
    this.name = "CHError";
  }
}

type NewError = RangeError & { code?: string; detailedMessage?: string };

try {
  const newError: NewError = new RangeError("Something went wrong!");
  newError.code = "ERR_USER_INPUT_412";
  newError.detailedMessage = "";
  throw new CHError("Something went wrong!", "ERR_USER_INPUT_412");
} catch (error) {
  if (error.name === "CHError") {
    // Sent to our team
    console.log("Meaningful message ... ");
    console.log(error);
  }
}
