import React from 'react'
import "../stylesheets/Banner.css"

function Banner() {
  return (
    <section className='banner-section'>
        <div className='container'>
            <div className='banner-content'>
                <div className='banner-content__text'>
                    <h2>Enjoy significant savings with our affordable car rental options!</h2>
                    <p>Premier Airports. Regional Providers. <span>24/7</span> Support.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Banner