import './App.scss';
import { RMContextProvider } from './context/context';
import Gallery from './components/Gallery';
import Planets from './components/Planets';
import Navbar from './components/Navbar'

function App() {
  return (
    <div>
    <Navbar></Navbar>
    <RMContextProvider>
      <Gallery></Gallery>
      <Planets></Planets>
    </RMContextProvider>
    </div>
  );
}

export default App;
