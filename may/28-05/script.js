exports.sum = (x, y) => x + y;
exports.sub = (x, y) => x - y;

exports.multi = (x, y) => x * y;
// exports.prepareString = (str) => capital_letter(str);
exports.capital_letter = function (str) {
  str = str.split(" ");
  for (var i = 0, z = str.length; i < z; i++) {
    str[i] = str[i][0].toUpperCase() + str[i].substr(1);
  }
  console.log(str.join(" ").replace(" ", ""));
};
