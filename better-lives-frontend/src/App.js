// import logo from './logo.svg';
import './App.css';
import {BrowserRouter , Routes, Route} from 'react-router-dom';
import Nav from './components/nav';
import Search from './components/search'
import Explore from './components/explore';
import Compare from './components/compare';
import Home from './components/home';
import Weather from './components/weather/weather';
import Health from './components/health/health';
import Tourism from './components/tourism/tourism';
import Education from './components/education/education';
import Map from './components/map/map'


function App() {
  return (
    <div className="App">
      {/* div for navigation and search */}
      <div className='nav-router'>
      
      <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/compare" element={<Compare/>}/>
        <Route path="/search" element={<Search/>}/>
        <Route path="/explore" element={<Explore/>}/>
        <Route path="/explore/weather" element={<Weather/>}/>
        <Route path="/explore/health" element={<Health/>}/>
        <Route path="/explore/tourism" element={<Tourism/>}/>
        <Route path="/explore/education" element={<Education/>}/>
        <Route path="/explore/map" element={<Map/>}/>
      </Routes>
      </BrowserRouter>
      </div>

    </div>
  );
}

export default App;
