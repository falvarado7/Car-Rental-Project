import { FaPhone } from "react-icons/fa6"
import HeroPages from '../components/HeroPages'
import Footer from "../components/Footer"
import "../stylesheets/Team.css"
import Person1 from "../images/team-page/person1.png"
import Person2 from "../images/team-page/person2.png"
import Person3 from "../images/team-page/person3.png"
import Person4 from "../images/team-page/person4.png"
import Person5 from "../images/team-page/person5.png"

function Team() {
  const teamPpl = [
    { img: Person1, name: "Jack Adams", job: "Owner"},
    { img: Person2, name: "Tyler Owens", job: "Salesman"},
    { img: Person3, name: "Hannah Miller", job: "Receptionist"},
    { img: Person4, name: "Chase Marx", job: "Mechanic"},
    { img: Person5, name: "Jessica Hardman", job: "Manager"},
  ]

  return (
    <section className="team-page">
        <HeroPages name="Our Team" />
        <div className="container">
            <div className="team-container">
            {teamPpl.map((ppl, id) => (
                <div key={id} className="team-container-box">
                    <div className="div-container-box-img-div">
                        <img src={ppl.img} alt="team img" />
                    </div>
                    <div className="team-container-box-descr">
                        <h3>{ppl.name}</h3>
                        <p>{ppl.job}</p>
                    </div>
                </div>
            ))}
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

export default Team