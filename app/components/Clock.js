const React = require('react');

var Clock = React.createClass({
  propTypes: {
    status: React.PropTypes.string.isRequired,
    time: React.PropTypes.string.isRequired
  },
  render: function() {
    return (
      <div>
        <div>
          <p className='time-paragraph'>{this.props.time}</p>
        </div>
        <div>
          <p className='status-paragraph'>{this.props.status}</p>
        </div>
      </div>
    );
  }
});

module.exports = Clock;
