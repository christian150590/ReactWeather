let axios = require('axios');
//ba82675f1e760ed1b00fe3d4f1daf4b0
module.exports = {
  getWeather: function (location) {
      let locale = encodeURIComponent(location);
      let url = `http://api.openweathermap.org/data/2.5/weather?q=${locale}&appid=ba82675f1e760ed1b00fe3d4f1daf4b0&units=metric`;
      return axios.get(url).then(function(resp){
          if(resp.data.cod && resp.data.message){
              throw new Error(resp.data.message);
          } else {
              return resp.data.main.temp;
          }
      }, function(err){
          throw new Error(err.data.message);
      })
  }
};