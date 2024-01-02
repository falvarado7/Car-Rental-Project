import React from 'react'
import "../stylesheets/PlanTrip.css"
import SelectCar from "../images/plan/SelectCar.png"
import Contact from "../images/plan/Contact.png"
import LetsDrive from "../images/plan/LetsDrive.png"

function PlanTrip() {
  return (
    <section className='plan-section'>
        <div className='plan-container'>
            <div className='plan-container-title'>
                <p>Plan your trip now</p>
                <h2>Quick & Easy Car Rental</h2>
            </div>
            <div className='plan-container-box-section'>
            <div className='plan-container-boxes'>
                <img src={SelectCar} alt="Icon img" /> 
                <h3>Select Car</h3>
                <p>Explore our extensive range of vehicles tailored 
                to cater to your diverse driving requirements, ensuring
                we have the ideal car to match your specific needs </p>       
            </div>

            <div className='plan-container-boxes'>
                <img src={Contact} alt="Icon img" /> 
                <h3>Contact Operator</h3>
                <p>Our team of friendly and knowledgeable operators
                are prepared to assist you with any questions or
                concerns you may have</p>       
            </div>

            <div className='plan-container-boxes'>
                <img src={LetsDrive} alt="Icon img" /> 
                <h3>Let's Drive</h3>
                <p>Whether embarking on a road trip or any journey,
                rest assured our extensive selection of cars has you covered</p>       
            </div>
            </div>
        </div>
    </section>
  )
}

export default PlanTrip