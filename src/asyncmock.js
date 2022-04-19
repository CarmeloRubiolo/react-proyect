const products = [
    {id: '1', stock:'0', name: "Cuenta Regresiva", price: 500, img:"../imagenes/cuenta_regresiva.png", description:'No puede faltar en tu tarjeta, lo hace moderna y dinámica'},
    {id: '2', stock:'0', name: "Confirmar Asistencia", price: 1500, img:"../imagenes/confirmar_asistencia.png", description:'No puede faltar en tu tarjeta, lo hace moderna y dinámica'},
    {id: '3', stock:'0', name: "Ubicación", price: 1000, img:"../imagenes/Ubicacion.png", description:'No puede faltar en tu tarjeta, lo hace moderna y dinámica'},
    {id: '4', stock:'0', name: "Galeria De Fotos", price: 2000, img:"../imagenes/galeria_de_fotos.png", description:'No puede faltar en tu tarjeta, lo hace moderna y dinámica'}
]

export const getProducts = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductById = (id) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 2000)
    })
}