import "./Expertise.scss";

import img1 from "../../assets/icon/1.png";
import img2 from "../../assets/icon/2.png";
import img3 from "../../assets/icon/3.png";
import img4 from "../../assets/icon/4.png";
import img5 from "../../assets/icon/5.png";
import img6 from "../../assets/icon/6.png";


function Expertise(){
    return(
        <section>
        <div className="container row w1400">
            <div className="info">
                <h1>Expertise in student mobility</h1>
                <p>We provide all the services that individual students, parents or group of international students at school need when they plan to study abroad</p>
                <a href="#" className="btn btn-hover">See all Services</a>
            </div>
            <div className="row column boxs flex-wrap none">
                <ul className="row box flex-wrap" >
                    <li>
                        <img src={img1} />
                        <h5>University Placement</h5>
                    </li>
                    <li>
                        <img src={img2} /> 
                        <h5>Visa Support</h5>
                    </li>
                    <li>
                        <img src={img3} />
                        <h5>University Open Days</h5>
                    </li>
                </ul>
                <ul className="row box flex-wrap">
                    <li>
                        <img src={img4} />
                        <h5>Study Abroad Expo</h5>
                    </li>
                    <li>
                        <img src={img5} />
                        <h5>Accommodation Support</h5>
                    </li>
                    <li>
                        <img src={img6}  />
                        <h5>Accommodation Support</h5>
                    </li>
                </ul>
            </div>
        </div>
    </section>
    )
}

export default Expertise;