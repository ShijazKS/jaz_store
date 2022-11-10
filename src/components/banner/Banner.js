import React from 'react'
import './Banner.css';

function Banner() {
  return (
    <div className='banner'>
      {/* <img className='bg' src="/images/books1.jpg" alt="" /> */}
      <div className='banner_detail'>
        <h1 className='banner_title'>Hello,Readers :)</h1>
        <h5 className='banner_data'>Everyday concerns will keep bothering you unless you do something to divert your mind. Reading gives you that mental space to occupy yourself with something more interesting.
        .___.___.___.___.___.___.___.</h5>
      </div>  
      <div className='banner_show'>
        <h1>.</h1>
      </div>
    </div>
  )
}

export default Banner