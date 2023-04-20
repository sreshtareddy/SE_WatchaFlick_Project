import React from "react";
import Slider from "react-slick";
import Modal from '@mui/material/Modal';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Typography, Button } from '@mui/material';
import Box from '@mui/material/Box';
import {
  CardActions,
  Card,
  CardContent,
  Rating,
  Paper,
} from "@mui/material";

const style = {
  position: 'absolute' ,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


const EntertainmentCard = (props) => {
  return (
    <>
      <div className="w-full h-30 px-2" >
        <img
          className="w-full h-full rounded-lg"
          src={props.src}
          alt="entertainment"
        />
      </div>
    </>
  );
};

const EntertainmentCardSlider = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [movies, setMovies] = useState([]);
  const [movieName,setMovieName] = useState([]);
  const [value, setValue] = useState(0);


  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleImageClick = (index) => {
    setValue(index);
    setIsModalOpen(true);
  };

  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleSliderChangeCommitted = (event, newValue) => {
    console.log("Selected index:", newValue);
  };
  
  useEffect(() => {
    axios.get('http://localhost:3000/api/movies/movie?end_date=2013-12-25&start_date=2004-11-19')
      .then(response => {
        const movies = response.data;
        console.log(movies)
        const movieImages = movies.movies.map(movie => movie.movie_image);
        const movieTitles = movies.movies.map(movie => movie.movie_name);
        setMovies(movieImages);
        setMovieName(movieTitles);
        console.log("movieNames",movieTitles)
        console.log("Images",movieImages);
      })
      .catch(error => {
        console.error(error);
      });
  },[]);

  const settings = {
    infinite: false,
    autoplay: false,
    slidesToShow: 5,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
    <Slider
  {...settings}
  value={value}
  onChange={handleSliderChange}
  onChangeCommitted={handleSliderChangeCommitted}
  min={0}
  max={movies.length - 1}
  step={1}
  marks={true}
>

  {movies.map((image, index) => (
    <div key={index} onClick={() => handleImageClick(index)}>
      <EntertainmentCard src={image} alt={`movies ${index + 1}`} width={"30%"}
          height={"50%"}
          objectFit="cover"/>
    </div>
  ))}
  {
    <Modal open={isModalOpen} onClose={handleCloseModal}>
      <div>
      <Paper
  sx={{
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "70%",
    bgcolor: "#F8BB16",
    color: "#606060",
    boxShadow: 24,
    p: 4,
  }}
>
  <Card
    raised
    sx={{
      display: "flex",
      padding: "5px",
      alignItems: "center",
      bgcolor: "#606060",
      color: "#FFFF00",
    }}
  >
    <CardContent sx={{ display: 'flex', alignItems: 'center' }}>
  <img src={movies[value]} alt={`movies ${value + 1}`} style={{ maxWidth: '300px', maxHeight: '300px' }} />

  <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
   
    <h1
 
  className="text-2xl font-bold text-gray-800 sm:ml-3 ml-0 my-3"
  style={{ color: "#F8BB16" }}
>
        {movieName[value]}
        </h1>
      <Rating name="read-only" readOnly />
   

    <Typography variant="h6" gutterBottom style={{ color: '#F8BB16' }}>
      IMDB Rating
    </Typography>

    <Typography variant="body1" color="text.secondary">
      Release Date:
    </Typography>

    <Button size="small" variant="contained" color="error" sx={{ mt: 2 }}>
      Book Tickets
    </Button>
  </Box>
</CardContent>

  </Card>
</Paper>

    
    
    </div>
  </Modal>
  }
</Slider>
      
    </>
  );
};
export default EntertainmentCardSlider;
