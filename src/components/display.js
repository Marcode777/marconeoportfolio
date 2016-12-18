import React from 'react';
const Style1 = {
  backgroundColor: 'red',
  minHeight: 250
}
const Style2 = {
  backgroundColor:'blue',
  minHeight: 250
}




export default class Display extends React.Component{
  render(){
    return(
      <div>
        <div className="first" style={Style1}>
          <h2>display.js</h2>
        </div>
        <div className="second" style={Style2}>
          <h3>display.js2</h3>
        </div>
      </div>

      );
  }
}