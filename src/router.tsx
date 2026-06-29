import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Bands from './pages/Bands';
import Music from './pages/Music';
import Contact from './pages/Contact';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />, // Žádný Layout, rovnou celá stránka Home
  },
  {
    path: '/about',
    element: <About />, // Rovnou celá stránka About
  },
  {
    path: '/bands',
    element: <Bands />, // Rovnou celá stránka Bands
  },
  {
    path: '/music',
    element: <Music />, // Rovnou celá stránka Music
  },
  { 
    path: '/contact',
    element: <Contact />, // Rovnou celá stránka Contact
  },  
]);