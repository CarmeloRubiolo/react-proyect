import './ItemCart.css'
const ItemCart = ({ id, price, name}) => {
    return(
        <section>
            <ul className="list-cart">
                <li>{name}</li>
                <li>{price}</li>
            </ul>
        </section>
        
    )
}
export default ItemCart