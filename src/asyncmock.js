const products = [
    {id: 1, name: "Cuenta Regresiva", price: 500},
    {id: 2, name: "Confirmar Asistencia", price: 1500},
    {id: 3, name: "Ubicación", price: 1000},
    {id: 4, name: "Galeria De Fotos", price: 2000}
]

export const getProducts = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(products)
        }, 2000)
    })
}