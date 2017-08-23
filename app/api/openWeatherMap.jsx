var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?&units=imperial&appid=2c2b309e25498592ef21fd928b67a7c4';

module.exports = {
  getTemp: function(location){
    var encodedLocation = encodeURIComponent(location);
    var requestUrl =`${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl).then(function(res){
    
      if(res.data.message && res.data.cod){
          throw new Error(res.data.message);
      }else{
        return res.data.main.temp;
      }

    }, function(res){
      throw new Error(res.data.message);
    });

  }
}


//2c2b309e25498592ef21fd928b67a7c4
//inline-source-map" or "eval-source-map"
