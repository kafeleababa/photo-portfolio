import React from "react";

import { bigImages } from "./images";

const About = () => {

    return (
        <div className="about">
            <header>
                <h1>Switzerland</h1>
            </header>

            <div className="image-grid">
                {bigImages.map((bigImageSource, index) => <img className="image-grid__image" key={index} src={bigImageSource} alt="" loading="lazy"/>)}
            </div>
        </div>
    )
}

export default About