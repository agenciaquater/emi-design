import React from 'react'
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';

import styles from './styles.module.scss'

const containerStyle = {
  width: '100%',
  height: '500px'
};

const center = {
  lat: -30.0542343,
  lng: -51.2192459
};

interface LocationProps {
  apikey: string;
}

export function Location({apikey}: LocationProps) {
  return (
    <div className={styles.container} id="location">
        <header>
            <img src="/images/marker-big.png" alt="marker" />

            <h1>LOCALIZAÇÃO</h1>
        </header>
        <div className={styles.map}>
          <LoadScript
              googleMapsApiKey={apikey}
          >
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={17}
                tilt={0}
                options={{
                  mapTypeId: "hybrid",
                  streetViewControl: true,
                  disableDefaultUI: true,
                }}>
                <Marker
                    position={{lat: -30.05413678496917, lng: -51.21861826873204}}
                />

                <InfoWindow 
                  position={{lat: -30.05413678496917, lng: -51.21861826873204}}
                  options={{
                    pixelOffset: {
                      height: -45,
                      width: 0,
                      equals: () => true,
                    }
                  }}>
                  <div>
                    <h3>DESIGN</h3>
                    <p>Condomínio Residencial</p>
                  </div>
                </InfoWindow>
            </GoogleMap>
          </LoadScript>
        </div>
    </div>
  )
}