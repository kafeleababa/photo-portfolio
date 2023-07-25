import React from "react";
import { Link } from "react-router-dom";

import switzerlandCover from "../images/Switzerland_010.jpeg";
import amsterdamCover from "../images/Amsterdam_001.jpg";
import parisCover from "../images/Paris_001.jpg";
import murciaCover from "../images/Murcia_001.jpg";

const Home = () => {
    return (
        <div className="home">
            <div className="albums">
                <div className="album">
                    <Link to='/switzerland'>
                        <h1 className="album-title">Switzerland</h1>
                        <img className="album-cover" src={switzerlandCover} alt="Switzerland" />
                    </Link>
                </div>
                <div className="album">
                    <Link to='/amsterdam'>
                        <h1 className="album-title">Amsterdam</h1>
                        <img className="album-cover" src={amsterdamCover} alt="Amsterdam" />
                    </Link>
                </div>
                <div className="album">
                    <Link to='/paris'>
                        <h1 className="album-title">Paris</h1>
                        <img className="album-cover" src={parisCover} alt="Paris" />
                    </Link>
                </div>
                <div className="album">
                    <Link to='/murcia'>
                        <h1 className="album-title">Murcia</h1>
                        <img className="album-cover" src={murciaCover} alt="Murcia" />
                    </Link>
                </div>
            </div>
        </div>

    )
}

export default Home