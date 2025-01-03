'use client';

import { useState } from 'react';

export default function Box(){

  const [color, setColor] = useState('#666b75');
  
  const handleMouseEnter = () => {
    setColor(randomColor());
  }
  const handleMouseLeave = () => {
    setColor(color)
  }
  
  function randomColor() {
    // colorArray: Red, Orange, Yellow, Green, Teal, Blue, Violet
    const colorArray = ['#c14343', '#d08d47', '#d5c34b', '#2b8046', '#3f8197', '#3058a3', '#78568e'];
    const randomIndex = Math.floor(Math.random() * colorArray.length);

    return colorArray[randomIndex]
  }
  
  return (
    <>
    <div 
      onMouseEnter={handleMouseEnter} 
      onMouseLeave={handleMouseLeave}

      className="colorBox" 
      style={{backgroundColor: color}}
    >
    </div>
    </>
  )
}