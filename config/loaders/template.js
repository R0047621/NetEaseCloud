module.exports = function (result) {
    return `export default '${result.replace(/\n/g, '')}'`;
};
