import "../stylesheets/ChooseUs.css"
import { FaChevronRight } from "react-icons/fa6"
import ChooseUsPic from "../images/choose/ChooseUs-main.png"
import Box1 from "../images/choose/cross-country-drive.png"
import Box2 from "../images/choose/pricing.png"
import Box3 from "../images/choose/hidden-charges.png"

function ChooseUs() {
  return (
    <section className="choose-section">
        <div className="container">
            <div className="choose-container">
                <img 
                    className="choose-container__img"
                    src={ChooseUsPic}
                    alt="Car Img"
                />
                <div className="text-container">
                    <div className="text-container__left">
                        <h4>Why Choose Us</h4>
                        <h2>Best valued deals you will ever find</h2>
                        <p>Explore unparalleled deals that stand out as the best you'll encounter.
                        Committed to delivering optimal value for your money, we ensure you enjoy 
                        top-notch services and products without exceeding your budget.
                        Tailored to enhance your renting experience, our deals are your ticket to substantial savings.
                        Seize the opportunity to enjoy quality without compromise.</p>
                        <a href="#home">Find Details &nbsp;<FaChevronRight /></a>
                    </div>

                    <div className="text-container__right">
                        <div className="text-container__right__box">
                            <img 
                                src={Box1}
                                alt="car-icon-img"
                            />
                            <div className="text-container__right__box__text">
                                <h4>Cross Country Drive</h4>
                                <p>Elevate your driving journey to new heights with our exceptional vehicles
                                designed for your cross-country adventures.</p>
                            </div>
                        </div>

                        <div className="text-container__right__box">
                            {" "}
                            <img 
                                src={Box2}
                                alt="coin-icon-img"
                            />
                            <div className="text-container__right__box__text">
                                <h4>All Inclusive Pricing</h4>
                                <p> Get everything you need in one convenient, transparent
                                price with our all-inclusive pricing policy.</p>
                            </div>
                        </div>

                        <div className="text-container__right__box">
                            {" "}
                            <img 
                                src={Box3}
                                alt="coin-icon-img"
                            />
                            <div className="text-container__right__box__text">
                                <h4>No Hidden Charges</h4>
                                <p>Enjoy peace of mind with our no hidden charges policy. We
                                believe in transparent and honest pricing.</p>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ChooseUs