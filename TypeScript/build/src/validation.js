import { requiredMessage, minLengthMessage, numericMessage, minMessage, maxMessage, validEmailMessage, } from "./messages";
export function validate(data, schema) {
    const errors = {};
    for (const key in schema) {
        const validators = schema[key];
        const value = data[key];
        if (!validators)
            continue;
        for (const validator of validators) {
            const error = validator(value, key);
            if (error) {
                if (!errors[key]) {
                    errors[key] = [];
                }
                errors[key].push(error);
            }
        }
    }
    console.log(errors);
    console.log(errors["firstname"]);
    return errors;
}
export const required = (value, fieldName) => {
    if (value === "" || value === null || value === undefined) {
        return requiredMessage(fieldName);
    }
    return null;
};
export const numeric = (num, fieldName) => {
    const isNumeric = /^\d+$/.test(String(num));
    return isNumeric ? null : numericMessage(fieldName);
};
export const validEmail = (email, fieldName) => {
    return typeof email === 'string' && email.includes("@") ? null : validEmailMessage(fieldName);
};
//Factory function:
export function minLength(minLength) {
    return function (valueLength, fieldName) {
        return minLength <= valueLength.length
            ? null
            : minLengthMessage(fieldName, minLength);
    };
}
export function max(maxNum) {
    return function (num, fieldName) {
        return num <= maxNum ? null : maxMessage(fieldName, maxNum);
    };
}
export function min(minNum) {
    return function (num, fieldName) {
        return num >= minNum ? null : minMessage(fieldName, minNum);
    };
}
validate({
    firstname: "m",
    lastname: "niko",
    age: 20,
    email: "mohammadniko",
}, {
    firstname: [required, minLength(2)],
    lastname: [],
    age: [numeric, min(4), max(120)],
    email: [required, validEmail],
});
