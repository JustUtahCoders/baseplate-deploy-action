// Unfortunately, Github actions don't let us upgrade to newer versions of NodeJS that don't require the `--experimental-fetch` flag
console.log("SETUP", process.env.NODE_OPTIONS);
process.env.NODE_OPTIONS = "--experimental-fetch";
console.log("SETUP", process.env.NODE_OPTIONS);
