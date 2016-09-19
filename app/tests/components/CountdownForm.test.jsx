var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var CountdownForm = require('CountdownForm');

describe('CountdownForm', () => {
	it('should exist', () => {
		var countdownForm = TestUtils.renderIntoDocument(<CountdownForm />);
		expect(countdownForm).toExist();
	});

	describe('onSetCountdown', () => {
		it('should call onSetCountdown if valid seconds entered', () => {
			var spy = expect.createSpy();
			var countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>);
			var $el = $(ReactDOM.findDOMNode(countdownForm));
			var formEl = $($el.find('form'))[0];

			// Manually Setting the value of the INPUT field
			countdownForm.refs.seconds.value = 109;
			// Simulate a SUBMIT click on the FORM
			TestUtils.Simulate.submit(formEl);
			expect(spy).toHaveBeenCalledWith(109);
		});

		it('should not call onSetCountdown if invalid value entered', () => {
			var spy = expect.createSpy();
			var countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>);
			var $el = $(ReactDOM.findDOMNode(countdownForm));
			var formEl = $($el.find('form'))[0];

			countdownForm.refs.seconds.value = '';
			TestUtils.Simulate.submit(formEl);
			expect(spy).toNotHaveBeenCalled();
		});

		it('should not call onSetCountdown if value containing alphabetical characters entered', () => {
			var spy = expect.createSpy();
			var countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>);
			var $el = $(ReactDOM.findDOMNode(countdownForm));
			var formEl = $($el.find('form'))[0];

			countdownForm.refs.seconds.value = 'alksjdf';
			TestUtils.Simulate.submit(formEl);
			expect(spy).toNotHaveBeenCalled();
		});

		it('should not call onSetCountdown if value containing punctuation entered', () => {
			var spy = expect.createSpy();
			var countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>);
			var $el = $(ReactDOM.findDOMNode(countdownForm));
			var formEl = $($el.find('form'))[0];

			countdownForm.refs.seconds.value = '1234.1234';
			TestUtils.Simulate.submit(formEl);
			expect(spy).toNotHaveBeenCalled();
		});
	});
});
