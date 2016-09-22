var React = require('react');

var TimerControls = React.createClass({
  propTypes: {
    timerStatus: React.PropTypes.string.isRequired,
    onStatusChange: React.PropTypes.func.isRequired
  },

  onStatusChange: function(newStatus) {
    // console.log('[TimerControls] - onStatusChange() - newStatus: ', newStatus);

    return () => {
      this.props.onStatusChange(newStatus);
    }
  },

  render: function() {
    var {timerStatus} = this.props;

    var renderStartPauseButton = () => {
      if (timerStatus === 'started') {
        return <button className="button primary" onClick={this.onStatusChange('paused')}>Pause</button>;
      } else {
        return <button className="button primary" onClick={this.onStatusChange('started')}>Start</button>;
      }
    };

    return (
      <div className="controls">
        {renderStartPauseButton()}
        <button className="button alert hollow" onClick={this.onStatusChange('stopped')}>Clear</button>
      </div>
    );
  }
});

module.exports = TimerControls;
