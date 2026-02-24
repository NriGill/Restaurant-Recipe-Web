import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Layout from './pages/Layout';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Menu from './pages/Menu';
import Myaccount from "./pages/Myaccount"
import Recipes from './pages/Recipes';
import Recipe from './pages/recipe';
import Recipeslist from './pages/recipeslist';
import Recipewise from './pages/Recipewise';
import Login from './pages/Login';
import Searchrecipe from './pages/Searchrecipe';
import Cart from './pages/Cart';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/profile" element={<Myaccount />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/recipe/:id" element={<Recipe/>} />
          <Route path="/tag/:id" element={<Recipewise/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/search/:id" element={<Searchrecipe />} />
          <Route path="/cart" element={<Cart />} />








        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
