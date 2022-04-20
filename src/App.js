
import { useState } from 'react'
import "./App.css";
import NavBar from "./componentes/NavBar/NavBar";
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import ItemCount from "./componentes/ItemCount/ItemCount";
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartContextProvider } from './context/CartContext';


function App() {
  const [show, setShow] = useState({path: 'list', param: '1'})

  const handleOnAdd = (quantity) => {
    console.log(`Se agregó ${quantity} producto al carrito`)
  }


  return (
    <div className="app">
      <CartContextProvider>
        <BrowserRouter>
          <header>
            <NavBar />
          </header>
          <main>
            <Routes>
              <Route path= '/' element = {<ItemListContainer />} />
              <Route path= '/list' element = {<ItemListContainer greeting={'Arma Tu Tarjeta'}/>} />
              <Route path= '/detail/:productId' element = {<ItemDetailContainer/>} />
            </Routes>
          </main>
        </BrowserRouter>
      </CartContextProvider>
    </div>
  )
}

export default App;
