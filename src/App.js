
import './App.css';
import Navbar from './Project/Navbar'; 
import Home from './Project/Home';  
import {Routes,Route} from 'react-router-dom'; 
import Products from './Project/Products'; 
import Product from './Project/Product';
import Cart from './Project/Cart';

function App() {
  return (
<> 
   <Navbar/>        
<Routes>  
  <Route exact path ="/"     element={<Home />} />
 <Route exact path ="/products"    element={<Products/>}/> 
  <Route exact path='/products/:id'  element={<Product />}/>
  <Route exact path='/cart'  element={<Cart />}/>
 </Routes>
   {/* </Routes> */}       
   



   

</>
  );
}

export default App;
