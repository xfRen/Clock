const React = require('react');
const {Link, IndexLink} = require('react-router');

var TopNav = React.createClass({
  render: function() {
    return (
      <div>
        <div className='title-bar' data-responsive-toggle='topBar' data-hide-for='medium'>
          <button className='menu-icon' type='button' data-toggle='topBar'></button>
          <div className='title-bar-title'>Menu</div>
        </div>
        <div className='top-bar' id='topBar'>
          <div>
            <div className='top-bar-left'>
              <ul className='menu'>
                <li>
                  <IndexLink to='/' activeClassName='active' activeStyle={{fontWeight: 'bold'}}>Stopwatch</IndexLink>
                </li>
                <li>
                  <Link to='/timer' activeClassName='active' activeStyle={{fontWeight: 'bold'}}>Timer</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  },
  componentDidMount: function() {
    $(this.getDOMNode()).foundation();
  }
});

module.exports = TopNav;
