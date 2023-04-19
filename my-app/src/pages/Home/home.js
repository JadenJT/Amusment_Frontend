import React from "react";
import "./home.css"
import { RidesMap } from "../../components/RidesMap/RidesMap";
import Logo from '../../icons/Umazing.svg';
import GuestsInRide from '../../images/GuestsInRide.jpg'
export default function Home() {

    return (
        <>
            <div className="welcome">
                <img src={Logo} alt="park logo" className="wLogo"></img>
            </div>

            <div className="container">
                <div className="borderLine">
                    <div className="Statement">
                        <div className="FirstMessage">
                            <p className="wlc">Welcome to Umazing.</p>
                            <p>
                                A place for fun and excitement.<br></br>
                                Come and join us today for a delightful time.<br></br>
                                We hope to be a part in creating shining smiles<br></br>
                                and bright wonderful memories.<br></br>
                                One colorful guest at a time.
                            </p>
                        </div>
                        <div class="RidePicture">
                            <p><img src={GuestsInRide} alt="People in a ride" className="form-right-picture"></img></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

