import { getInput, setFailed } from "@actions/core";
import { deploy } from "@baseplate-sdk/cli";

try {
  // eslint-disable-next-line no-console
  console.log("NODE_OPTIONS", process.env.NODE_OPTIONS);
  await deploy({
    baseplateToken: getInput("baseplate-token"),
    dir: getInput("upload-dir"),
    entry: getInput("entry-file"),
    environmentName: getInput("environment-name"),
    microfrontendName: getInput("microfrontend-name"),
  });
} catch (err) {
  console.error(err);
  setFailed(err.message);
}
