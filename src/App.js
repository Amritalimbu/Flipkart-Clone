import './App.css';
import Navbar from './navigation/Navbar';
import Footer from './footer/Footer';
import SwiperImg from "./swiperContainer/SwiperImg"
import Catogaries from './catogaries/Catogaries';
import MenTops from './pages/MenTops';
import { BrowserRouter as Routers, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar/>
      <Catogaries/>
      <Routers>
        <Routes>
          <Route exact path='/' element={<SwiperImg/>}/>
          <Route exact path='/MenTops' element={<MenTops/>}/>
        </Routes>
      </Routers>
      <Footer/>
    </>
  );
}

export default App;
