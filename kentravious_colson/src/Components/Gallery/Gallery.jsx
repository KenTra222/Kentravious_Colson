import React from 'react'
import AwesomeSlider from 'react-awesome-slider';
import AwesomeSliderStyles from 'react-awesome-slider/src/styles';
import './gallery.scss'

const GALLERYSTYLES = {
  width: '70%',
  margin: '0 auto'
}


const Gallery = () => {
  return (<>
  <h2>here's some cool artwork I've created</h2>
  <article style={GALLERYSTYLES} className='gallery_wrapper'>
    <AwesomeSlider cssModule={AwesomeSliderStyles} className='aws-btn'>
            <div data-src="artwork/portal.png" />
            <div data-src="artwork/firstCharacter.png" />
            <div data-src="artwork/gas station.png" />
            <div data-src="artwork/oreo and milk.jpg" />
            <div data-src="artwork/PlasmaBall.jpg" />
          </AwesomeSlider>
  </article>
  </>
  )
}

export default Gallery