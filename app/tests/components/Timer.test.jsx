var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jQuery');

var Timer = require('Timer');

describe('Timer', () => {
  it('should exist', () => {
    var timer = TestUtils.renderIntoDocument(<Timer />);
    expect(timer).toExist();
  });

  describe('handleStatusChange', () => {
    it('should set the state to `started` and count', (done) => {
      var timer = TestUtils.renderIntoDocument(<Timer />);
      timer.handleStatusChange('started');

      setTimeout(() => {
        expect(timer.state.count).toBe(1);
        done();
      }, 1001);
    });

    it('should set the state to `paused` and pause counting', (done) => {
      var timer = TestUtils.renderIntoDocument(<Timer />);
      timer.setState({
        count: 3
      });
      timer.handleStatusChange('started');
      timer.handleStatusChange('paused');

      setTimeout(() => {
        expect(timer.state.count).toBe(3);
        expect(timer.state.timerStatus).toBe('paused');
        done();
      }, 1001);
    });

    it('should set the state to `stopped` and reset the counter', (done) => {
      var timer = TestUtils.renderIntoDocument(<Timer />);
      timer.setState({
        count: 3
      });
      timer.handleStatusChange('started');
      timer.handleStatusChange('stopped');

      setTimeout(() => {
        expect(timer.state.count).toBe(0);
        expect(timer.state.timerStatus).toBe('stopped');
        done();
      }, 1001);
    });
  });

  // describe('componentWillUnmount', () => {
  //   it('should stop the timer', (done) => {
  //     var timer = TestUtils.renderIntoDocument(<Timer />);
  //     timer.setState({
  //       count: 3
  //     });
  //     timer.handleStatusChange('started');
  //     timer.componentWillUnmount();
  //
  //     setTimeout(() => {
  //       expect(timer.count).toBe(3);
  //       done();
  //     }, 1001);
  //   });
  // });
});
