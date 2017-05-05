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
          <p className='timeP'>{this.props.time}</p>
        </div>
        <div>
          <p className='statusP'>{this.props.status}</p>
        </div>
      </div>
    );
  }
});

module.exports = Clock;
