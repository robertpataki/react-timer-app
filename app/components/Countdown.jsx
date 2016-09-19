var React = require('react');
var Clock = require('Clock');
var CountdownForm = require('CountdownForm');

var Countdown = React.createClass({
	getInitialState: function() {
		return {
			count: 0,
			countdownStatus: 'stopped'
		};
	},

	componentDidUpdate: function(prevProps, prevState) {
		if (this.state.countdownStatus !== prevState.countdownStatus) {
			switch (this.state.countdownStatus) {
				case 'started':
					this.startTimer();
					break;
				default:
					this.resetTimer();
					break;
			}
		}
	},

	startTimer: function() {
		this.timer = setInterval(() => {
			var oldCount = this.state.count;
			var newCount = this.state.count - 1;

			if(newCount > 0) {
				this.setState({
					count: newCount
				});
			} else {
				this.resetTimer();
			}
		}, 1000);
	},

	resetTimer: function() {
		clearInterval(this.timer);
		this.timer = undefined;
		this.setState({
			count: 0,
			countdownStatus: 'stopped'
		});
	},

	handleSetCountdown: function(seconds) {
		this.setState({
			count: seconds,
			countdownStatus: 'started'
		});
	},

	render: function () {
		var {count} = this.state;
		return (
			<div>
				<Clock totalSeconds={count}/>
				<CountdownForm onSetCountdown={this.handleSetCountdown}/>
			</div>
		)
	}
});

module.exports = Countdown;
