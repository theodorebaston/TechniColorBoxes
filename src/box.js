'use client';

import { useState } from 'react';

export default function Box(){

  const [hovered, setHovered] = useState(false);
  const [color, setColor] = useState('#666b75');

  const handleMouseEnter = () => {
    setHovered(true);
  }
  
  const handleMouseLeave = () => {
    setHovered(false);
  }

  // This is causing an infinite loop. I think if I create and array of colors to pick from and set the color === a random position in that array, I could bypass the Ternary operator and avoid the infinite loop. 
  const boxColor = hovered ? '#78568e' : '#666b75';

  const handleColorChange = () => {
      setColor(color === '#666b75' ? '#78568e' : '#666b75');
  } 
  
  return (
    <>
    <div 
      onMouseEnter={handleMouseEnter} 
      onMouseLeave={handleMouseLeave}

      className="colorBox" 
      style={{backgroundColor: boxColor}}
    >
    </div>
    </>
  )
}