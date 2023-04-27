import React from 'react'
import { Footer } from '../../footer'
import { NavBar } from '../../navBar'

export const PrincipalContainer = ({children}) => {
  return (
    <div>
        <img style={{position:'absolute', zIndex:2000000, left:'15%', width:'10%'}} src='https://developer.tecmm.mx/web-tsj-designs/colorsSquares.png'/>

        <NavBar/>
        {children}
        <Footer/>
    </div>

    
  )
}
