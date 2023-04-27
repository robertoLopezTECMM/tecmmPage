import React from 'react'
import './index.css'


export const ColorSeparator = ({color, titleSeparator}) => {
  return (
    <div className='colorSeparatorContainer' style={{backgroundColor:color}}>
      <p>{titleSeparator}</p>
    </div>
  )
}
