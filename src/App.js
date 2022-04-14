
import { useState } from 'react'
import "./App.css";
import NavBar from "./componentes/NavBar/NavBar";
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import ItemCount from "./componentes/ItemCount/ItemCount";
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';


function App() {
  const [show, setShow] = useState({path: 'list', param: '1'})

  const handleOnAdd = (quantity) => {
    console.log(`Se agregó ${quantity} producto al carrito`)
  }


  return (
    <div className="app">
      <BrowserRouter>
        <header>
          <NavBar />
        </header>
        <main>
          <div>
          {/* <ItemListContainer greeting={"Arma tu Tarjeta"}/> */}
            
          </div>
          <Routes>
            <Route path= '/' element = {<ItemListContainer />} />
            <Route path= '/list' element = {<ItemListContainer greeting={'Arma Tu Tarjeta'}/>} />
            <Route path= '/detail/:productId' element = {<ItemDetailContainer/>} />
          </Routes>
          {/* <ItemCount initial={0} stock={1} onAdd={handleOnAdd} />  */}
        </main>
      </BrowserRouter>
      
    </div>
  )
}

export default App;
