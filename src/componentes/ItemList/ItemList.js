import Item from "../Item/Item";
import "./ItemList.css";

const ItemList = ({products}) => {
    return(
            <div class="card_master">
                {products.map(prod =>  <Item key={prod.id} {...prod}/>)}
            </div>
    )
}

export default ItemList