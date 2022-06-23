import './App.scss';
import { RMContextProvider } from './context/context';
import Gallery from './pages/Gallery';
import Planets from './pages/Planets';
import Navbar from './core/Navbar';
import GalleryDetail from './pages/GalleryDetail';
import { Routes, Route, BrowserRouter as Router} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import RequiredAuth from './components/RequiredAuth';
import { login } from './auth/auth'
import { useState } from 'react';

function App() {
  const [user, setUser] = useState(null);
  const authenticated = user != null;
  const loginUser = ({email, password}) => 
  setUser(login({ email, password }));
  const logoutUser = () => setUser(null);

  return (
    <Router>
    <div>
    <Navbar authenticated={authenticated} logoutUser={logoutUser}></Navbar>
    {authenticated ? <p className='usuario'>{user.username}</p> : <p className='usuario'>No User</p>}
    <RMContextProvider>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/gallery' element={<RequiredAuth authenticated={authenticated}><Gallery></Gallery></RequiredAuth>}></Route>
      <Route path='/gallery/:characterID' element={<GalleryDetail></GalleryDetail>}></Route>
      <Route path='/planets' element={<RequiredAuth authenticated={authenticated}><Planets></Planets></RequiredAuth>}></Route>
      <Route path='/login' element={<Login loginUser={loginUser}></Login>}></Route>
    </Routes>
    </RMContextProvider>
    </div>
    </Router>
  );
}

export default App;
