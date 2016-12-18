import React from 'react';
import Display from './display';
import Display2 from './display2';

export default class App extends React.Component{
  render(){
    return(
      <div>
        <h1>marconeoportfolio</h1>
        <Display/>
        <Display2/>
      </div>
      );
  }
}