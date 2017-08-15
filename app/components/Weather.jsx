let React = require('react');
let WeatherForm = require('WeatherForm');
let WeatherMessage = require('WeatherMessage');
let OpenWeatherMap = require('OpenWeatherMap');

let Weather = React.createClass({
    getInitialState: function(){
        return {
            isLoading: false
        };
    },
    handleSearchLocation: function (locale) {
        let me = this;
        this.setState({
           isLoading: true
        });
        if(locale && (locale.toUpperCase() === 'ANITA') || (locale.toUpperCase() === 'ANA')){
            alert('Christian ama a anita');
            me.setState({
                isLoading: false,
                location: locale.toUpperCase() + ' and CHRISTIAN <3' ,
                temp: 13
            })
        }
        else{
            OpenWeatherMap.getWeather(locale).then(
                function (temp) {
                    me.setState({
                        location: locale,
                        temp: temp
                    });
                }, function (err) {
                    alert(err)
                }
            ).then(function(){
                me.setState({
                    isLoading: false
                })
            });
        }
    },
    render: function () {
        let temp = this.state.temp;
        let location = this.state.location;
        let isLoading = this.state.isLoading;

        function renderMessage(){
            if(isLoading){
                return <div className="alert alert-info mt-4"><strong>Loading data...</strong></div>
            } else if(temp && location){
                return <WeatherMessage temp={temp} location={location}/>
            }
        }

        return (
            <div className="d-flex justify-content-center">
                <div>
                    <h1 className="mx-sm-5 px-sm-5 mb-5">Get Weather</h1>
                    <WeatherForm onSearch={this.handleSearchLocation}/>
                    {renderMessage()}
                </div>
            </div>
        )

    }
});

module.exports = Weather;