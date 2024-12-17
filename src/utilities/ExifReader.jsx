import React, { useState, useEffect } from 'react'
import EXIF from 'exif-js'

// Function to convert decimal to fraction
function decimalToFraction(decimal) {
  const tolerance = 1.0e-6
  let denominator = 1
  let numerator = decimal

  while (Math.abs(numerator - Math.round(numerator)) > tolerance) {
    numerator *= 10
    denominator *= 10
  }

  return `${Math.round(numerator)}/${denominator}`
}

const ExifReader = ({ imageSrc }) => {
  // Destructure imageSrc from props
  const [exifData, setExifData] = useState({
    make: 'N/A',
    model: 'N/A',
    exposureTime: 'N/A',
    iso: 'N/A',
    aperture: 'N/A',
  })

  const [showExif, setShowExif] = useState(false)

  // Toggle the display of EXIF data
  const handleClick = () => {
    setShowExif(!showExif)
  }

  useEffect(() => {
    const img = new Image()
    img.src = imageSrc

    img.onload = () => {
      EXIF.getData(img, function () {
        const make = EXIF.getTag(this, 'Make')
        const model = EXIF.getTag(this, 'Model')
        const exposureTime = EXIF.getTag(this, 'ExposureTime')
        const iso = EXIF.getTag(this, 'ISOSpeedRatings')
        const aperture = EXIF.getTag(this, 'FNumber')

        // Handle ExposureTime and convert to fraction if it's a decimal
        let formattedExposureTime = 'N/A'
        if (exposureTime) {
          if (typeof exposureTime === 'number') {
            formattedExposureTime = decimalToFraction(exposureTime)
          } else {
            formattedExposureTime = `${exposureTime.numerator}/${exposureTime.denominator}`
          }
        }

        // Handle Aperture
        let formattedAperture = 'N/A'
        if (aperture) {
          formattedAperture = `f/ ${aperture}`
        }

        setExifData({
          make: make || 'N/A',
          model: model || 'N/A',
          exposureTime: formattedExposureTime,
          iso: iso || 'N/A',
          aperture: formattedAperture,
        })
      })
    }
  }, [imageSrc]) // Run again if imageSrc changes

  return (
    <div>
      <img
        src={imageSrc}
        alt="I"
        style={{ cursor: 'pointer', width: '300px' }}
        onClick={handleClick} // Add the onClick handler
      />

      {showExif && (
      <div>
        <p className="camera-make">
          {exifData.make} {exifData.model}
        </p>
        <p className="exif-data">
          Shutter Speed: {exifData.exposureTime} ISO: {exifData.iso} Aperture:{' '}
          {exifData.aperture}
        </p>
      </div>
      )}
    </div>
  )
}

export default ExifReader
