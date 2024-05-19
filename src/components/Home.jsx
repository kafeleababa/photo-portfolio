import React from "react";
import { Link } from "react-router-dom";

import switzerlandCover from "../images/Album Cover_08.jpg";
import amsterdamCover from "../images/Album Cover_03.jpg";
import parisCover from "../images/Album Cover_06.jpg";
import murciaCover from "../images/Album Cover_05.jpg";
import splitCover from "../images/Album Cover_07.jpg";
import mallorcaCover from "../images/Album Cover_04.jpg";

const Home = () => {
    return (
        <div className="home">
            <div className="albums">
                <div className="album">
                    <Link to='/switzerland'>
                        <img className="album-cover" src={switzerlandCover} alt="Switzerland" />
                        <h1 className="album-title">Switzerland</h1>
                    </Link>
                </div>
                <div className="album">
                    <Link to='/amsterdam'>
                        <img className="album-cover" src={amsterdamCover} alt="Amsterdam" />
                        <h1 className="album-title">Amsterdam</h1>
                    </Link>
                </div>
                <div className="album">
                    <Link to='/paris'>
                        <img className="album-cover" src={parisCover} alt="Paris" />
                        <h1 className="album-title">Paris</h1>
                    </Link>
                </div>
                <div className="album">
                    <Link to='/murcia'>
                        <img className="album-cover" src={murciaCover} alt="Murcia" />
                        <h1 className="album-title">Murcia</h1>
                    </Link>
                </div>
                <div className="album">
                    <Link to='/split'>
                        <img className="album-cover" src={splitCover} alt="Split" />
                        <h1 className="album-title">Split</h1>
                    </Link>
                </div>
                <div className="album">
                    <Link to='/mallorca'>
                        <img className="album-cover" src={mallorcaCover} alt="Mallorca" />
                        <h1 className="album-title">Mallorca</h1>
                    </Link>
                </div>
            </div>
        </div>

    )
}

export default Home