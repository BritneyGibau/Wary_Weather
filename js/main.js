// Default location (area code or city, state – in quotes)
var lc = "Providence, RI";


// Really Simple Weather Plug-In Details

reallySimpleWeather.weather({
  wunderkey: '', // leave blank for Yahoo API
  location: lc, //your location here, also works in lat/lon
  woeid: '', // "Where on Earth ID" optional alternative to location
  unit: 'f', // 'c' also works
  success: function(weather) {
    // sample data to display city and temperature
    html = '<main>';
  html += '<section class="top">';
    html += '<div class="left">';
     html +='<img src="img/warylogo1.svg" class="imagehander">';
    html += '</div>';


     html += '<div class="right">';
      html += '<h1 class= "wdata-01">'+weather.city+', '+weather.region+'</h1>';
      //html += '<h1 class= "wdata-02">'+weather.updated+'</h1>';
     html += '</div>';
  html += '</section>';



  html += '<section class="middle">';
    html += '<div class="left">';
    html +='<i class="icon icon-'+weather.code+'"></i>';

      html += '<p class= "wdata-03">'+weather.currently+'<p>';
      html +='<img src="img/sunrise.svg" class="imagehelp">';
      html += '<h2 class= "wdata-04">'+weather.sunrise+'</h2>';
      
       html +='<img src="img/sunset.svg" class="imagehelp">';
      html += '<h2 class= "wdata-05">'+weather.sunset+'</h2>';
    html += '</div>';

    html += '<div class="right">';
      html += '<h3 class= "wdata-06">'+weather.temp+'&deg</h3>';
      html += '<h4 class= "wdata-07">'+weather.humidity+' % <img src="img/umbrella.svg" class="imagehelpin"></h4>';
      html += '<h5 class= "wdata-08">'+weather.wind.speed+' MPH </h5>';
      html += '<h6 class= "wdata-09">'+weather.high+'&deg <img src="img/high.svg" class="imagehelper"></h6>';
      html += '<h6 class= "wdata-10">'+weather.low+'&deg <img src="img/low.svg" class="imagehelper"></h6>';
    html += '</div>';

  html += '</section>';











                                                                                                                                                                                                                                                         
    html += '<section class="bottom">'; 
    html += '<div class= "cast1">';
      html += '<h2 class= "wdata-12">'+weather.forecast[1].day+'</h2>';
      html += '<h2 class= "wdata-14">'+weather.forecast[1].high+'&deg</h2>';
      html += '<h2 class= "wdata-15">'+weather.forecast[1].low+'&deg</h2>';
    html += '</div>';
     
    html += '<div class= "cast2">';
      html += '<h2 class= "wdata-12">'+weather.forecast[2].day+'</h2>';
      html += '<h2 class= "wdata-14">'+weather.forecast[2].high+'&deg</h2>';
      html += '<h2 class= "wdata-15">'+weather.forecast[2].low+'&deg</h2>';
    html += '</div>';

    html += '<div class= "cast3">';
      html += '<h2 class= "wdata-12">'+weather.forecast[3].day+'</h2>';
      html += '<h2 class= "wdata-14">'+weather.forecast[3].high+'&deg</h2>';
      html += '<h2 class= "wdata-15">'+weather.forecast[3].low+'&deg</h2>';
    html += '</div>';

    html += '<div class= "cast4">';
      html += '<h2 class= "wdata-12">'+weather.forecast[4].day+'</h2>';
      html += '<h2 class= "wdata-14">'+weather.forecast[4].high+'&deg</h2>';
      html += '<h2 class= "wdata-15">'+weather.forecast[4].low+'&deg</h2>';
    html += '</div>';
    html += '</section>';
    html += '</main>';
	  document.getElementById('weather').innerHTML = html;
  },
  error: function(error) {
	  document.getElementById('weather').innerHTML = '<p>'+error+'</p>';
  }
});


