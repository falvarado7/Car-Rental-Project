import PFP1 from "../images/testimonials/pfp1.jpg"
import PFP2 from "..//images/testimonials/pfp2.jpg"
import "../stylesheets/Testimonials.css"

function Testimonials() {
  return (
    <section className='testimonials-section'>
        <div className='container'>
            <div className='testimonials-content'>
                <div className='testimonials-content-title'>
                    <h4>Reviewed by People</h4>
                    <h2>Client's Testimonials</h2>
                    <p>Explore the positive influence we've had on our clients by delving into their testimonials.
                    Having firsthand experience with our service and results, our clients are enthusiastic 
                    about sharing their positive encounters with you.</p>
                </div>

                <div className='all-testimonials'>
                    <div className='all-testimonials-box'>
                        <p>"Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                        Voluptatibus modi cumque esse maxime ducimus, ullam molestiae reiciendis eveniet. 
                        Impedit exercitationem nihil cupiditate, temporibus ipsam vitae consequuntur 
                        dolorem molestiae nulla dolor?"</p>
                        <div className='all-testimonials-box-name'>
                            <div className='all-testimonials-box-name-profile'>
                                <img src={PFP1} alt="user img"/>
                                <span>
                                    <h4>General States</h4>
                                    <p>Houston, TX</p>
                                </span>
                            </div>
                        </div>
                    </div>
                                     
                    <div className='all-testimonials-box'>
                        <p>"Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                        Voluptatibus modi cumque esse maxime ducimus, ullam molestiae reiciendis eveniet. 
                        Impedit exercitationem nihil cupiditate, temporibus ipsam vitae consequuntur 
                        dolorem molestiae nulla dolor?"</p>
                        <div className='all-testimonials-box-name'>
                            <div className='all-testimonials-box-name-profile'>
                                <img src={PFP2} alt="user img"/>
                                <span>
                                    <h4>Steel Guy</h4>
                                    <p>New York City, NY</p>
                                </span>
                            </div>
                        </div>   
                    </div>

                </div>
            </div>
        </div>
    </section>
  )
}

export default Testimonials