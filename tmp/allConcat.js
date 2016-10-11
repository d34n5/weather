var apiKey = "99e41ad3e46000922fa664051c778196";

$(document).ready(function(){
  $('#weatherLocation').click(function(){
    var city = $('#location').val();
    $('#location').val("");

    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey, function(response){
      var temp = response.main.temp*9/5-459;
      $('.showWeather').text("The city you have chosen is " + city + ".  " + "And the relative humidity is " + response.main.humidity.toString() + "%.  Lastly, Dean is competent enough to tell you the temp in F is: " + temp );
      console.log(response);
    });
  });
});
