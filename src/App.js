
import { useState } from 'react'
import "./App.css";
import NavBar from "./componentes/NavBar/NavBar";
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import ItemCount from "./componentes/ItemCount/ItemCount";
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartContextProvider } from './context/CartContext';
import Cart from './componentes/Cart/Cart'
import { NotificationProvider } from './notification/Notification'
import Order from './componentes/Order/Order';
import Muestras from './componentes/Muestras/Muestras'


function App() {
  const [show, setShow] = useState({path: 'list', param: '1'})

  const handleOnAdd = (quantity) => {
    console.log(`Se agregó ${quantity} producto al carrito`)
  }


  return (
    <div className="app">
      <NotificationProvider>
        <CartContextProvider>
          <BrowserRouter>
            <header>
              <NavBar />
            </header>
            <main>
              <Routes>
                <Route path="/muestras" element = { <Muestras />} />
                <Route path= '/' element = {<ItemListContainer />} />
                <Route path= '/list' element = {<ItemListContainer greeting={'Arma Tu Tarjeta'}/>} />
                <Route path= '/detail/:productId' element = {<ItemDetailContainer/>} />
                <Route path= '/cart' element = {<Cart />} />
                <Route path="/order" element={<Order />}/>
              </Routes>
            </main>
          </BrowserRouter>
        </CartContextProvider>
      </NotificationProvider>
    </div>
  )
}

export default App;
