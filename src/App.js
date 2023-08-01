import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from "./components/Pages/Home/Home";
import Store from "./components/Pages/Store/Store";
import NavBar from './components/Pages/Home/NavBar';
import About from "./components/Pages/About/About";
import Cart from './components/Cart/Cart';
import ContextProvider from './components/contrext-store/ContextProvider';
import Footer from './components/Footer';
import  Header from './component/Header'
function App() {
  return (
    <div>
      <ContextProvider>
      <NavBar />
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<About />} />
           {/* <Route path='/cart' element={<Cart />} /> */}

        </Routes>
        <Footer />
        </ContextProvider>
    </div>
  );
}

export default App;
