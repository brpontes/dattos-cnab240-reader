
/**
 * 
 * @function
 * @description Format date from DMY to D/M/Y
 * @example 
 * fmtDate('04012019') //Returns 04/01/2019
 * @param {string} date - String to format
 * @returns {string} The formated date
 */
export const fmtDate = (date) => {
    const day = date.substring(0, 2)
    const month = date.substring(2, 4)
    const year = date.substring(4, 8)

    return `${day}/${month}/${year}`
}