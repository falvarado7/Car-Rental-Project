import { Link } from "react-router-dom"
import "../stylesheets/Hero.css"
import { FaAngleRight, FaCircleCheck } from "react-icons/fa6"
import HeroCar from "../images/hero/home-page-car.png"

function Hero() {
  
  const bookBtn = () => {
    document
    .querySelector("#booking-section")
    .scrollIntoView({ behavior: "smooth"})
  } 


  return (
    <>
      <section id='home' className="hero-section">
          <div className='container'>
            <div className="hero-content">
              <div className="hero-content__text">
                <h3>Plan your trip now</h3>
                <h1>Save <span>big</span> with our car rental</h1>
                <p>Rent the car of your dreams. Unbeatable prices, unlimited miles,<br></br> flexible pick-up options and much more</p>
                <div className='hero-content__text__btns'>
                  <Link
                    onClick={bookBtn}
                    className="hero-content__text__btns__bookride"
                    to="/"
                  >
                    Book Ride &nbsp; <FaCircleCheck />
                  </Link>
                  
                  <Link
                    onClick={bookBtn}
                    className="hero-content__text__btns__learnmore"
                    to="/"
                  >
                    Learn More &nbsp; <FaAngleRight />
                  </Link>
                </div>
              </div>

              <img 
                src={HeroCar}
                alt="Hero Car"
                className="hero-content__car-img"
              />
            </div>
          </div>
      </section>
    </>
  )
}

export default Hero