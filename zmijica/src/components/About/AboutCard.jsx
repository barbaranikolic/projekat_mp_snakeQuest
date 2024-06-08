import React from 'react';

import './about.css';
import { homeAbout } from '../../dummydata';
import Heading from '../Heading/Heading';
import AWrapper from './AWrapper';

const AboutCard = () => {
  return (
    <>
      <section className='aboutHome'>
        <div className='container flexSB'>
          <div className='left row'>
            <img src='./images/nokia_zmija.webp' alt='' />
          </div>
          <div className='right row'>
            <Heading
              subtitle='LEARN ABOUT GAME'
              title='Welcome to SNAKE!'
            />
            <div className='items'>
              {homeAbout.map((val) => {
                return (
                  <div className='item flexSB'>
                    <div className='text'>
                      <h2>{val.title}</h2>
                      <p>{val.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <AWrapper />
    </>
  );
};

export default AboutCard;
