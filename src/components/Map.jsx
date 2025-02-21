import React, { useState } from "react";
import WorldMap from "/World_map1.svg"; // Import your SVG world map
import { Dot, Minus, Plus, Zap } from "lucide-react";

const Map = () => {
  const [markers, setMarkers] = useState([]);

  const handleMapClick = (event) => {
    const svg = event.currentTarget;
    const point = svg.createSVGPoint(); // Create a point in SVG coordinate space

    point.x = event.clientX;
    point.y = event.clientY;

    // Convert browser coordinates to SVG coordinates
    const svgCoords = point.matrixTransform(svg.getScreenCTM().inverse());

    setMarkers([...markers, { x: svgCoords.x, y: svgCoords.y }]);
  };

  const handleMarkerDoubleClick = (index) => {
    setMarkers(markers.filter((_, i) => i !== index));
  };

  return (
    <div className="relative  ml-20 my-3 m-2 ">
      <Zap className="text-slate-600 " size={17} />
      <svg
        onClick={handleMapClick}
        viewBox="0 0 1000 350"
        className="w-full h-auto "
      >
        <image href={WorldMap} width="1000" height="400" />
        {markers.map((marker, index) => (
          <>
            <circle
              cx={marker.x}
              cy={marker.y}
              r="12"
              fill="rgba(0, 0, 255, 0.1)" // Very light blue outer glow
            />

            <circle
              cx={marker.x}
              cy={marker.y}
              r="8"
              fill="rgba(0, 0, 255, 0.3)" // Medium blue shadow
            />
            <circle
              key={index}
              cx={marker.x}
              cy={marker.y}
              r="5"
              fill="blue"
              onDoubleClick={() => handleMarkerDoubleClick(index)}
              className="cursor-pointer"
            />
          </>
        ))}
      </svg>
      <div className=" flex flex-row justify-center  sm:justify-between items-center sm:mt-10  md:mt-[-2rem]  ">
        <div className="flex border border-slate-400 ml-[-4rem] md:px-2 rounded-2xl text-sm ">
          <p className="flex ">
            <Dot className="text-slate-300" />
            <span className="text-blue-950">Europe</span>
          </p>
          <p className="flex ">
            <Dot className="text-blue-800" />
            <span className="text-blue-950">Asia</span>
          </p>
          <p className="flex ">
            <Dot className="text-gray-300" />
            <span className="text-blue-950">Africa</span>
          </p>
          <p className="flex ">
            <Dot />
            <span className="text-blue-950">America</span>{" "}
          </p>
        </div>
        <div className="  sm:ml-20 mt-[3rem]  md:mt-[-4rem] ">
          <div className="  w-8 h-8 border border-slate-300 flex justify-center items-center rounded-full my-2 ">
            <Plus />
          </div>
          <div className="  sm:w-8 sm:h-8 border border-slate-300 flex justify-center items-center rounded-full ">
            <Minus />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;
