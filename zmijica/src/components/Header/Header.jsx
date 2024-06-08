
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import './header.css';

const Header = () => {

  return (
    <>
      <Navbar />
      <header>
        <nav className='flexSB'>
          <ul
            className='flexSB' 
          >
            <li>
              <Link to='/'>Home</Link>
            </li>
    
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/team'>Team</Link>
            </li>
          </ul>
          <div className='start'>
            <div className='button'></div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
