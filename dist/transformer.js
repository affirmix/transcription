"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var fs = _interopRequire(require("fs"));

var Transformer = function Transformer(data) {
  _classCallCheck(this, Transformer);

  var json = JSON.stringify(data[0][0]);

  fs.writeFileSync(htmlFile, json);

  //console.log(template({data: data[0][0]}));
};

module.exports = Transformer;