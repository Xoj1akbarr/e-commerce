import './App.css';
import Footer from './components/footer/Footer';
import Navbar_bottom from './components/navbar_bottom/Navbar_bottom';
import Navbar_top from './components/navbar_top/Navbar_top';
import { Routes, Route } from'react-router-dom';
import Kirish from './routes/kirish/Kirish';
import Saralangan from './routes/saralangan/Saralangan';
import Savat from './routes/savat/Savat';
import Carusel from './components/carusel/Carusel';
import Product from './components/product/Product';
import SingleRoute from './routes/singleRoute/SingleRoute';



function App() {
  return (
    <div>
    <Navbar_top />
    <Navbar_bottom />
    <Carusel />
    <Product />

    <Routes>
      <Route path='/kirish' element={<Kirish />}/>
      <Route path='/saralangan' element={<Saralangan />}/>
      <Route path='/savat' element={<Savat />}/>
      <Route path='/product/:id' element={<SingleRoute />}/>
    </Routes>
    <Footer />

    </div>
  );
}

export default App;
