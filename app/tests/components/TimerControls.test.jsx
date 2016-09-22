var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jQuery');

var TimerControls = require('TimerControls');

describe('TimerControls', () => {
  it('should exist', () => {
    var timerControls = TestUtils.renderIntoDocument(<TimerControls timerStatus="stopped" onStatusChange={() => {}}/>);
    expect(timerControls).toExist();
  });

  describe('render', () => {
    it('should render the `Clear` button', () => {
      var timerControls = TestUtils.renderIntoDocument(<TimerControls timerStatus="stopped" onStatusChange={() => {}}/>);
      var $el = $(ReactDOM.findDOMNode(timerControls));
      var $clearButton = $el.find(".button:contains('Clear')");
      expect($clearButton.length).toBe(1);
    });

    it('should render the `Pause` button when the timer is `started`', () => {
      var timerControls = TestUtils.renderIntoDocument(<TimerControls timerStatus="started" onStatusChange={() => {}}/>);
      var $el = $(ReactDOM.findDOMNode(timerControls));
      var $pauseButton = $el.find(".button:contains('Pause')");
      expect($pauseButton.length).toBe(1);
    });

    it('should not render the `Start` button when the timer is `started`', () => {
      var timerControls = TestUtils.renderIntoDocument(<TimerControls timerStatus="started" onStatusChange={() => {}}/>);
      var $el = $(ReactDOM.findDOMNode(timerControls));
      var $startButton = $el.find(".button:contains('Start')");
      expect($startButton.length).toBe(0);
    });

    it('should render the `Start` button when the timer is `stopped`', () => {
      var timerControls = TestUtils.renderIntoDocument(<TimerControls timerStatus="stopped" onStatusChange={() => {}}/>);
      var $el = $(ReactDOM.findDOMNode(timerControls));
      var $startButton = $el.find(".button:contains('Start')");
      expect($startButton.length).toBe(1);
    });

    it('should not render the `Pause` button when the timer is `stopped`', () => {
      var timerControls = TestUtils.renderIntoDocument(<TimerControls timerStatus="stopped" onStatusChange={() => {}}/>);
      var $el = $(ReactDOM.findDOMNode(timerControls));
      var $pauseButton = $el.find(".button:contains('Pause')");
      expect($pauseButton.length).toBe(0);
    });
  });
});
