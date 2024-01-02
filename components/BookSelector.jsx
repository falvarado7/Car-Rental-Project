import React from 'react'
import { useEffect, useState } from 'react'
import Mustang from "../images/cars/mustang.webp"
import Audi from "../images/cars/audi.png"
import Corvette from "../images/cars/corvettec8.jpg"
import Hellcat from "../images/cars/hellcat.png"
import Lexus from "../images/cars/lexus.webp"
import "../stylesheets/BookSelector.css"
import { FaCarSide, FaCalendarDays, FaLocationDot, FaX, FaCircleInfo } from "react-icons/fa6"

function BookSelector() {
const [user, setUser] = useState(""); // CLASS - ACTIVE USER //

// BOOKING CAR //
const [carType, setCarType] = useState("");
const [pickUp, setPickUp] = useState("");
const [dropOff, setDropOff] = useState("");
const [pickUpTime, setPickUpTime] = useState("");
const [dropOffTime, setDropOffTime] = useState("");
const [carImage, setCarImage] = useState("");

// USER INFO //
const [firstName, setFirstName] = useState("");
const [lastName, setLastName] = useState("");
const [phone, setPhone] = useState("");
const [age, setAge] = useState("");
const [email, setEmail] = useState("");
const [address, setAddress] = useState("");
const [city, setCity] = useState("");
const [zipcode, setZipcode] = useState("");

// TAKING VALUE OF USER INPUTS //
const handleFirstName = (e) => {
  setFirstName(e.target.value)
};

const handleLastName = (e) => {
  setLastName(e.target.value)
};

const handlePhone = (e) => {
  setPhone(e.target.value)
};

const handleAge = (e) => {
  setAge(e.target.value)
};

const handleEmail = (e) => {
  setEmail(e.target.value)
};

const handleAddress = (e) => {
  setAddress(e.target.value)
};

const handleCity = (e) => {
  setCity(e.target.value)
};

const handleZipcode = (e) => {
  setZipcode(e.target.value)
};

// OPEN USER WHEN ALL INPUTS ARE FILLED //
const openUser = (e) => {
  e.preventDefault();
  const errorMsg = document.querySelector(".error-message");
  if (
    pickUp === "" ||
    dropOff === "" ||
    pickUpTime === "" ||
    dropOffTime === "" ||
    carType === ""
  ) {
    errorMsg.style.display = "flex";
  } else {
    setUser(!user);
    const userDiv = document.querySelector(".booking-user");
    userDiv.scroll(0, 0);
    errorMsg.style.display = "none";
  }
};

// DISABLE PAGE SCROLL WHEN USER IS DISPLAYED //
useEffect(() => {
  if (user === true) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
}, [user]);

// CONFIRM BOOKINBG USER //
const confirmBooking = (e) => {
  e.preventDefault();
  setUser(!user);
  const doneMsg = document.querySelector(".booking-done");
  doneMsg.style.display = "flex";
};

// TAKING VALUE OF BOOKING INPUTS //
const handleCar = (e) => {
  setCarType(e.target.value);
  setCarImage(e.target.value);
};

const handlePickUp = (e) => {
  setPickUp(e.target.value);
};

const handleDropOff = (e) => {
  setDropOff(e.target.value);
};

const handlePickUpTime = (e) => {
  setPickUpTime(e.target.value);
};

const handleDropOffTime = (e) => {
  setDropOffTime(e.target.value);
};

// BASED ON SELECTED CAR SHOW CAR IMAGE //
let imageUrl;
switch (carImage) {
  case "Ford Mustang GT":
    imageUrl = Mustang;
    break;
  case "Audi R8":
    imageUrl = Audi;
    break;
  case "Corvette C8":
    imageUrl = Corvette;
    break;
  case "Dodge Charger Hellcat":
    imageUrl = Hellcat;
    break;
  case "Lexus RCF":
    imageUrl = Lexus;
    break;
  default:
    imageUrl = "";
}

 // HIDE MESSAGE //
 const hideMessage = () => {
  const doneMsg = document.querySelector(".booking-done");
  doneMsg.style.display = "none";
};

  return (
  <>
    <section id="booking-section" className='book-section'>
    {/* OVERLAY */}
      <div
          onClick={openUser}
          className={`user-overlay ${user ? "active-user" : ""}`}
      >
      </div>

       <div className='container'>                 
          <div className='book-content'>
          
            <div className='book-content__box'>
              <h2>Book a Car</h2>
              <p className="error-message">
                All fields required! <FaX width={20} height={20} />
              </p>
              <p className="booking-done">
                Check your email for confirmation.{" "}
                <FaX width={20} height={20} onClick={hideMessage} />
              </p>

              <form className='book-car__form'>
                <div className='book-car__form-car-type'>
                  <label><FaCarSide className='input-icon'/> Select car type <b>*</b></label>
                  <select value={carType} onChange={handleCar}>
                    <option>Select Car Type</option>
                    <option value="Ford Mustang GT">Ford Mustang GT</option>
                    <option value="Audi R8">Audi R8</option>
                    <option value="Chevrolet Corvette C8">Chevrolet Corvette C8</option>
                    <option value="Dodge Charger Hellcat">Dodge Charger Hellcat</option>
                    <option value="Lexus RCF">Lexus RCF</option>
                  </select>
                </div>

                <div className='book-car__form-car-type'>
                  <label><FaLocationDot className='input-icon'/> Pick-up <b>*</b></label>
                  <select value={pickUp} onChange={handlePickUp}>
                    <option>Select pick up location</option>
                    <option value="Houston">Houston, TX</option>
                    <option value="New York City">New York City, NY</option>
                    <option value="Los Angeles">Los Angeles, CA</option>
                    <option value="Chicago">Chicago, IL</option>
                    <option value="Miami">Miami, FL</option>
                  </select>
                </div>

                <div className='book-car__form-car-type'>
                  <label><FaLocationDot className='input-icon'/> Drop Off <b>*</b></label>
                  <select value={dropOff} onChange={handleDropOff}>
                    <option>Select drop off location</option>
                    <option value="Houston">Houston, TX</option>
                    <option value="New York City">New York City, NY</option>
                    <option value="Los Angeles">Los Angeles, CA</option>
                    <option value="Chicago">Chicago, IL</option>
                    <option value="Miami">Miami, FL</option>
                  </select>
                </div>

                <div className='book-car__form-car-time'>
                  <label><FaCalendarDays className='input-icon'/> Pick Up Date <b>*</b></label>
                  <input
                    id="picktime"
                    value={pickUpTime}
                    onChange={handlePickUpTime}
                    type="date">
                  </input>
                </div>

                <div className='book-car__form-car-time'>
                  <label><FaCalendarDays className='input-icon'/> Drop Off date <b>*</b></label>
                  <input
                    id="droptime"
                    value={dropOffTime}
                    onChange={handleDropOffTime}
                    type="date">
                  </input>
                </div>

                <button onClick={openUser} type="submit" className='search-btn'>Search</button>
              </form>
              </div>
          </div>     
       </div>
    </section>

    {/* USER */}
    <div className={`booking-user ${user ? "active-user" : ""}`}>
    {/* TITLE */}
    <div className="booking-user__title">
      <h2>Complete Reservation</h2>
      <FaX onClick={openUser} />
    </div>
    {/* MESSAGE */}
    <div className="booking-user__message">
      <h4>
        <FaCircleInfo /> Upon completing this reservation enquiry,
        you will receive:
      </h4>
      <p>
        Your rental voucher which wil be presented at rental desk upon arrival and a
        toll-free customer support number.
      </p>
    </div>
    {/* CAR INFO */}
    <div className="booking-user__car-info">
      <div className="dates-div">
        <div className="booking-user__car-info__dates">
          <h5>Location & Date</h5>
          <span>
            <FaLocationDot className='dates-icon'/>
            <div>
              <h6>Pick-Up Date & Time</h6>
              <p>
                {pickUpTime} /{" "}
                <input type="time" className="input-time"></input>
              </p>
            </div>
          </span>
        </div>

        <div className="booking-user__car-info__dates">
          <span>
            <FaLocationDot className='dates-icon'/>
            <div>
              <h6>Drop-Off Date & Time</h6>
              <p>
                {dropOffTime} /{" "}
                <input type="time" className="input-time"></input>
              </p>
            </div>
          </span>
        </div>

        <div className="booking-user__car-info__dates">
          <span>
            <FaLocationDot className='dates-icon'/>
            <div>
              <h6>Pick-Up Location</h6>
              <p>{pickUp}</p>
            </div>
          </span>
        </div>

        <div className="booking-user__car-info__dates">
          <span>
            <FaLocationDot className='dates-icon'/>
            <div>
              <h6>Drop-Off Location</h6>
              <p>{dropOff}</p>
            </div>
          </span>
        </div>
      </div>
      <div className="booking-user__car-info__model">
        <h5>
          <span>Car -</span> {carType}
        </h5>
        {imageUrl && <img src={imageUrl} alt="car_img" />}
      </div>
    </div>
    {/* PERSONAL INFO */}
    <div className="booking-user__person-info">
      <h4>Personal Information</h4>
      <form className="info-form">
        <div className="info-form__2col">
          <span>
            <label>
              First Name <b>*</b>
            </label>
            <input
              value={firstName}
              onChange={handleFirstName}
              type="text"
              placeholder="Enter your first name"
            ></input>
            <p className="error-user">This field is required.</p>
          </span>

          <span>
            <label>
              Last Name <b>*</b>
            </label>
            <input
              value={lastName}
              onChange={handleLastName}
              type="text"
              placeholder="Enter your last name"
            ></input>
            <p className="error-user ">This field is required.</p>
          </span>

          <span>
            <label>
              Phone Number <b>*</b>
            </label>
            <input
              value={phone}
              onChange={handlePhone}
              type="tel"
              placeholder="Enter your phone number"
            ></input>
            <p className="error-user">This field is required.</p>
          </span>

          <span>
            <label>
              Age <b>*</b>
            </label>
            <input
              value={age}
              onChange={handleAge}
              type="number"
              placeholder="18"
            ></input>
            <p className="error-user ">This field is required.</p>
          </span>
        </div>

        <div className="info-form__1col">
          <span>
            <label>
              Email <b>*</b>
            </label>
            <input
              value={email}
              onChange={handleEmail}
              type="email"
              placeholder="Enter your email address"
            ></input>
            <p className="error-user">This field is required.</p>
          </span>

          <span>
            <label>
              Address <b>*</b>
            </label>
            <input
              value={address}
              onChange={handleAddress}
              type="text"
              placeholder="Enter your street address"
            ></input>
            <p className="error-user ">This field is required.</p>
          </span>
        </div>

        <div className="info-form__2col">
          <span>
            <label>
              City <b>*</b>
            </label>
            <input
              value={city}
              onChange={handleCity}
              type="text"
              placeholder="Enter your city"
            ></input>
            <p className="error-user">This field is required.</p>
          </span>

          <span>
            <label>
              Zip Code <b>*</b>
            </label>
            <input
              value={zipcode}
              onChange={handleZipcode}
              type="text"
              placeholder="Enter your zip code"
            ></input>
            <p className="error-user">This field is required.</p>
          </span>
        </div>

        <span className="info-form__checkbox">
          <input type="checkbox"></input>
          <p>Please send me latest news and updates</p>
        </span>

        <div className="reserve-button">
          <button onClick={confirmBooking}>Reserve Now</button>
        </div>
      </form>
    </div>
  </div>

</>
  ) }


export default BookSelector;