import React from 'react';
const Style1 = {
  backgroundColor: 'red',
  minHeight: 200
}

export default class Display extends React.Component{
  render(){
    return(
      <div style={Style1}>
        <h2>display.js</h2>
        <h3>kolokoyz</h3>
      </div>
      );
  }
}