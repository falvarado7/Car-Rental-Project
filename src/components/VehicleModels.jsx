import React, { useState } from 'react'
import CarBox from './CarBox';
import { CAR_DATA } from "./CarData"
import "../stylesheets/VehicleModels.css"

function VehicleModels() {
  const [active, setActive] = useState("FirstCar");
  const [colorBtn, setColorBtn] = useState("btn1");

  const btnID = (id) => {
    setColorBtn(colorBtn === id ? "" : id);
  };

  const coloringButton = (id) => {
    return colorBtn === id ? "colored-button" : "";
  };

  return (
    <section className='vehicle-models'>
        <div className='pick-models-container'>
            <div className='pick-container-title'>
                <h3>Vehicle Models</h3>
                <h2>Our Rental Fleet</h2>
                <p>Select from a range of exceptional vehicles available for rental, 
                perfect for your upcoming adventure or business journey</p>
            </div>

            <div className='pick-container__car-content'>
                {/* PICK CAR */}
                <div className='pick-box'>
                    <button 
                        className={`${coloringButton('btn1')}`}
                        onClick={() => {
                            setActive("FirstCar");
                            btnID("btn1");
                        }}
                    >
                        Ford Mustang GT500
                    </button>
                    <button 
                        className={`${coloringButton('btn2')}`}
                        onClick={() => {
                            setActive("SecondCar");
                            btnID("btn2");
                        }}
                    >
                        Audi R8
                    </button>
                    <button 
                        className={`${coloringButton('btn3')}`}
                        onClick={() => {
                            setActive("ThirdCar");
                            btnID("btn3");
                        }}   
                    >
                        Chevrolet Corvette C8
                    </button>
                    <button 
                        className={`${coloringButton('btn4')}`}
                        onClick={() => {
                            setActive("FourthCar");
                            btnID("btn4")
                        }}   
                    >
                        Dodge Charger Hellcat
                    </button>
                    <button 
                        className={`${coloringButton('btn5')}`}
                        onClick={() => {
                            setActive("FifthCar");
                            btnID("btn5")
                        }}
                    >
                        Lexus RCF
                    </button>
                </div>

                {active === "FirstCar" && <CarBox data={CAR_DATA} carID={0} />}
                {active === "SecondCar" && <CarBox data={CAR_DATA} carID={1} />}
                {active === "ThirdCar" && <CarBox data={CAR_DATA} carID={2} />}
                {active === "FourthCar" && <CarBox data={CAR_DATA} carID={3} />}
                {active === "FifthCar" && <CarBox data={CAR_DATA} carID={4} />}
            </div>
        </div>
    </section>
  )
}

export default VehicleModels