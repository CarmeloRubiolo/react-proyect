
import "./App.css";
import NavBar from "./componentes/NavBar/NavBar";
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import CartWidget from "./componentes/CartWidget/CartWidget";


function App() {
  return (
  <>
    <header>
      <NavBar />
    </header>  
    <ItemListContainer greeting={"Bienvenidos !!"}/>
    
  </>
  );
}

export default App;
