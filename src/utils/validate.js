/**
 * @param {string} url
 * @return {boolean}
 */

export function validUsername(str) {
    const valid_map = ['admin', 'editor']
    return valid_map.indexOf(str.trim()) >= 0
}


/**
 * @param {string} path
 * @returns {Boolean}
 */


export function isExternal(path) {
    return /^(https?:|mailto:|tel:)/.test(path)
}