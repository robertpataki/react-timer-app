var React = require('react');
var Clock = require('Clock');
var CountdownForm = require('CountdownForm');

var Countdown = React.createClass({
	render: () => {
		return (
			<div>
				<h2>Countdown page</h2>
				<Clock totalSeconds={129}/>
				<CountdownForm/>
			</div>
		)
	}
});

module.exports = Countdown;