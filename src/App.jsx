import React from 'react'
import { Link } from 'react-router-dom'

import LandingPageImage from './images/LandingPageImage.jpg'

function App() {
  return (
    <div className="app">
      <div className="header">
        <Link to="/">
          <h1 className="header-title">K A Studios</h1>
        </Link>
      </div>

      <div className='albums'>
        <div className='album'>
          <img
            className="landing-page-image"
            src={LandingPageImage}
            alt="Times Square at night"
          />
        </div>

      </div>
    </div>
  )
}

export default App
