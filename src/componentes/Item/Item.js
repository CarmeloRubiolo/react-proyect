import "./Item.css";
import { Link } from 'react-router-dom'

const Card = ({id, name, price, img}) => {
    

    return(
            <div class="col">
                <div class="card" className="card_build">
                    <h5 class="card-title">{name}</h5>
                    <img src={img} class="card-img-top img-fluid" alt={name}/>
                    <div class="card-body">
                        <p class="card-text">$ {price}</p>
                    </div>
                    <Link className="button" to={`/detail/${id}`}>Mostrar detalles</Link>
                    

                    {/* <button class="btn" type="button">Mostrar detalles</button> */}
                </div>
            </div>
        
    )

}
export default Card