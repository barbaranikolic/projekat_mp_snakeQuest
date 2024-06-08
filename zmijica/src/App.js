import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import Header from './components/Header/Header';
import Home from './pages/Home';
import About from './pages/About';
import GamePage from './pages/GamePage';
import Team from './pages/Team';


function App() {
  return (
    <BrowserRouter>
     <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/game' element={<GamePage />} />
        <Route path='/team' element={<Team />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

