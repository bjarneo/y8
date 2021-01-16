
const among = require('among');
const delve = require('dlv');

const find = among('{{', '}}');

/**
 * This function will transform a string with placeholders with the object passed to the function 1:1
 * 
 * @param {string} str This is the string with the placeholders i.e html string
 * @param {object} obj This is the object with data to replace the placeholders
 * @returns {string} The transformed template
 */
function template(str = '', obj = {}) {
    const placeholders = find(str);
    const replacements = placeholders.map(placeholder => delve(obj, placeholder, undefined));

    return placeholders.reduce((acc, curr, idx) => acc.replace(
        new RegExp(`{{${curr}}}`),
        replacements[idx]
    ), str);
}

module.exports = template;