(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}],2:[function(require,module,exports){
var apiKey = "99e41ad3e46000922fa664051c778196";
var Temperature = require('./../js/temperature.js').tempConversion;

$(document).ready(function(){
  $('#weatherLocation').click(function(){
    var city = $('#location').val();
    $('#location').val("");

    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey, function(response){
      var tempK = response.main.temp;
      var cityTemp = new Temperature(tempK);

      $('.showWeather').html("<br><br>The city you have chosen is " + city + ".  " + "<br>And the relative humidity is " + response.main.humidity.toString() + "%.  <br> Lastly, Dean is competent enough to tell you the temp in F is: " + cityTemp.f().toFixed(2) + " <br> And Karen can tell you the temp in C is: " + cityTemp.c().toFixed(2));
      console.log(response);
    });
  });
});

},{"./../js/temperature.js":1}]},{},[2]);
