// const message :string = "hello typescript";

// import { ListFormat } from "typescript";
// import { greeting } from "./welcome";
//
// let mmad : number = 25;
// let ali : boolean = false

// mmad = 20

// console.log(message);
// console.log(mmad);
// console.log(ali);

// mmad = 54

// interface User{
//     name:string,
//     age:number
// }

// const user:User = {
//     name:"mmad",
//     age:50
// }

// console.log(user);

// function formatScore(score: number): string {
//   return `` + score;
// }

// console.log(formatScore(12));

// const score: number[] = [1, 2, 3, 4, 5, 6];

// score.push(10);

// const score2: Array<number> = [1, 2, 3, 4, 5, 6];
// console.log(score);
// console.log(score2);

// const user :string[]= ["Ali", "Sara"];

// user.push("reza");
// console.log(user);

// type User = {
//   name: string;
//   age: number;
// };

// function mmad(user: User): string {
//   return user.name + " (" + user.age + ")";
// }

// console.log(mmad({ name: "mmad", age: 25 }));

// type Product = {
//   title: string;
//   price: number;
// };

// const list: Product = { title: "Book", price: 100 };

// function setProduct(p: Product): string {
//   return `produce titl is ${p.title} and price is : ${p.price}`;
// }

// console.log(setProduct(list));

// interface User {
//   age: number;
// }

// interface User {
//   name:string
// }

// const u: User = { name: "Ali", age: 30 };
// console.log(u.name, u.age);

// const firstTuple: [number, string] = [2, "ali"];
// console.log(firstTuple);

// firstTuple.push(5);
// firstTuple.push("mmad");

// console.log(firstTuple);

// let secondTuple: [boolean, ...string[], number];
// let secondTuple: [boolean, ...[string, ...string[]], number]; <= if we want to have one compulsory and one optional element in the tuple we can use rest opration (...[string, ...string[]])

// secondTuple = [true, "item1", "item2", "item3", 203]; // ✅
// secondTuple = [true, 203]; // ✅

// const enum Language {
//   English = 100,
//   Spanish = 200 + 300,
//   Russian, // TypeScript infers 501 (the next number after 500)
// }

// const myFirstLang = Language.Russian;

// console.log(myFirstLang);

// const enum Name {
//   first = "mmad aga",
//   second = "aga mmad",
// }

// const myName : Name = Name["first"]

// const enum Color {
//  Red = '#c10000',
//  Blue = '#007ac1',
//  Pink = 0xc10050,
//  White = 255
// }

// function colors(f: Color) {
//  return 'something...'
// }

// colors(Color.Red)

// enum Operation {
//   ADD = "+",
//   SUBTRACT = "-",
//   MULTIPLY = "*",
//   DIVIDE = "/",
//   //   MODULO = "++",
// }

// function performOperation(
//   values: [number, number],
//   operation: Operation,
// ): number {
//   const [a, b] = values;

//   switch (operation) {
//     case Operation.ADD:
//       return a + b;
//     case Operation.SUBTRACT:
//       const subtract = a - b;
//       return -subtract;

//     case Operation.MULTIPLY:
//       return a * b;
//     case Operation.DIVIDE:
//       return a / b;
//     default:
//       const _exhaustiveCheck: never = operation;
//       return _exhaustiveCheck;
//   }
// }

// console.log(performOperation([10, 52], Operation.ADD));
// console.log(performOperation([10, 52], Operation.SUBTRACT));
// console.log(performOperation([10, 52], Operation.MULTIPLY));
// console.log(performOperation([10, 52], Operation.DIVIDE));

// const foodObject: { [index: string]: string } = {};
// [index:string] : string  <= index signature
// it says: every string propertys when added to the this obj should have string value
// foodObject.name = "kabab";
// foodObject.chef = "mmad";

// interface User {
//   name: string;
//   username: string;
//   email: string;
//   phoneNumber: string;
//   password: string;
//   ismale: boolean;
// }
// const user: User = {
//   name: "ali",
//   username: "alinia",
//   email: "blabla",
//   phoneNumber: "325521",
//   password: "balbla2041",
//   ismale: true,
// };

// interface UserInterFace {
//   userName: string;
//   userID: number;
// }

// let Users: UserInterFace = {
//   userName: "davida",
//   userID: 125044,
// };

// const a: any = 666;
// const b: any = "ali";
// const c: any = ["ali", 5, 3];
// const d = a + b + c;

// console.log(d);

// const aa: unknown = 10;
// const bb = aa === 150;
// // const cc = aa + 180;❌
// if (typeof aa === "number") {
//   const d = aa + 120;
// }

// function greet(): never {
//   while (true) {
//    console.log("hello");
//   }
// }
// greet();
// alert('hello')

// const hire = (
//   userId: string | number
// ): {
//   userId: string | number;
//   birthDay: Date,
//   salary: number,
//   hiringDate: Date,
//   fire: (userId: string | number)=>Date;
// } => {
//   // hiring process
// };

// type TuserID = string | number;

// type Temployee = {
//   userId: TuserID;
//   birthDay: Date;
//   salary: number;
//   hiringDate: Date;
//   fire: (userId: TuserID) => Date;
// };

// const hire = (userID : TuserID): Temployee =>{
//   return
// }

//  const enum Color {
//   Red ,
//   Blue = '#007ac1',
//   Pink = 0xc10050,
//  White = 255
// }
// console.log(typeof Color.Pink);

// const redDot = Color.Red

// console.log(redDot);

// let a: any = 666 // any
// let b: any = ['danger'] // any
// let c = a + b // any

// function ruler(distance: number, measurement: string) {
//   //...
// }

// ruler(9, "cm");
// ruler(10, "kg");

// type Measurement = "cm" | "inch" | "mm";

// function ruler2(distance: number, measurement: Measurement) {
//   //...
// }

// ruler2(9, "cm");
// // ruler2(10,"kg") ;❌

// function converter(meter: number | string): number {
//   if (typeof meter === "number") return meter * 100;
//   else return parseInt(meter) * 100;
// }

// type Circle = {
//   kind: "circle";
//   radius: number;
// };
// type Rectangle = {
//   kind: "rectangle";
//   width: number;
//   height: number;
// };
// type Shape = Rectangle | Circle;

// function getArea(shape: Shape) {
//   if (shape.kind === "circle") return (Math.PI * shape.radius ** 2);
//   else return shape.width * shape.height;
// }

// console.log(Math.round(getArea({kind:"circle",radius:10})))

// interface User {
//   id: number;
//   name: string;
// }

// const jsonString = '{"id": 1, "name": "Ali"}';

// const data = JSON.parse(jsonString);

// const user = data as User; // type assertion : key word "as"
// const user2 = <User>data; // type assertion : anglular bracket

// let obj: { name: string; id: number; country: string } = {
//   name: "ali",
//   id: 256458,
//   country: "iran",
// };

// type Objct = {
//   [key: string]: string | number;
// };

// let objj: Objct = {
//   profile: "profile",
// };

// objj.name = "ali";
// objj.id = 123456789;
// objj["lastName"] = "alipor";

// console.log(objj);

// type Customer = {
//   birthday: Date;
// };

// function getCustomer(id: number): Customer | null | undefined | number {
//   return id === 0 ? null : { birthday: new Date() };
// }

// let customer = getCustomer(1);

// if (typeof customer !== "number") {
//   console.log(customer?.birthday);
// }

// const arr = [10, 20];

// const value = arr[2]?.toString();
// console.log(value);

// let logger: any = null;
// logger?.('masoud'); (.? <= optional chaining ) for functions

// console.log(logger);

// let speed: number | null | undefined = undefined;

// let ride = {
//   // Nullish coalescing operator
//   speed: speed ?? 30 // (??) nullish operator for null and undefined
// }
// console.log(ride.speed);

// const getPostLikeCounts = (account: {
//   id: number;
//   name: string;
//   password: string;
//   post?: {
//     image_url: string;
//     caption?: string;
//     likesCount?: number;
//   };
// }) => {
//   //implement optional chaining
//   return account.post?.likesCount
// };

// console.log(greeting);

// interface Account {
//   user_id: string;
//   userName: string;
//   email: string;
//   password: string;
// }

// const user: Account = {
//   user_id: "1",
//   userName: "ali",
//   email: "gmail.com",
//   password: "",
// };

// const user : {
//   user_id:string,
//   userName : string ,
//   email:string
// } ={
//   user_id:'1',
//   userName:"ali",
//   email : "gmail.com"
// }

{
  // "compilerOptions": {
  /* Visit https://aka.ms/tsconfig to read more about this file */
  /* Projects */
  // "incremental": true,                              /* فایلی ایجاد و اطلاعات آخرین کامپایل را در آن ذخیره می‌کند تا امکان کامپایل تدریجی پروژه فراهم شود. */
  // "composite": true,                                /* محدودیت های خاصی را فعال می‌کند و به  پروژه تایپ‌اسکریپت اجازه می‌دهد تا با ارجاعات پروژه استفاده شود. */
  // "tsBuildInfoFile": "./.tsbuildinfo",              /* مسیر فایل کامپایل تدریجی را مشخص می‌کند.(.tsbuildinfo) */
  // "disableSourceOfProjectReferenceRedirect": true,  /* در زمان کار با پروژه های تایپ‌اسکریپت ترکیبی، راهی برای بازگشت به رفتار نسخه قبل از 3.7 فراهم می کند که در آن فایل های d.ts به عنوان مرز بین ماژول ها استفاده می شد. */
  // "disableSolutionSearching": true,                 /* هنگام ویرایش، یک پروژه را از بررسی مرجع چند پروژه خارج می کند. */
  // "disableReferencedProjectLoad": true,             /* تعداد پروژه هایی که به طور خودکار توسط تایپ‌اسکریپت لود می‌شوند را کاهش می‌دهد. */
  /* Language and Environment */
  // "target": "es2016",                                  /* نسخه‌ی جاوا اسکریپتی که کد تایپ‌اسکریپت به آن تبدیل می‌شود را مشخص می‌کند. */
  // "lib": [],                                        /* مشخص می‌کند چه ویژگی ها و اشیاء پیش فرضی را پشتیبانی کند. */
  // "jsx": "preserve",                                /* مربوط به کار با کتابخانه react است و مشخص می کند چه کد JSX تولید می شود. */
  // "experimentalDecorators": true,                   /* پشتیبانی آزمایشی برای دکوراتورها را فعال می‌کند. */
  // "emitDecoratorMetadata": true,                    /* پشتیبانی آزمایشی برای انتشار نوع متادیتا برای دکوراتو‌رها را فعال می‌کند. */
  // "jsxFactory": "",                                 /* تابعی که در فایل‌های .js فراخوانی می‌شوند، در زمان کامپایل المان‌های JSX از runtime  کلاسیک JSX استفاده می‌کند. */
  // "jsxFragmentFactory": "",                         /* مرجع JSX Fragment مورد استفاده را مشخص می‌کند */
  // "jsxImportSource": "",                            /* مشخص می‌کند ماژول مورد استفاده برای ایمپورت JSX factory functions هنگام استفاده از 'jsx: react-jsx*' چیست. */
  // "reactNamespace": "",                             /* شیء فراخوانی شده برای 'createElement' را مشخص می‌کند. تنها زمانی که react برای JSX اعمال شده. */
  // "noLib": true,                                    /* اگر این گزینه فعال شود، lib نادیده گرفته می‌شود. گنجاندن خودکار فایل‌های کتابخانه‌ای را غیرفعال می کند. */
  // "useDefineForClassFields": true,                  /* این گزینه رفتار کامپایلر را به نسخه استاندارد ECMAScript فیلدهای کلاس تغییر می‌دهد. */
  // "moduleDetection": "auto",                        /* روش شناسایی فایل‌های جاوااسکریپت ماژولار را مشخص می‌کند.*/
  /* Modules */
  // "module": "commonjs",                                /* مشخص می‌کند چه کد ماژولی تولید می‌شود. */
  // "rootDir": "./",                                  /* پوشه root را در فایل‌های منبع مشخص می‌کند. */
  // "moduleResolution": "node",                       /* مشخص می‌کند تایپ‌اسکریپت چگونه یک فایل را در module specifier مشخص شده جستجو کند. */
  // "baseUrl": "./",                                  /* دایرکتوری پایه‌ای را به حل نام ماژول های غیر نسبی اختصاص می‌دهد. */
  // "paths": {},                                      /* مجموعه‌ای از ورودی‌ها را دریافت می کند که import ها را برای جستجوی مکان‌های مربوط به baseUrl می‌سنجد. */
  // "rootDirs": [],                                   /* با استفاده از rootDirs، می توانید به کامپایلر اطلاع دهید که تعداد زیادی دایرکتوری مجازی وجود دارد که به عنوان یک ریشه واحد عمل می کنند. */
  // "typeRoots": [],                                  /* می‌توانید چندین پوشه را مشخص کنید که مانند "./node_modules/@types" عمل کنند. */
  // "types": [],                                      /* می‌توانید تایپ نام پکیج‌ها را مشخص کنید تا بدون ارجاع در فایل منبع گنجانده شوند. */
  // "allowUmdGlobalAccess": true,                     /* جازه دسترسی به UMD از ماژول ها را به صورت سراسری می‌دهد. */
  // "moduleSuffixes": [],                             /* لیست پسوند نام فایل‌ها را برای جستجو در هنگام حل یک ماژول می‌گیرد. */
  // "resolveJsonModule": true,                        /* امکان import  فایل‌های json. را فعال می‌کند. */
  // "noResolve": true,                                /* اجازه نمی‌دهد ایمپورت‌ها ، requireها یا <reference> ها از تعداد فایل‌هایی که تایپ‌اسکریپت باید به پروژه اضافه کند بیشتر شوند.    */
  /* JavaScript Support */
  // "allowJs": true,                                  /* امکان استفاده فایل‌های جاوااسکریپت را در میان فایل‌های تایپ‌اسکریپت را به ما می‌دهد. */
  // "checkJs": true,                                  /* خطاهای موجود در فایل‌های جاوا اسکریپت را گزارش می‌دهد. */
  // "maxNodeModuleJsDepth": 1,                        /* حداکثر عمق پوشه‌ها برای بررسی فایل‌های جاوااسکریپت از 'node_modules' را مشخص می‌کند. فقط با 'allowJs' قابل اجرا است.*/
  /* Emit */
  // "declaration": true,                              /* مسئول ساخت فایل‌های .d.ts از فایل های تایپ‌اسکریپت و جاوااسکریپت در پروژه است. */
  // "declarationMap": true,                           /* یک sourcemap برای فایل های d.ts ایجاد می‌کند. */
  // "emitDeclarationOnly": true,                      /* فقط فایل‌های d.ts را خروجی بگیرد و نه فایل‌های جاوا اسکریپت. */
  // "sourceMap": true,                                /* فایل های sourcemap را ایجاد می‌کند. */
  // "outFile": "./",                                  /* فایلی را مشخص می‌کند که همه خروجی‌ها را در یک فایل جاوااسکریپت جمع کند. اگر «اعلان» درست باشد، فایلی را  برای خروجی‌های .d.ts مشخص می‌کند */
  // "outDir": "./",                                   /* مسیری که فایل های کامپایل شده را در آن قرار می‌گیرد. */
  // "removeComments": true,                           /* در هنگام کامپایل تمام کامنت ها را حذف می کند. */
  // "noEmit": true,                                   /* هیچ فایل جاوا اسکریپتی ایجاد نخواهد شد. */
  // "importHelpers": true,                            /* اجازه وارد کردن توابع کمکی از tslib را یک بار در هر پروژه می‌دهد، به جای اینکه آن‌ها را در هر فایل اضافه کند. */
  // "importsNotUsedAsValues": "remove",               /* نحوه عملکرد import ها را کنترل می کند. */
  // "downlevelIteration": true,                       /* مطمئن می‌شود که حلقه‌ها و کدها در مواردی که تارگت خیلی قدیمی است، با دقت بیشتری کامپایل شوند. */
  // "sourceRoot": "",                                 /* مسیر اصلی را برای دیباگرها برای یافتن کد منبع مشخص می کند. */
  // "mapRoot": "",                                    /* مکانی را مشخص می‌کند که debugger باید map files ها را به جای مکان ایجاد شده در آن قرار دهد. */
  // "inlineSourceMap": true,                          /* فایل‌های sourcemap در جاوا اسکریپت منتشر شده قرار گیرد. */
  // "inlineSources": true,                            /* کد منبع را در sourcemap هایی که در جاوااسکریپت منتشر شده قرار می‌دهد. */
  // "emitBOM": true,                                  /* یک علامت UTF-8 Byte Order Mark (BOM) در ابتدای فایل های خروجی قرار می‌دهد. */
  // "newLine": "crlf",                                /* کاراکتر خط جدید را برای ارسال فایل‌ها تنظیم می‌کند. */
  // "stripInternal": true,                            /* برای کدهایی که دارای @internal در کامنت‌های JSDoc هستند، اعلان ارسال نکند. */
  // "noEmitHelpers": true,                            /* غیرفعال کردن ایجاد توابع کمکی سفارشی مانند '__extends' در خروجی کامپایل شده. */
  // "noEmitOnError": true,                            /* در صورتی که خطایی در یکی از فایل‌ها وجود داشت، فایل‌ها کامپایل نمی‌شوند. */
  // "preserveConstEnums": true,                       /* پاک کردن اعلان‌های "const enum" در کد ایجاد شده را غیرفعال می‌کند. */
  // "declarationDir": "./",                           /* دایرکتوری خروجی فایل های اعلان ایجاد شده را مشخص می‌کند. */
  // "preserveValueImports": true,                     /* مقادیر import  شده که استفاده نشده‌اند را در خروجی جاوااسکریپت حفظ می‌کند، در صورت فعال نبودن حذف می‌شوند. */
  /* Interop Constraints */
  // "isolatedModules": true,                          /* اطمینان حاصل می‌کند که هر فایل بدون در نظر گرفتن import های دیگر ترنسپایل می‌شود. */
  // "allowSyntheticDefaultImports": true,             /* اجازه می‌دهد زمانی که default export انجام نشده، به صورت 'import x from y' عمل شود.  */
  // "esModuleInterop": true,                             /* کامپایلر از کدهای خاصی برای بررسی شیء import شده استفاده می‌کند تا تشخیص دهد که آیا Exports پیش‌فرض است یا شیء Exports که بازنویسی شده. سپس آن را کامپایل می‌کند. */
  // "preserveSymlinks": true,                         /* مسیر واقعی symlink ها را غیرفعال می‌کند. */
  // "forceConsistentCasingInFileNames": true,            /* از درست بودن حروف import ها اطمینان حاصل می‌کند. */
  /* Type Checking */
  // "strict": true ,                                      /* بررسی تایپ ها را سخت گیرانه می‌کند. با فعال کردن این گزینه تمام گزینه های بعد فعال می‌شوند. */
  // "noImplicitAny": true,                            /* اگر تایپ any وجود داشت و کاربر آن را تعریف نکرده بود گزارش خطا می‌دهد. */
  // "strictNullChecks": true,                         /* هنگام بررسی تایپ، "null" و "undefined" را در نظر می‌گیرد. */
  // "strictFunctionTypes": true,                      /*  باعث می‌شود که پارامترهای توابع به درستی بررسی شوند. */
  // "strictBindCallApply": true,                      /* مطمئن می شود که از توابع bind یا call یا apply به صورتی استفاده شده است. */
  // "strictPropertyInitialization": true,             /* پراپرتی‌های کلاس را که اعلان شده‌اند ولی در سازنده تنظیم نشده‌اند را بررسی می‌کند. */
  // "noImplicitThis": true,                           /* هنگامی که "this" تایپ "any" داده می شود، گزارش خطا می‌دهد. */
  // "useUnknownInCatchVariables": true,               /* اجازه می‌دهد که تایپ متغیرها در catch clause از any به unknown تغییر کند.  */
  // "alwaysStrict": true,                             /* اطمینان حاصل می‌کند که از 'use strict' استفاده می شود. */
  // "noUnusedLocals": true,                           /* اگر متغیرهای محلی تعریف شده‌اند باید از آن ها استفاده شود.  */
  // "noUnusedParameters": true,                       /* پارامترهای تعریف شده و بدون استفاده مجاز نیستند. */
  // "exactOptionalPropertyTypes": true,               /* قوانین سخت گیرانه‌ای برای ‌‌پراپرتی‌های اختیاری در نظر می‌گیرد و نمی‌توان به آن‌های مقدار undefined داد. */
  // "noImplicitReturns": true,                        /*  نباید توابعی باشند که گاهی مقداری را return کرده و گاهی مقداری return نکنند. */
  // "noFallthroughCasesInSwitch": true,               /* فعال کردن گزارش خطا برای مواردی که در سوئیچ کیس به مشکل می‌خورد. */
  // "noUncheckedIndexedAccess": true,                 /* هنگامی که با استفاده ازindex به فیلدی که تعریف نشده دسترسی پیدا می‌کند، undefined را اضافه می‌کند. */
  // "noImplicitOverride": true,                       /* کلاسی که در یک کلاس مشتق شده override شود باید کلمه‌ی کلیدی override بگیرد. */
  // "noPropertyAccessFromIndexSignature": true,       /* برای دسترسی به فیلدی که اعلان نشده است، از index (obj["key"]) استفاده کنید. */
  // "allowUnusedLabels": true,                        /* گزارش خطا را برای لیبل‌های استفاده نشده غیرفعال می‌کند. */
  // "allowUnreachableCode": true,                     /* برای کد غیرقابل دسترس گزارش خطا را غیرفعال می‌کند. */
  /* Completeness */
  // "skipDefaultLibCheck": true,                      /* از بررسی تایپ فایل‌های .d.ts که در تایپ‌اسکریپت هستند صرف نظر می‌کند. */
  // "skipLibCheck": true                                 /* از بررسی تایپ فایل‌های .d.ts صرف نظر می‌کند. */
}
// }

function evenNumberFilter(num: number): boolean {
  return num % 2 === 0;
}

function oddNumberFilter(num: number): boolean {
  return num % 2 !== 0;
}

function filter(fnc: (num: number) => boolean): number[] {
  const arr: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  const result: number[] = [];

  for (const item of arr) {
    if (fnc(item)) {
      result.push(item);
    }
  }

  return result;
}

// console.log(filter(oddNumberFilter));
// console.log(filter(evenNumberFilter));
// console.log(1 % 2 !== 0);
let num = 0;

function factorialOf(n: number): number {
  ++num;
  console.log("num: " + num);
  console.log("n: " + n);
  return n <= 0 ? 1 : n * factorialOf(n - 1);
}

// console.log(factorialOf(5));

type Person = {
  id: string;
  name: string;
  age: number;
};

type ReadonlyIdPerson = {
  readonly id: string;
  name: string;
  age: number;
};
function excludeYoungPersons(
  arr: readonly Person[],
): readonly ReadonlyIdPerson[] {
  const result = arr
    .filter((obj) => obj.age > 30)
    .map((obj) => Object.freeze({ ...obj }));
  return result;
}
excludeYoungPersons([{ id: "1", name: "John", age: 35 }]);

const cars = ["Saab", "Volvo", "BMW"] as const;

type Values = string | number;


function sum(x:string,y:string):string
function sum(x:number,y:number):number
function sum(x: Values, y: Values) {
  if (typeof x === "string" || typeof y === "string") return `${x} ${y}`;

  return x + y;
}

const output1 = sum("hello", "world");
const output2 = sum(4, 5);

output1.replaceAll('a','b')
console.log(typeof output1);
console.log(typeof output2);

function out(m:  string []) {
  return m.push("hi")
  
}