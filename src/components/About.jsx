import React from "react";

import { images } from "./images";

const About = () => {

    return (
        <div className="about">
            <header>
                <h1>Switzerland</h1>
            </header>

            <div className="image-grid">
                {images.map((imgSrc, index) => <img key={index} src={imgSrc} alt="" width={100} />)}
            </div>
        </div>
    )
}

export default About