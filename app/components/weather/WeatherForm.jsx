let React = require('react');

let WeatherForm = React.createClass({
    onFormSubmit: function () {
        let location = this.refs.cityName.value;
        if(location.length > 0){
            this.refs.cityName.value = '';
            this.props.onSearch(location);
        }
    },
    render: function () {
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Enter city name" ref='cityName'/>
                    </div>
                    <button className="btn btn-outline-primary btn-block">Get Weather</button>
                </form>
            </div>
        );
    }
});

module.exports = WeatherForm;