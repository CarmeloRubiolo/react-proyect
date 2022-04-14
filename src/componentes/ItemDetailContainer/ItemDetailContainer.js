import { useState, useEffect } from 'react';
import { getProductById } from '../../asyncmock'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import './ItemDetailContainer.css'


const ItemDetailContainer = () => {
    const [product, setProduct] = useState()
    const [loading, setLoading] = useState(true)

    const { productId } = useParams()


    useEffect(() => {
        getProductById(productId).then(item => {
            setProduct(item)
        }).catch(err => {
            console.log(err)
        }).finally(() => {
            setLoading(false)
        })

        return (() => {
            setProduct()
        })
    }, [productId])

    return (
        <div>
            {
                loading ?
                <div className="loading"><span className="loader"></span></div> :
                    product ?
                    <ItemDetail {...product} /> :
                    <h1>El producto no existe</h1>
            }
        </div>
    )
}
export default ItemDetailContainer

    