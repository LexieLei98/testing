/* The function sumArgs should accept any number of arguments, and add them together. If given one argument, it should return that. If it is not given arguments, it should return 0 */

function sumArgs(...args) {
    if (args === null) {
        return 0
    } else {
        return args.reduce((val,sum) => val + sum, 0);
    }
}

module.exports = sumArgs;
