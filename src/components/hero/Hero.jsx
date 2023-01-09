import React from 'react'

import Flickity from 'react-flickity-component'
import './flickity.css'

const flickityOptions = {
    initialIndex: 0
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
    
      <img className="flickity-hero-img" src="https://foxsports.static.areyouwatchingthis.com/images/assets/2092676.jpg" width='1920' height='720' />
      <img className="flickity-hero-img" src="https://static.clubs.nfl.com/image/private/t_editorial_landscape_8_desktop_mobile/f_png/bills/wvp7lnulowjut3kqdv4l.png" width='1920' height='720' />
      <img className="flickity-hero-img" src="https://i.ytimg.com/vi/6PcPB1ll2Xo/maxresdefault.jpg"  width='1920' height='720' />
    </Flickity>
  )
}

export default Hero