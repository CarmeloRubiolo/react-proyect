import "./Item.css";

const Card = () => {
    

    return(
        <div class="row row-cols-1 row-cols-md-3 g-4">
            <div class="col">
                <div class="card">
                    <h5 class="card-title">Cuenta Regresiva</h5>
                    <img src="./imagenes/cuenta_regresiva.png" class="card-img-top" alt="Cuenta Regresiva"/>
                    <div class="card-body">
                        <p class="card-text">$ 500</p>
                    </div>
                    <button class="btn" type="button">Mostrar detalles</button>
                </div>
            </div>
            <div class="col">
                <div class="card">
                    <h5 class="card-title">Confirmar Asistencia</h5>
                    <img src="./imagenes/confirmar_asistencia.png" class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <p class="card-text">$ 1500</p>
                    </div>
                    <button class="btn" type="button">Mostrar detalles</button>
                </div>
            </div>
            <div class="col">
                <div class="card">
                    <h5 class="card-title">Ubicación</h5>
                    <img src="./imagenes/Ubicacion.png" class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <p class="card-text">$1000</p>
                    </div>
                    <button class="btn" type="button">Mostrar detalles</button>
                </div>
            </div>
            <div class="col">
                <div class="card">
                    <h5 class="card-title">Galeria De Fotos</h5>
                    <img src="./imagenes/galeria_de_fotos.png" class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <p class="card-text">$ 2000</p>
                    </div>
                    <button class="btn" type="button">Mostrar detalles</button>
                </div>
            </div>
        </div>
    )

}
export default Card