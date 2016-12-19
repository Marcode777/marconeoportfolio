import React from 'react';
const Style1 = {
  backgroundColor: '#3366ff',
  minHeight: 250
}

const Style2 = {
  backgroundColor:'#1a53ff',
  minHeight: 350
}

const Style3 = {
  backgroundColor:' #0040ff',
  minHeight: 200
}



export default class Display extends React.Component{
  render(){
    return(
      <div>
        <div className="first" style={Style1}>
          <h2>display1</h2>
        </div>
        <div className="second" style={Style2}>
          <h3>display2</h3>
        </div>
         <div className="third" style={Style3}>
          <h3>display3</h3>
        </div>
      </div>

      );
  }
}