import { required, minLength, numeric, min, max, validEmail, validate, } from "./validation";
console.log("mad");
document.querySelector("#submit-button")?.addEventListener("click", (e) => {
    e.preventDefault();
    const firstnameInput = document.getElementById("firstname");
    const lastnameInput = document.getElementById("lastname");
    const ageInput = document.getElementById("age");
    const emailInput = document.getElementById("email");
    console.log("mmad");
    const rules = {
        firstname: [required, minLength(2)],
        lastname: [],
        age: [numeric, min(4), max(120)],
        email: [required, validEmail],
    };
    const errors = validate({
        firstname: firstnameInput.value,
        lastname: lastnameInput.value,
        age: ageInput.value,
        email: emailInput.value,
    }, rules);
    showValidationResultField(firstnameInput, errors["firstname"] ?? []);
    showValidationResultField(lastnameInput, errors["lastname"] ?? []);
    showValidationResultField(ageInput, errors["age"] ?? []);
    showValidationResultField(emailInput, errors["email"] ?? []);
});
function showValidationResultField(inputElement, errors) {
    const ulElement = inputElement.nextElementSibling;
    ulElement.innerHTML = "";
    if (errors.length > 0) {
        inputElement.setAttribute("aria-invalid", "true");
        for (const err of errors) {
            const errorElement = document.createElement("li");
            errorElement.appendChild(document.createTextNode(err));
            ulElement.appendChild(errorElement);
        }
    }
    else {
        inputElement.setAttribute("aria-invalid", "false");
    }
}
