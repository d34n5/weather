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
