import "./Item.css";
import { Link } from 'react-router-dom'

const Card = ({id, name, price, img}) => {
    

    return(
            <div className="col">
                <div className="card card_build" >
                    <h5 className="card-title">{name}</h5>
                    <img src={img} className="card-img-top img-fluid" alt={name}/>
                    <div className="card-body">
                        <p className="card-text">$ {price}</p>
                    </div>
                    <Link className="button" to={`/detail/${id}`}>Mostrar detalles</Link>
                    

                    {/* <button class="btn" type="button">Mostrar detalles</button> */}
                </div>
            </div>
        
    )

}
export default Card