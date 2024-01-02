import { FaChevronDown } from "react-icons/fa6";
import { useState } from "react";
import "../stylesheets/Faq.css"

function Faq() {
  const [activeQ, setActiveQ] = useState("q1");

  const openQ = (id) => {
    setActiveQ(activeQ === id ? "" : id);
  };

  const getClassAnswer = (id) => {
    return activeQ === id ? "active-answer" : "";
  };

  const getClassQuestion = (id) => {
    return activeQ === id ? "active-question" : "";
  };

  return (
    <section className="faq-section">
        <div className="container">
            <div className="faq-content">
                <div className="faq-content__title">
                    <h5>FAQ</h5>
                    <h2>Frequently Asked Questions</h2>
                    <p> Frequently Asked Questions About the Car Rental Booking Process
                    on Our Website: Answers to Common Concerns and Inquiries.</p>
                </div>

                <div className="all-questions">
                    <div className="faq-box">
                        <div 
                            id="q1"
                            onClick={() => openQ("q1")}
                            className={`faq-box-question ${getClassQuestion("q1")}`}
                        >
                            <p>1. What is special about comparing rental car deals?</p>
                            <FaChevronDown className="faq-icon"/>
                        </div>
                        <div
                            id="q1"
                            onClick={() => openQ("q1")}
                            className={`faq-box-answer ${getClassAnswer("q1")}`}
                        >
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                            Obcaecati nisi debitis id ipsam dolorem ad blanditiis dignissimos accusantium! 
                            Fugiat repellendus in iste possimus amet omnis animi eveniet et? Molestiae, aliquam.
                        </div>
                    </div>

                    <div className="faq-box">
                        <div 
                            id="q2"
                            onClick={() => openQ("q2")}
                            className={`faq-box-question ${getClassQuestion("q2")}`}
                        >
                            <p>2. How do I find the rental deals?</p>
                            <FaChevronDown className="faq-icon"/>
                        </div>
                        <div
                            id="q2"
                            onClick={() => openQ("q2")}
                            className={`faq-box-answer ${getClassAnswer("q2")}`}
                        >
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                            Obcaecati nisi debitis id ipsam dolorem ad blanditiis dignissimos accusantium! 
                            Fugiat repellendus in iste possimus amet omnis animi eveniet et? Molestiae, aliquam.
                        </div>
                    </div>

                    <div className="faq-box">
                        <div 
                            id="q3"
                            onClick={() => openQ("q3")}
                            className={`faq-box-question ${getClassQuestion("q3")}`}
                        >
                            <p>3. How do I find low rental prices?</p>
                            <FaChevronDown className="faq-icon"/>
                        </div>
                        <div
                            id="q3"
                            onClick={() => openQ("q3")}
                            className={`faq-box-answer ${getClassAnswer("q3")}`}
                        >
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                            Obcaecati nisi debitis id ipsam dolorem ad blanditiis dignissimos accusantium! 
                            Fugiat repellendus in iste possimus amet omnis animi eveniet et? Molestiae, aliquam.
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>
  )
}

export default Faq