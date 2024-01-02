import Footer from "../components/Footer"
import PlanTrip from "../components/PlanTrip"
import HeroPages from "../components/HeroPages"
import "../stylesheets/About.css"
import { FaPhone } from "react-icons/fa6"
import AboutPic from "../images/about-page/about-main.jpg"
import Icon1 from "../images/about-page/about-icon1.png"
import Icon2 from "../images/about-page/about-icon2.png"
import Icon3 from "../images/about-page/about-icon3.png"


function About() {
  return (
    <>
    <section className="about-page">
        <HeroPages name="About"/>
        <div className="container">
            <div className="about-main">
                <img
                    className="about-main-img" 
                    src={AboutPic} 
                    alt="About img"  
                />
                <div className="about-main-text">
                    <h3>About Our Company</h3>
                    <h2>You start the engine and your adventure begins</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                    Totam quidem illum labore, ipsa deserunt ex error nulla voluptatum corrupti provident tempora, 
                    harum molestiae laborum libero cum qui debitis! Corrupti molestiae debitis necessitatibus 
                    molestias aspernatur voluptates velit veniam dolor iusto nam.
                    </p>
                    <div className="about-main-text-icons">
                        <div className="about-main-text-icons-box">
                            <img
                                src={Icon1}
                                alt="Icon img"
                            />
                            <span>
                                <h4>20</h4>
                                <p>Car Types</p>
                            </span>
                        </div>

                        <div className="about-main-text-icons-box">
                            <img
                                src={Icon2}
                                alt="Icon img"
                            />
                            <span>
                                <h4>54</h4>
                                <p>Rental Locations</p>
                            </span>
                        </div>

                        <div className="about-main-text-icons-box">
                            <img
                                src={Icon3}
                                alt="Icon img"
                                className="last-icon"
                            />
                            <span>
                                <h4>88</h4>
                                <p>Repair Shops</p>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <PlanTrip />
        </div>  
    </section>
    <div className="book-banner">
        <div className="book-banner-overlay"></div>
        <div className="container">
            <div className="text-content">
                <h2>Get in touch with us to book a car</h2>
                <span>
                    <FaPhone /><h3>(111) - CAR - RENT</h3>
                </span>
            </div>
        </div> 
    </div>
    <Footer />
    </>
  )
}

export default About