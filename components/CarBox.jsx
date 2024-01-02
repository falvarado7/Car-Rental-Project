import React from 'react'
import { useState } from "react"
import "../stylesheets/VehicleModels.css"

function CarBox({ data, carID }) {
    const [carLoad, setCarLoad] = useState(true)
        
  return (
    <div>
        {data[carID].map((car, id) => (
            <div key={id} className='box-cars'>
                {/* CAR */}
                <div className='pick-car'>
                    {carLoad && <span className='loader'></span>}
                    <img
                        style={{ display: carLoad ? "none" : "block" }}
                        src={car.img}
                        alt='car_img'
                        onLoad={() => setCarLoad(false)}
                    />
                </div>
                {/* DESCRIPTION */}
                <div className='pick-description'>
                    <div className='pick-description__price'>
                        <span>$ {car.price}</span>/ per day
                    </div>
                    <div className='pick-description__table'>
                        <div className='pick-description__table__col'>
                            <span>Model</span>
                            <span> {car.model}</span>
                        </div>

                        <div className='pick-description__table__col'>
                            <span>Make</span>
                            <span> {car.make}</span>
                        </div>

                        <div className='pick-description__table__col'>
                            <span>Year</span>
                            <span> {car.year}</span>
                        </div>

                        <div className='pick-description__table__col'>
                            <span>Horsepower</span>
                            <span> {car.horsepower}</span>
                        </div>

                        <div className='pick-description__table__col'>
                            <span>AC</span>
                            <span> {car.air}</span>
                        </div>

                        <div className='pick-description__table__col'>
                            <span>Transmission</span>
                            <span> {car.transmission}</span>
                        </div>

                        <div className='pick-description__table__col'>
                            <span>Fuel</span>
                            <span> {car.fuel}</span>
                        </div>
                    </div>
                    {/* BTN CTA */}
                    <a className='cta-btn' href='#booking-section'>
                        Reserve Now
                    </a>
                </div>
            </div>
        ))}
    </div>
  )
}

export default CarBox