import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Explore Movie MAGIC Now!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/photo1.jpg'
              text='From epic quests to mystical adventures, our fantasy movies will transport you to another realm.'
              label='Fantasy'
              path='/services'
            />
            <CardItem
              src='images/photo2.jpg'
              text='From explosive fight scenes to heart-pumping chases, our action movies have it all.'
              label='Action'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/photo3.jpg'
              text='Experience the lighter side of cinema with our selection of side-splitting comedies.'
              label='Comedy'
              path='/services'
            />
            <CardItem
              src='images/photo4.jpg'
              text='Experience the suspense and intrigue of crime cinema - book your tickets now.'
              label='Crime'
              path='/services'
            />
            
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;