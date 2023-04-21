import React from 'react'
import HeroCarousel from './HeroCarousel';
import EntertainmentCardSlider from '../Entertainment/EntertainmentCardSlider';
import "./CustomerMainSection.css";

function CustomerMainSection() {
  return (
    <div style={{ backgroundColor: "#161616", marginTop: "64px"}}>
      {/* <Container maxWidth="md" sx={{ mt: 20 }}>
        <TextField  type="search" id="search" label="Search for movies, events, plays, sports and activities" sx={{ width: 600, alignItems:"right" }} ></TextField>
      </Container> */}

      <HeroCarousel />
      <div className="container mx-auto px-4 md:px-12 my-8">
      <h1
  align="left"
  className="text-2xl font-bold text-gray-800 sm:ml-3 ml-0 my-3"
  style={{ color: "#F8BB16" }}
>
          The best of Entertainment
        </h1>
        <EntertainmentCardSlider />
      </div>
     
      <div className="container mx-auto px-4 md:px-12 my-8">
      <h1
  align="left"
  className="text-2xl font-bold text-gray-800 sm:ml-3 ml-0 my-3"
  style={{ color: "#F8BB16" }}
>
          Recommended Movies
        </h1>
        <EntertainmentCardSlider />
      </div>
  </div>
);
}

export default CustomerMainSection