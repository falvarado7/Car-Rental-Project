import "../stylesheets/Footer.css"
import { FaPhoneVolume, FaRegEnvelope } from "react-icons/fa6"

function Footer() {
  return (
    <footer>
        <div className='container'>
            <div className='footer-content'>
                <ul className='footer-content-1'>
                    <li>
                    <span>CAR</span> Rental
                    </li>
                    <li>
                        We offer a wide range of vehicles for all your driving needs. We have the perfect
                        car to met your needs.
                    </li>
                    <li>
                        <a href="tel:1112277368">
                            <FaPhoneVolume /> &nbsp; (111) - CAR - RENT
                        </a>
                    </li>

                    <li>
                        <a href="mailto:carrent@mail.com">
                            <FaRegEnvelope /> &nbsp; CarRent@mail.com
                        </a>
                    </li>
                </ul>

                <ul className='footer-content-2'>
                    <li>Company</li>
                    <li>
                        <a href="#home">Houston</a>
                    </li>
                    <li>
                        <a href="#home">Careers</a>
                    </li>
                    <li>
                        <a href="#home">Mobile</a>
                    </li>
                    <li>
                        <a href="#home">Blog</a>
                    </li>
                    <li>
                        <a href="#home">How we work</a>
                    </li>
                </ul>

                <ul className='footer-content-2'>
                    <li>Working Hours</li>
                    <li>Mon - Fri: 9:00AM - 7:00PM</li>
                    <li>Sat: 9:00AM - 5:00PM</li>
                    <li>Sun: CLOSED</li>
                </ul>

                <ul className='footer-content-2'>
                    <li>Subscription</li>
                    <li>
                        Subscribe for the latest news and updates
                    </li>
                    <li>
                        <input type="email" placeholder='Enter Email Address'></input>
                    </li>
                    <li>
                        <button className='submit-email'>Submit</button>
                    </li>
                </ul>
            </div>
        </div>
    </footer>
  )
}

export default Footer