import { animals } from './animals';//importing animals object from animals.js
import React from 'react';//importing React from react
import {createRoot} from 'react-dom/client';//import createRoot from react-dom/client
const container = document.getElementById('app');//getting a reference of the HTML element by it's id
const root = createRoot(container);//creating a React root to render content using createRoot() method and container as argument.
const title = 'Click an animal to know more about it!';
const background = <img
    className= 'background'
    alt='ocean'
    src='/images/ocean.jpg'/>;

 function displayFact(e) {
   const animal = e.target.alt;
   const index = Math.floor(Math.random()* animals[animal].facts.length);
   const funFact = animals[animal].facts[index];
   const p = document.getElementById('fact');
   p.innerHTML = funFact;
 }

 const images = [];
 for(const animal in animals) {
   const image = (
   <img
     onClick={displayFact}
     key={animal}
     className='animal'
     alt={animal}
     src={animals[animal].image}
     aria-label={animal}
     role='button'
    />
   );
    images.push(image);  
 } 
const showBackground = true;
const animalFacts = ( 
  <div>  
    <h1>
   {title || 'Click an animal for a fun fact!'}
    </h1>
  {showBackground && background}
  <div className='animals'>{images}</div>   
  <p id='fact'></p>
  </div>  
);
root.render(animalFacts);








