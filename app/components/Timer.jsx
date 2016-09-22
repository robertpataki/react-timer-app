var React = require('react');
var Clock = require('Clock');
var TimerControls = require('TimerControls');

var Timer = React.createClass({
	getInitialState: function() {
		return {
			count: 0,
			timerStatus: 'stopped'
		};
	},

	handleStatusChange: function(newStatus) {
		this.setState({
			timerStatus: newStatus
		});
	},

	startTimer: function () {
		var {count} = this.state;

		this.timer = setInterval(() => {
			this.setState({
				count: ++count
			});
		}, 1000);
	},

	resetTimer: function() {
		clearInterval(this.timer);
		this.timer = undefined;
	},

	componentWillUnmount: function() {
		this.resetTimer();
	},

	componentDidUpdate: function(prevProps, prevState) {
		var {count} = this.state;

		if(prevState.timerStatus !== this.state.timerStatus) {
			switch(this.state.timerStatus) {
				case 'started':
					this.startTimer();
					break;
				case 'stopped':
						this.setState({
							count: 0
						});
				case 'paused':
					this.resetTimer();
					break;
			}
		}
	},

	render: function() {
		var {timerStatus, count} = this.state;

		return (
			<div>
				<h1 className="page-title">Timer App</h1>
				<Clock totalSeconds={count}/>
				<TimerControls onStatusChange={this.handleStatusChange} timerStatus={timerStatus}/>
			</div>
		)
	}
});

module.exports = Timer;
