import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './component/Navbar';
import Home from './component/Home';
import Skills from './component/Skills';
import Education from './component/Education';
import Projects from './component/Projects';
import Achievements from './component/Achievements';
import Hire from './component/Hire';
import Error404 from './component/Error404';
import Footer from './component/Footer';

function App() {
  return (
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/> 
        <Route path='/skills' element={<Skills/>}/>
        <Route path='/education' element={<Education/>}/> 
        <Route path='/projects' element={<Projects/>}/> 
        <Route path='/achievements' element={<Achievements/>}/>
        <Route path='/hire' element={<Hire/>}/>
        <Route path='*' element={<Error404/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
  );
}

export default App;
