// "when we have ESjs prject and we want use commenJS pkg with this code we can use:"
import { createRequire } from "module";

const require = createRequire(import.meta.url);

const { say } = require("cowsay");
