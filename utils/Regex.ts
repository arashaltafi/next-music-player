const numericRegex = /^[0-9]+$/;
const phoneRegex = /^09[0-9]{9}$/;
const FourNumRegex = /[0-9]{4}$/;
const englishWithNumberRegex = /^[a-zA-Z]+(?:\s?[0-9]+)*$/;
// const englishWithDotRegex = /^(?!.*\.$)(?!^\.$)[a-zA-Z]+(?:\.[a-zA-Z]+)?$/;
const usernameRegex = /^[a-zA-Z0-9]+$/;

const isNumeric = (input: string): boolean => {
    return numericRegex.test(input);
};

const isPhone = (phone: string): boolean => {
    return phoneRegex.test(phone);
}

const isNumber4Length = (code: string) => {
    return FourNumRegex.test(code);
}

const isValidUsername = (inputValue: string): boolean => {
    if (usernameRegex.test(inputValue) && englishWithNumberRegex.test(inputValue)) {
        return true;
    } else {
        return false;
    }
}

const isValidName = (inputValue: string): boolean => {
    if (usernameRegex.test(inputValue) && englishWithNumberRegex.test(inputValue)) {
        return true;
    } else {
        return false;
    }
}

export { isNumeric, isPhone, isNumber4Length, isValidUsername, isValidName }