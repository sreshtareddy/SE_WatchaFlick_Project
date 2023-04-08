import React from "react";
import Slider from "react-slick";
import Modal from '@mui/material/Modal';
import { useState } from 'react';
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
  
  const EntertainmentImage = [
    "https://lumiere-a.akamaihd.net/v1/images/p_antmanquantumania_update_1006_122aeffe.jpeg",
    
    "https://lumiere-a.akamaihd.net/v1/images/p_avatar_thewayofwater_97_v2_01ccadaf.png",
    "https://lumiere-a.akamaihd.net/v1/images/p_thelittlemermaid_2023_final_796_94759fcc.jpeg",
    
    "https://lumiere-a.akamaihd.net/v1/images/pp_disney_blackpanther_wakandaforever_1289_d3419b8f.jpeg",
    "https://lumiere-a.akamaihd.net/v1/images/p_drstrangeinthemultiverseofmadness_245_476cabb1.jpeg",
    "https://posters.movieposterdb.com/13_05/1995/114709/s_114709_6645f9fc.jpg",
    "https://c4.wallpaperflare.com/wallpaper/675/275/718/joker-2019-movie-joker-joaquin-phoenix-actor-men-hd-wallpaper-preview.jpg",
    "https://lumiere-a.akamaihd.net/v1/images/p_junglecruise_21740_v2_bb7f0ae4.jpeg",
    "https://lumiere-a.akamaihd.net/v1/images/p_cruella_21672_ba40c762.jpeg",
    "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/scream-vi_bevzvyks_500x749.jpg?v=1676559336",
    "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/7cec51616b83bc608b88df61e3f0000c_12279cbf-0897-461b-a2eb-a4f934eb37a6_500x749.jpg?v=1573594798",
    "https://m.media-amazon.com/images/M/MV5BOWZlMjFiYzgtMTUzNC00Y2IzLTk1NTMtZmNhMTczNTk0ODk1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
    "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/scream_six_500x749.jpg?v=1672414929",
    
  ];

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
  max={EntertainmentImage.length - 1}
  step={1}
  marks={true}
>

  {EntertainmentImage.map((image, index) => (
    <div key={index} onClick={() => handleImageClick(index)}>
      <EntertainmentCard src={image} alt={`EntertainmentImage ${index + 1}`} width={"30%"}
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
  <img src={EntertainmentImage[value]} alt={`EntertainmentImage ${value + 1}`} style={{ maxWidth: '300px', maxHeight: '300px' }} />

  <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
   
    <h1
 
  className="text-2xl font-bold text-gray-800 sm:ml-3 ml-0 my-3"
  style={{ color: "#F8BB16" }}
>
         Title
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
