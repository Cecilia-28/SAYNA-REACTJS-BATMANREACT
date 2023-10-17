import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './styles/App.css';

import Navbar from './libs/nav';
import Footer from './libs/foot';

import Home from './pages/Home';
import Game from './pages/Game';
import Eshop from './pages/E-shop';
import Account from './pages/Account';

import Registration from './pages/registration';
import Dashboard from './pages/Dashboard';
import Cart from './pages/cart';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route path='home' element={<Home/>}/>
            <Route path='game' element={<Game/>}/>
            <Route path='e-shop' element={<Eshop/>}/>
            <Route path='account' element={<Account/>}/>
            <Route path="Registration" element={<Registration/>}/>
            <Route path="Dashboard" element={<Dashboard/>}/>
            <Route path="cart" element={<Cart/>}/>
          </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
