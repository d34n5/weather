function Temperature(k) {
  this.k = k;
}

Temperature.prototype.f = function() {
  return this.k*9/5-456;
};

Temperature.prototype.c = function() {
  return this.k-273;
};

exports.tempConversion = Temperature;
