// BROKEN: DIV ANIMATION IN WORKS. CHATGPT DOESN'T UNDERSTAND, WILL HAVE TO DO MORE RESEARCH

import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Works from './pages/Works';
import Contact from './pages/Contact';
import Work from './pages/Work';

function App() {
  return (
    <Router>
      <div className='appContainer'>
        <Header text="Evan Davies"/>
        <Nav />
        <div className='contentContainer'>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/works' element={<Works/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
          <Route path='/work:name' element={<Work />}></Route>
        </Routes>
        </div>
        <Footer updDate={"August 10, 2023"}/>
      </div>
    </Router>
  );
}

export default App;
