import './App.scss';
import { RMContextProvider } from './context/context';
import Gallery from './pages/Gallery';
import Planets from './pages/Planets';
import Navbar from './core/Navbar';
import GalleryDetail from './pages/GalleryDetail';
import { Routes, Route, BrowserRouter as Router} from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <Router>
    <div>
    <Navbar></Navbar>
    <RMContextProvider>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/gallery' element={<Gallery></Gallery>}></Route>
      <Route path='/gallery/:characterID' element={<GalleryDetail></GalleryDetail>}></Route>
      <Route path='/planets' element={<Planets></Planets>}></Route>
    </Routes>
    </RMContextProvider>
    </div>
    </Router>
  );
}

export default App;
