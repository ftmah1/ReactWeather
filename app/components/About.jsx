var React = require('react');

/*var About = React.createClass({
  render: function(){
    return(
      <h3>About Component</h3>
    );
  }
});*/


var About = (props) => {
  return(
    <div>
      <h1 className='text-center'>About</h1>
      <p>This is a weather application</p>
      <p>
        <ul>
        <li>
          <a href="https://facebook.github.io.react">React</a> -This was the JavaScript framework used.
        </li>
        <li>
          <a href="https://openweathermap.org">Open Weather Maps</a> - Ope Weather Map used for weather data by city name.
        </li>
        </ul>
      </p>
   </div>
  )
};

module.exports = About;
