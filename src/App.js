import React from 'react';
import './App.css';
import './style.css';
import firstImage from "./first-picture.png";
import secondImage from './second-picture.jpg';
import transform from './goku-transform.mp4'

function App() {
  return (
    <div className="App">
      <div 
      className="my-container"
      style={{border: "solid 1px black", maxWidth: "100vw"}}>
        <h1 className="title red">Hi, I'm Son Gokû !</h1>
        <br/>
        <img src={firstImage} alt="First "/>
        <br/>
        <img
        src={secondImage} 
        alt="Second "/>
      </div>
      <h2 className="title red">Son Gokû Transformation</h2>
      <video src={transform} controls style={{width: "320px" , height: "240px"}} />

    </div>
  );
}

export default App;
