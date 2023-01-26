import { getInput, setFailed } from "@actions/core";
import { deploy } from "@baseplate-sdk/cli";

try {
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
