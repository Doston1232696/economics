import './App.css';
import Card from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Product from './Pages/Product';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter,Routes, Route} from 'react-router-dom';

import men_banner from './Assets/banner_mens.png';
import Women_banner from './Assets/banner_women.png';
import Kid_banner from './Assets/banner_kids.png';
import PayFor from './components/PAyFor/PayFor';






function App() {
  return (
    <div className="App">
   
   
    
   <div>
    <BrowserRouter>
    <Navbar/> 
    <Routes>
      <Route path='/' element={<Shop/>}/>
      <Route path='/mens' element={<ShopCategory banner={men_banner} category="men"/>}/>
      <Route path='/womens' element={<ShopCategory banner={Women_banner} category="women"/>}/>
      <Route path='/kids' element={<ShopCategory banner={Kid_banner} category="kid"/>}/>
      <Route path='/PayFor' element={<PayFor/>}/>
      <Route path='/product' element={<Product/>}>
        <Route path=':productId' element={<Product/>}/>
      </Route>
      <Route path='/Card' element={<Card/>}/>
      <Route path='/login' element={<LoginSignup/>}/>
      
    </Routes>
    <Footer/>
    
    </BrowserRouter>
   </div>
   
   
   
  
    </div>
  );
}

export default App;
