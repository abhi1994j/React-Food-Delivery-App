import './App.css'
import Footer from './components/Footer'
import Home from './components/Home'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Quote from './components/Quote';
import Resturants from './components/Resturants';
import Foods from './components/Foods';
import Contact from './components/Contact';


function App() {
 

  return (
    <>
      {/* <Navbar/> */}
      {/* <Home/> */}
      {/* <Footer/> */}
      <Router>
      {/* <Navbar/> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quote" element={<Quote/>} />
        <Route path="/resturants" element={<Resturants/>} />
        <Route path='/foods' element={<Foods/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </Router>
     
    </>
  )
}

export default App
