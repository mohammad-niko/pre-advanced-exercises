// "when we have ESjs prject and we want use commenJS pkg with this code we can use:"
import { createRequire } from "module";

const require = createRequire(import.meta.url);

const { say } = require("cowsay");




//  با این کد میتونیم خیلی سریع تر از find کلید مورد نمظرمون رو پیدا کنیم
const categoriesMap = new Map(
  categories.map(c => [c.category, c])
);


console.log(categoriesMap.get("drink")); 