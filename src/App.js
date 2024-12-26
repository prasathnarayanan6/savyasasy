import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Products from './Pages/Products';
import Contact from './Pages/Contact';
function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/home" element={<Home />}></Route>
                <Route path="/about" element={<About />}></Route>
                <Route path="/products" element={<Products/>}/>
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </BrowserRouter>
    </div>
  );
}
export default App;
