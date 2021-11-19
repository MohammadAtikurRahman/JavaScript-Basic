Complex.prototype.type = 'Complex';
Complex.prototype.isComplex = true;
Complex.prototype.toJSON = function () {
 return {
  mathjs: 'Complex',
Complex.prototype.toPolar = function () {
 return {
  r: this.abs(),
Complex.prototype.format = function (options) {
 var str = '';
 var im = this.im;
Complex.prototype.valueOf = Complex.prototype.toString;