import React from 'react';
import '../../App.css';
import { Button } from '../Common/Button';
import './MainSection.css';
import SupportEngine from "../SupportEngine"

function MainSection() {
  return (

    <div className='hero-container'>
      <video src='/videos/video2.mp4' autoPlay loop muted />
      <h2>ADVENTURE OF THE BIG SCREEN AWAITS</h2>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
        <Button type = 'button'
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        <Button type = 'button'
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          BOOK TICKETS 
        </Button>
        {/* <SupportEngine/> */}
      </div>
    </div>
  );
}

export default MainSection