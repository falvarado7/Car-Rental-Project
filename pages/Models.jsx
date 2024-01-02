import Footer from "../components/Footer"
import HeroPages from '../components/HeroPages'
import CarImage1 from "../images/cars/mustang-showroom.jpg"
import CarImage2 from "../images/cars/audi-showroom.jpg"
import CarImage3 from "../images/cars/corvette-showroom.jpg"
import CarImage4 from "../images/cars/hellcat-showroom.jpg"
import CarImage5 from "../images/cars/lexus-showroom.jpg"
import { Link } from "react-router-dom"
import { FaStar, FaStarHalfStroke, FaPhone } from "react-icons/fa6"
import "../stylesheets/Models.css"


function Models() {
  return (
    <section className='models-section'>
        <HeroPages name="Vehicle Models" />
        <div className='container'>
            <div className='models-div'>
                <div className='models-div-box'>
                    <div className='models-div-box-img'>
                        <img
                           src={CarImage1}
                           alt="car img" 
                        />
                        <div className="models-div-box-descr">
                            <div className="models-div-box-descr-name-price">
                                <div className="models-div-box-descr-name-price-name">
                                    <p>Mustang GT500</p>
                                    <span>
                                        <FaStar width={15} height={15} />
                                        <FaStar width={15} height={15} />
                                        <FaStar width={15} height={15} />
                                        <FaStar width={15} height={15} />
                                        <FaStar width={15} height={15} />
                                    </span>
                                </div>
                                <div className="models-div-box-descr-name-price-price">
                                    <h4>$40</h4>
                                    <p>per day</p>
                                </div>
                            </div>
                            <div className="models-div-box-descr-name-price-btn">
                                <Link onClick={() => window.scrollTo(0, 0)} to="/">Book Ride</Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='models-div-box'>
                    <div className='models-div-box-img'>
                        <img
                           src={CarImage2}
                           alt="car img" 
                        />
                        <div className="models-div-box-descr">
                            <div className="models-div-box-descr-name-price">
                                <div className="models-div-box-descr-name-price-name">
                                    <p>Audi R8</p>
                                    <span>
                                        <FaStar width={15} height={15} />
                                        <FaStar width={15} height={15} />
                                        <FaStar width={15} height={15} />
                                        <FaStar width={15} height={15} />
                                        <FaStarHalfStroke width={15} height={15} />
                                    </span>
                                </div>
                                <div className="models-div-box-descr-name-price-price">
                                    <h4>$50</h4>
                                    <p>per day</p>
                                </div>
                            </div>
                            <div className="models-div-box-descr-name-price-btn">
                                <Link onClick={() => window.scrollTo(0, 0)} to="/">Book Ride</Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='models-div-box'>
                    <div className='models-div-box-img'>
                        <img
                           src={CarImage3}
                           alt="car img" 
                        />
                        <div className="models-div-box-descr">
                            <div className="models-div-box-descr-name-price">
                                <div className="models-div-box-descr-name-price-name">
                                    <p>Corvette C8</p>
                                    <span>
                                        <FaStar width={15} height={15} />
                                        <FaStar width={15} height={15} />
                                        <FaStar width={15} height={15} />
                                        <FaStar width={15} height={15} />
                                        <FaStar width={15} height={15} />
                                    </span>
                                </div>
                                <div className="models-div-box-descr-name-price-price">
                                    <h4>$45</h4>
                                    <p>per day</p>
                                </div>
                            </div>
                            <div className="models-div-box-descr-name-price-btn">
                                <Link onClick={() => window.scrollTo(0, 0)} to="/">Book Ride</Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='models-div-box'>
                    <div className='models-div-box-img'>
                        <img
                           src={CarImage4}
                           alt="car img" 
                        />
                        <div className="models-div-box-descr">
                            <div className="models-div-box-descr-name-price">
                                <div className="models-div-box-descr-name-price-name">
                                    <p>Charger Hellcat</p>
                                    <span>
                                        <FaStar width={15} height={15} />
                                        <FaStar width={15} height={15} />
                                        <FaStar width={15} height={15} />
                                        <FaStar width={15} height={15} />
                                        <FaStarHalfStroke width={15} height={15} />
                                    </span>
                                </div>
                                <div className="models-div-box-descr-name-price-price">
                                    <h4>$40</h4>
                                    <p>per day</p>
                                </div>
                            </div>
                            <div className="models-div-box-descr-name-price-btn">
                                <Link onClick={() => window.scrollTo(0, 0)} to="/">Book Ride</Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='models-div-box'>
                    <div className='models-div-box-img'>
                        <img
                           src={CarImage5}
                           alt="car img" 
                        />
                        <div className="models-div-box-descr">
                            <div className="models-div-box-descr-name-price">
                                <div className="models-div-box-descr-name-price-name">
                                    <p>Lexus RCF</p>
                                    <span>
                                        <FaStar width={15} height={15} />
                                        <FaStar width={15} height={15} />
                                        <FaStar width={15} height={15} />
                                        <FaStar width={15} height={15} />
                                        <FaStarHalfStroke width={15} height={15} />
                                    </span>
                                </div>
                                <div className="models-div-box-descr-name-price-price">
                                    <h4>$35</h4>
                                    <p>per day</p>
                                </div>
                            </div>
                            <div className="models-div-box-descr-name-price-btn">
                                <Link onClick={() => window.scrollTo(0, 0)} to="/">Book Ride</Link>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        <div className="book-banner">
            <div className="book-banner-overlay"></div>
            <div className="container">
                <div className="text-content">
                    <h2>Get in touch with us to book a car</h2>
                    <span>
                        <FaPhone width={40} height={40} />
                        <h3>(111) - CAR - RENT</h3>
                    </span>
                </div>
            </div>
        </div>
        <Footer />
    </section>
  )
}

export default Models