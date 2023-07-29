import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from "./components/Pages/Home/Home";
import Store from "./components/Pages/Store/Store";
import NavBar from './components/Pages/Home/NavBar';
import About from "./components/Pages/About/About";
import Cart from './components/Cart/Cart';
function App() {
  return (
    <div>
      <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<About />} />
           {/* <Route path='/cart' element={<Cart />} /> */}

        </Routes>
    </div>
  );
}

export default App;
