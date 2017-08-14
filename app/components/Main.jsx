let React = require('react');
let NavBar = require('Navbar');

let Main = React.createClass({
    render: function () {
        return (
            <div>
                <NavBar/>
                <div className="container mt-5">
                    {this.props.children}
                </div>
            </div>
        );
    }
});

module.exports = Main;