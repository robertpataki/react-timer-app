var React = require('react');
var {Link , IndexLink} = require('react-router');

var Navigation = React.createClass({
	render: () => {
		return (
			<div className="top-bar">
  			<div className="top-bar-left">
  				<ul className="menu">
      			<li className="menu-text">
      				React Timer App
      			</li>
      			<li>
      				<IndexLink to="/" activeClassName="active-link">Timer</IndexLink>
      			</li>
      			<li>
      				<Link to="/">Countdown</Link>
      			</li>
    			</ul>
  			</div>

  			<div className="top-bar-right">
  				<ul className="menu">
  					<li className="menu-text">Created by<a href="http://robertpataki.com" target="_blank">Rob Pataki</a></li>
  				</ul>
  			</div>
  		</div>
		);
	}
});

module.exports = Navigation;