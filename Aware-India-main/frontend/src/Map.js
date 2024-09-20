// IndiaMap.js
import React, { useState } from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import indiaMap from './Indian_States.txt'; // Path to your topojson file

const IndiaMap = () => {
  const [selectedState, setSelectedState] = useState(null);

  const handleStateClick = (geo) => {
    setSelectedState(geo.properties.name);
  };

  return (
    <div>
      <h1>Interactive India Map</h1>
      <ComposableMap projection="geoMercator" projectionConfig={{ scale: 1000, center: [78.9629, 22.5937] }} style={{ width: '100%', height: 'auto' }}>
        <Geographies geography={indiaMap}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                onClick={() => handleStateClick(geo)}
                style={{
                  default: {
                    fill: "#D6D000",
                    stroke: "#000",  // Border color set to black
                    strokeWidth: 0.5,  // Set the border width
                    outline: "none",
                  },
                  hover: {
                    fill: "#F53",
                    stroke: "#000",  // Border remains black on hover
                    strokeWidth: 0.75,
                    outline: "none",
                  },
                  pressed: {
                    fill: "#E42",
                    stroke: "#000",  // Border remains black when pressed
                    strokeWidth: 1,
                    outline: "none",
                  },
                }}
              />
            ))
          }
        </Geographies>
      </ComposableMap>
      {selectedState && <div>You selected: {selectedState}</div>}
    </div>
  );
};

export default IndiaMap;
