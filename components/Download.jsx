import Img1 from "../images/download/appstore.svg"
import Img2 from "../images/download/googleapp.svg"
import "../stylesheets/Download.css"

function Download() {
  return (
    <section className="download-section">
        <div className="container">
            <div className="download-text">
                <h2>Download our app to get the latest features</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                Voluptate laboriosam odio harum neque praesentium natus ex culpa. 
                Numquam, ratione aliquam.</p>
                <div className="download-text__btns">
                    <img src={Img1} alt="Download Img"/>
                    <img src={Img2} alt="Download Img"/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Download