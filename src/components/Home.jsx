import React from "react";
import { Link } from "react-router-dom";

import cover from "../images/Switzerland_001.jpg"

const Home = () => {
    return (
        <div className="app">
            <header className="header">
                <h1>Home</h1>
            </header>

            <div className="albums">
                <p>Select an album below</p>

                <div className="album-cover">
                    <Link to="/about">
                        <p>Switzerland</p>

                        <img className="album-cover__image" src={cover} alt="pic"/>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Home