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

  const handleImageClick = () => {
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  
  const EntertainmentImage = [
  
    "https://m.media-amazon.com/images/M/MV5BOWZlMjFiYzgtMTUzNC00Y2IzLTk1NTMtZmNhMTczNTk0ODk1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
    "https://lumiere-a.akamaihd.net/v1/images/p_antmanquantumania_update_1006_122aeffe.jpeg",
    
    "https://lumiere-a.akamaihd.net/v1/images/p_avatar_thewayofwater_97_v2_01ccadaf.png",
    "https://lumiere-a.akamaihd.net/v1/images/p_thelittlemermaid_2023_final_796_94759fcc.jpeg",
    
    "https://lumiere-a.akamaihd.net/v1/images/pp_disney_blackpanther_wakandaforever_1289_d3419b8f.jpeg",
    "https://lumiere-a.akamaihd.net/v1/images/p_drstrangeinthemultiverseofmadness_245_476cabb1.jpeg",
    
    "https://lumiere-a.akamaihd.net/v1/images/p_junglecruise_21740_v2_bb7f0ae4.jpeg",
    "https://lumiere-a.akamaihd.net/v1/images/p_cruella_21672_ba40c762.jpeg",
    
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
      <Slider {...settings}>
  {EntertainmentImage.map((image, index) => (
    <div key={index} onClick={handleImageClick}>
      <EntertainmentCard src={image} alt={image.alt} />
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
            width: 1100,
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
          }}
        >
          <Card
            raised
            sx={{
              maxWidth: 1100,
              display: "flex",
              padding: "5px",
              alignItems: "center",
            }}
          >
            
            <CardContent>
              <Typography variant="h6">
                IMBD Rating:{" "}
                <span style={{ color: "purple" }}>
                 MovieName
                </span>
              </Typography>
              <Rating
                name="read-only"
                
                readOnly
              />
              <Typography gutterBottom variant="h6" component="div">
                Title
              </Typography>
              <Typography gutterBottom>
                Release Date : 
              </Typography>
              <Typography variant="body2" color="text.secondary">
              
              </Typography>

              <Button
            size="small"
            variant="contained"
            color="secondary"
          >
            Book Tickets
          </Button>
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
