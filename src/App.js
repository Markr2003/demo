import React, { useState } from 'react';
import './App.css';
import image from "./assests/IMG_7364.JPG"


function App(){

  return (
    <div className="App">
      <header className="App-header">
        <h3>Mark Richard M</h3>
        
        <img src={image}  alt="Profile" style={{ width: '150px', height: '150px', borderRadius: '80%' }} ></img>
        <div className='content'>
        <p>Hard-Working ECE student with a passsion to work in growth-oriented Organization where my skills will be usefull,active to all challenges and learning new ideas  to achieve goals of the organization</p>
       
        <h3>EDUCATION</h3>
        <p>SSLC: St Joseph Matriculation higher Secondary School</p>
        <p>HSC: Infant Jesus Matriculation Higher Secondary School</p>
        <h3>SKILLS</h3>
        <p>. React JS</p>
        <p>. Node Js</p>
          <h3>Project</h3>
          <p>. Help vest for autism cildren</p>
          <p>. Cloud Coffee Website</p>

          <h3>DECLARATION</h3>

          <p>I Mark Richard hereby assure you that the above furnished information is true to best of my knoweldge.   </p>
                
        
        </div>
      </header>
    </div>
  );
  }
export default App;
