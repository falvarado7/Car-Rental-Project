import Footer from "../components/Footer"
import HeroPages from '../components/HeroPages'
import Testimonials from "../components/Testimonials"
import { FaPhone } from "react-icons/fa6"

function TestimonialsPage() {
  return (
    <section className="testimonials-page">
        <HeroPages name="Testimonials" />
        <Testimonials />
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

export default TestimonialsPage