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
        <div style={Style1}>
          <h2>Display.js</h2>
        </div>
        <div style={Style2}>
          <h3>Display.js</h3>
        </div>
      </div>

      );
  }
}