import NavBar from "./Components/NavBar"
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Shop from "./Pages/Shop";
import ShopCategory from './Pages/ShopCategory'
import Products from './Pages/Products'
import Cart from "./Pages/Cart";
import LoginSingup from './Pages/LoginSingup'
import Footer from "./Components/Footer";
import men_banner from './Components/Assets/banner_mens.png'
import women_banner from './Components/Assets/banner_women.png'
import kids_banner from './Components/Assets/banner_kids.png'
import { useContext } from "react";
import { ModeContext } from "./Context/Mode";
import LoginForm from "./Pages/LoginForm";


function App() {
  const{mode}=useContext(ModeContext)
  return (
    <>
    {mode && <div>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Shop/>}/>
          <Route path="/men" element={<ShopCategory banner={men_banner} category = 'men'/>}/>
          <Route path="/women" element={<ShopCategory banner={women_banner} category = 'women'/>}/>
          <Route path="/kids" element={<ShopCategory banner={kids_banner} category = 'kid'/>}/>
          <Route path="/product" element={<Products/>}>
             <Route path=":product" element={<Products/>}/>
          </Route>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/login" element={<LoginSingup/>}>
          <Route path="loginform" element={<LoginForm/>}/>
          </Route>
          
        </Routes>
        <Footer/>
     </BrowserRouter>
    </div>}

    {!mode && <div className="bg-slate-800">
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Shop/>}/>
          <Route path="/men" element={<ShopCategory banner={men_banner} category = 'men'/>}/>
          <Route path="/women" element={<ShopCategory banner={women_banner} category = 'women'/>}/>
          <Route path="/kids" element={<ShopCategory banner={kids_banner} category = 'kid'/>}/>
          <Route path="/product" element={<Products/>}>
             <Route path=":product" element={<Products/>}/>
          </Route>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/login" element={<LoginSingup/>}>
          <Route path="loginform" element={<LoginForm/>}/>
          </Route>
        </Routes>
        <Footer/>
     </BrowserRouter>
    </div>}
    </>
  )
}

export default App;
