function greet(person, date) {
    console.log(`Hello ${person}, today is ${date}!`);
    return person;
}
function printName(obj) {
    return obj.name + (obj === null || obj === void 0 ? void 0 : obj.last);
}
printName({ name: "mmad", last: "nik" });
printName({ name: "ali" });
function printID(id) {
    return typeof id === "string" ? Number(id) : id;
}
printID(552455);
const ali = {
    url: "example.com",
    method: "GET",
};
// handleRequest(ali.url, ali.method as "GET");
handleRequest(ali.url, ali.method);
var Status;
(function (Status) {
    Status[Status["Success"] = 0] = "Success";
    Status[Status["Error"] = 1] = "Error";
    Status[Status["Loading"] = 2] = "Loading";
})(Status || (Status = {}));
function padLeft(padding, input) {
    if (padding !== null && input !== null) {
        if (typeof padding === "number") {
            return " ".repeat(padding) + input;
        }
        else {
            return padding;
        }
    }
}
function getArea(shape) {
    if ("radius" in shape && shape.radius) {
        return Math.PI * shape.radius ** 2;
    }
    else if ("sideLength" in shape) {
        return shape.sideLength ** 2;
    }
}
export {};
