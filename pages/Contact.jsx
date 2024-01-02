import { FaPhone, FaEnvelope, FaLocationArrow, FaEnvelopeOpen } from "react-icons/fa6"
import HeroPages from '../components/HeroPages'
import Footer from "../components/Footer"
import "../stylesheets/Contact.css"

function Contact() {
  return (
    <section className="contact-page">
        <HeroPages name="Contact" />
        <div className="container">
            <div className="contact-div">
                <div className="contact-div-text">
                    <h2>Need Additional Information?</h2>
                    <p>A versatile professional proficient in various realms of research, 
                    development, and learning expertise, with a wealth of experience spanning over 15 years.</p>
                    <a href="/"><FaPhone /> &nbsp; (111) - CAR - RENT</a>
                    <a href="/"><FaEnvelope /> &nbsp; CarRent@mail.com</a>
                    <a href="/"><FaLocationArrow /> &nbsp; Houston, Texas</a>
                </div>
                <div className="contact-div-form">
                    <form>
                        <label>
                            Full Name <b>*</b>
                        </label>
                        <input type="text" placeholder='Ex. "John Smith"'></input>

                        <label>
                            Email <b>*</b>
                        </label>
                        <input type="email" placeholder="youremail@example.com"></input>

                        <label>
                            Tell us about it <b>*</b>
                        </label>
                        <textarea placeholder="Write Here..."></textarea>

                        <button type="submit">
                            <FaEnvelopeOpen />
                            &nbsp; Send Message
                        </button>
                    </form>
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

export default Contact