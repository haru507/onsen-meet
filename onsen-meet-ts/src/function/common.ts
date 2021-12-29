/**
 * Validate input email
 * @param email
 * @returns {boolean}
 */
 export const isValidEmailFormat = (email: string): Boolean => {
    const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    return regex.test(email)
}


/**
 * Show an alert if required input is blank
 * @param args Required input values
 * @returns {boolean}
 */
export const isValidRequiredInput = (...args: any[]): Boolean => {
    let validator = true;
    for (let i=0; i < args.length; i=(i+1)|0) {
        if (args[i] === "") {
            validator = false;
        }
    }
    return validator
};