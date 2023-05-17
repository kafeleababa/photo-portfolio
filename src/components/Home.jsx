import React from "react";
import { Link } from "react-router-dom";

import switzerlandCover from "../images/Switzerland_010.jpeg";
import amsterdamCover from "../images/Amsterdam_001.jpg";
import parisCover from "../images/Paris_001.jpg";

const Home = () => {
    return (
        <div className="home">
            <h2>Select an album below</h2>

            <div className="albums">
                <div className="album">
                    <h3 className="album-title">Switzerland</h3>

                    <Link to="/switzerland">
                        <div className="album-cover">
                            <img className="album-cover__image" src={switzerlandCover} alt="pic" />
                        </div>
                    </Link>
                </div>

                <div className="album">
                    <h3 className="album-title">Amsterdam</h3>

                    <Link to="/amsterdam">
                        <div className="album-cover">
                            <img className="album-cover__image" src={amsterdamCover} alt="pic" />
                        </div>
                    </Link>
                </div>

                <div className="album">
                    <h3 className="album-title">Paris <br /> <p>(coming soon)</p></h3>

                    <Link to="/paris">
                        <div className="album-cover">
                            <img className="album-cover__image" src={parisCover} alt="pic" />
                        </div>
                    </Link>
                </div>
            </div>
        </div>

    )
}

export default Home