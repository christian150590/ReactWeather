let React = require('react');
let { Link, IndexLink } = require('react-router');

let Navbar = React.createClass({
    render: function(){
        return (
            <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <a className="navbar-brand">React Weather</a>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <IndexLink className="nav-link" activeClassName='active' to="/">Get Weather</IndexLink>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" activeClassName='active' to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" activeClassName='active' to="/examples">Examples</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
});

module.exports = Navbar;