import React from "react";
import { Link } from "react-router-dom";

import cover from "../images/Small_Size/Switzerland_001.jpeg";
import cover1 from "../images/Small_Size/Switzerland_002.jpeg";

const Home = () => {
    return (
        <div className="home">
            <p>Select an album below</p>

            <div className="albums">
                <Link to="/about">
                    <p className="album-title">Switzerland</p>

                    <div className="album-cover">
                        <img className="album-cover__image" src={cover} alt="pic"/>
                    </div>
                </Link>

                <Link to="/about">
                    <p className="album-title">Amsterdam</p>

                    <div className="album-cover">
                        <img className="album-cover__image" src={cover1} alt="pic"/>
                    </div>
                </Link>
                </div>
            </div>

    )
}

export default Home