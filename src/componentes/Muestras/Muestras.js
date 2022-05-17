import './Muestras.css'

const Muestras = () => {


    return(
        <div>
            <div className="main-inicio">
                <h1 id="inicio-inv">INVITACIONES DIGITALES INTELIGENTES. TODA LA INFORMACION DE TU FIESTA EN UN SOLO LUGAR.</h1>
            </div>
            <div className="cell">
                <h2 className="line-through photograph"><span>Invitaciones Digitales</span></h2>
            </div>
            <div >
                <h2>Muestras !!</h2>
                <div className="muestra-master">
                    <div >
                        <div className="">
                            <h3>Boda</h3>
                            <img className="img-muestra" src={"imagenes/imgmuestra.png"}></img>
                            <a href='https://boda-carlaleonel.web.app' target='_blank'>Ver Muestra</a>
                        </div>
                    </div>
                    <div >
                        <div className="">
                            <h3>1er Año</h3>
                            <img className="img-muestra" src={"imagenes/imgmuestra1.png"}></img>
                            <a href='https://boda-carlaleonel.web.app' target='_blank'>Ver Muestra</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        
    )
}
export default Muestras