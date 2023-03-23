import React from 'react'
import { useEffect, useState } from "react";
import axios from "axios";
import { Container, TextField } from "@mui/material";
import HeroCarousel from './HeroCarousel';
import EntertainmentCardSlider from '../Entertainment/EntertainmentCardSlider';
import "./CustomerMainSection.css";

function CustomerMainSection() {
  const [recommendedMovies, setRecommendedMovies] = useState([]);
  const [premierMovies, setPremierMovies] = useState([]);
  const [onlineStreamEvents, setOnlineStreamEvents] = useState([]);

  useEffect(() => {
    const requestPopularMovies = async () => {
      const getPopularMovies = await axios.get("/movie/popular");
      setRecommendedMovies(getPopularMovies.data.results);
    };

    requestPopularMovies();
  }, []);

  useEffect(() => {
    const requestTopRatedMovies = async () => {
      const getTopRatedMovies = await axios.get("/movie/top_rated");
      setPremierMovies(getTopRatedMovies.data.results);
    };

    requestTopRatedMovies();
  }, []);

  useEffect(() => {
    const requestUpcomingMovies = async () => {
      const getUpcomingMovies = await axios.get("/movie/upcoming");
      setOnlineStreamEvents(getUpcomingMovies.data.results);
    };

    requestUpcomingMovies();
  }, []);
  return (
    <>
      {/* <Container maxWidth="md" sx={{ mt: 20 }}>
        <TextField  type="search" id="search" label="Search for movies, events, plays, sports and activities" sx={{ width: 600, alignItems:"right" }} ></TextField>
      </Container> */}

      <HeroCarousel />
      <div className="container mx-auto px-4 md:px-12 my-8">
        <h1 align="left" className="text-2xl font-bold text-gray-800 sm:ml-3 ml-0 my-3" >
          The best of Entertainment
        </h1>
        <EntertainmentCardSlider />
      </div>

      <div className="container mx-auto px-4 md:px-12 my-8">
        <h1 align="left" className="text-2xl font-bold text-gray-800 sm:ml-3 ml-0 my-3" >
          Recommended Movies
        </h1>
        <EntertainmentCardSlider />
      </div>
  </>
);
}

export default CustomerMainSection