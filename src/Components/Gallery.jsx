import React from 'react'
import '../styles/gallery.css'
import Navbar from './Navbar'
import Footer from './Footer'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import img1 from '../assets/about-1.jpg'
import img2 from '../assets/about-2.jpg'
import img3 from '../assets/about.jpg'

const Gallery = () => {
  return (
    <>
      <Navbar color={"#fff"}/>
      <div className='gallery'>
      <Carousel>
                <div>
                    <img src={img1}/>
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={img2}/>
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={img3} />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
      </div>
    </>
  )
}

export default Gallery
