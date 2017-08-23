var React = require('react');

/*var WeatherMsg = React.createClass({
  render: function(){
    var location = this.props.location;
    var temp = this.props.temp;
    return(
      <p>It's {temp} in {location}</p>
    );
  }
});*/

var WeatherMsg = ({temp, location}) =>{
  return(
    <h3>It's {temp} in {location}</h3>
  );
}

module.exports = WeatherMsg;
