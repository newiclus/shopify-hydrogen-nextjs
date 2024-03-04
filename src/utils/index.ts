function dashesBySpaces(str: string) {
  if (typeof str !== "string") {
    console.error("dashesBySpaces: str is not a string");
    return "";
  }

  return str.replace(" ", "-").toLowerCase();
}

export { dashesBySpaces };
