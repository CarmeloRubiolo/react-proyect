
import "./App.css";
import NavBar from "./componentes/NavBar/NavBar";
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import ItemCount from "./componentes/ItemCount/ItemCount";


function App() {
  const handleOnAdd = (quantity) => {
    console.log(`Se agregó ${quantity} producto al carrito`)
  }


  return (
    <div>
      <header>
        <NavBar />
      </header>
      <main>
        <div>
          <ItemListContainer greeting={"Bienvenidos !!"}/>
          <ItemCount initial={0} stock={1} onAdd={handleOnAdd} />
        </div>
        
      </main>
      
    </div>
  );
}

export default App;
