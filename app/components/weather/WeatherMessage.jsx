let React = require('react');

let WeatherMessage = React.createClass({
    render: function () {
        let temp = this.props.temp;
        let location = this.props.location;
        return (
            <h3 className="text-center pt-4">It's {temp} in {location}</h3>
        )

    }
});

module.exports = WeatherMessage;