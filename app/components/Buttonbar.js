const React = require('react');

var Buttonbar = React.createClass({
  propTypes: {
    startBtnDisabled: React.PropTypes.bool,
    onStart: React.PropTypes.func.isRequired,
    onPause: React.PropTypes.func.isRequired,
    onReset: React.PropTypes.func.isRequired
  },
  render: function() {
    return (
      <div className='buttonBar'>
        <button id='startBtn' className='hollow button large' onClick={this.onStartClickHandler}>Start</button>
        <button id='pauseBtn' className='hollow button large' onClick={this.onPauseClickHandler}>Pause</button>
        <button id='resetBtn' className='hollow button secondary large' onClick={this.onResetClickHandler}>Reset</button>
      </div>
    );
  },
  componentDidMount: function() {
    $('#pauseBtn').addClass('hide');
    $('#resetBtn').addClass('disabled');
    var {startBtnDisabled} = this.props;
    if (startBtnDisabled) {
      $('#startBtn').addClass('disabled');
    }
  },
  componentWillReceiveProps: function(newProps) {
    var {startBtnDisabled} = newProps;
    if (startBtnDisabled) {
      $('#startBtn').addClass('disabled');
    } else {
      $('#startBtn').removeClass('disabled');
    }
  },
  onStartClickHandler: function() {
    this.toggleButton();
    $('#resetBtn').addClass('disabled');
    this.props.onStart();
  },
  onPauseClickHandler: function() {
    this.toggleButton();
    $('#resetBtn').removeClass('disabled');
    this.props.onPause();
  },
  onResetClickHandler: function() {
    $('#resetBtn').addClass('disabled');
    this.props.onReset();
  },
  toggleButton: function() {
    $('#startBtn').toggleClass('hide');
    $('#pauseBtn').toggleClass('hide');
  }
});

module.exports = Buttonbar;
