export const requiredMessage = (fieldName) => `${fieldName} should not be empty`;
export const minLengthMessage = (fieldName, n) => `${fieldName} should be at least ${n} characters`;
export const numericMessage = (fieldName) => `${fieldName} should be numeric`;
export const minMessage = (fieldName, n) => `${fieldName} should be greater than or equal to ${n}`;
export const maxMessage = (fieldName, n) => `${fieldName} should be less than or equal to ${n}`;
export const validEmailMessage = (fieldName) => `${fieldName} should be valid email`;
