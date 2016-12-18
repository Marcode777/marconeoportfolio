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

      <div style={Style1}>
        <h2>display.js</h2>
        <div>
          <h3>display.js2</h3>
        </div>
      </div>

      );
  }
}