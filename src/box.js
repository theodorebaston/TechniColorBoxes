'use client';

import { useState } from 'react';

export default function Box(){

  const [color, setColor] = useState('666b75');

  const handleColorChange = () => {
      setColor(color === '666b75' ? '#78568e' : '666b75');
  } 
  
  return (
    <>
    <div onMouseEnter={handleColorChange} className="colorBox" style={{backgroundColor: color}}></div>
    </>
  )
}