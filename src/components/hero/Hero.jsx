import React from 'react'

import Flickity from 'react-flickity-component'
import './flickity.css'

const flickityOptions = {
    initialIndex: 2
}

function Hero() {
  return (
    <Flickity
      className={'carousel'} // default ''
      elementType={'div'} // default 'div'
      options={flickityOptions} // takes flickity options {}
      disableImagesLoaded={false} // default false
      reloadOnUpdate // default false
      static // default false
    >
    
      <img src="https://via.placeholder.com/1920x720.png?text=SLIDE-1"/>
      <img src="https://via.placeholder.com/1920x720.png?text=SLIDE-2"/>
      <img src="https://via.placeholder.com/1920x720.png?text=SLIDE-3"/>
    </Flickity>
  )
}

export default Hero