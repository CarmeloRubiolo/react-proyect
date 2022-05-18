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
                <h2 id="title-muestra">Muestras !!</h2>
                <div className="muestra-master">
                    <div >
                        <div className="muestra-card">
                            <h3>Boda</h3>
                            <img className="img-muestra" src={"imagenes/imgmuestra.png"}></img>
                            <div id="look-muestra">
                                <a href='https://boda-carlaleonel.web.app' target='_blank'>Ver Muestra</a>
                            </div>
                            
                        </div>
                    </div>
                    <div >
                        <div className="muestra-card">
                            <h3>1er Año</h3>
                            <img className="img-muestra" src={"imagenes/imgmuestra1.png"}></img>
                            <div id="look-muestra">
                                <a href='https://boda-carlaleonel.web.app' target='_blank'>Ver Muestra</a>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        
    )
}
export default Muestras