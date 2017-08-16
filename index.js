module.exports = function rogu(label) {
  return function log(value) {
    console.log(label, value);
    return value;
  }
};
