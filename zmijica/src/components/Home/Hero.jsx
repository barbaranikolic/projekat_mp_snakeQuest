
import Heading from '../Heading/Heading';
import './Hero.css';
import { Link } from 'react-router-dom';

const Hero = () => {

  return (
    <>
      <section className='hero'>
        <div className='container'>
          <div className='row'>
            <Heading
              subtitle='Are you ready to'
              title='REVIVE CHILDHOOD MEMORIES?'
            />
            
            <div className='primary-btn'>
            <Link to='/game'>Let's play</Link>
              
            </div>
          </div>
        </div>
      </section>
      <div className='margin'></div>
      </>
  );
};

export default Hero;
