var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jQuery');

var CountdownControls = require('CountdownControls');

describe('CountdownControls', ()=> {
  it('should exist', ()=> {
    var controls = TestUtils.renderIntoDocument(<CountdownControls countdownStatus="stopped" onStatusChange={() => {}} />);
    expect(controls).toExist();
  });

  describe('render', ()=> {
    it('should render `Pause` button when started', () => {
      var controls = TestUtils.renderIntoDocument(<CountdownControls countdownStatus="started"  onStatusChange={() => {}}/>);
      var $el = $(ReactDOM.findDOMNode(controls));
      var $pauseButton = $el.find(".button:contains('Pause')");

      expect($pauseButton.length).toBe(1);
    });
  });

  it('should render `Start` button when started', () => {
    var controls = TestUtils.renderIntoDocument(<CountdownControls countdownStatus="paused"  onStatusChange={() => {}}/>);
    var $el = $(ReactDOM.findDOMNode(controls));

    var $startButton = $el.find("button:contains('Start')");

    expect($startButton.length).toBe(1);
  });
});
