import React, { useEffect } from 'react'
import 'materialize-css'
import './productCard.css'
import { actionSetLoading, actionSetProduct } from '../../../redux/actions'
import { useDispatch } from 'react-redux'

const ProductCard = ({ product, setScroll}) => {
    useEffect(() => {
        Structure()
    })
    const dispatch = useDispatch()
    const Structure = () => {
        if (product.condition === "new") {
            product.condition = 'nuevo'
        } else if (product.condition === 'used') { product.condition = 'usado' }
    }
    return (
        <div>
            <div className='col s12 m6 l4'>
                <div className='card large z-depth-5 sticky-action '>
                    <div className='card-image waves-effect waves-block waves-light '>
                        <img className='img-rounded resizeimg' data-target="modal1" src={"https"+product.thumbnail.slice(4)} alt='' onClick={() => {
                            dispatch(actionSetLoading(true))
                            dispatch(actionSetProduct(product.id, true));
                            const scroll = window.scrollY
                            document.getElementById('container').style.display = 'none'
                            document.getElementById('productContainer').style.display = 'block'
                            setScroll(scroll)

                        }}></img>
                    </div>
                    <div class="card-content ">
                        <span className='card-title activator text-darken-4 flow-text small '>{product.title}</span>
                    </div>
                    <div className='card-reveal amber lighten-4'>
                        <span className='card-title black-text text-darken-4'>{product.title}
                            <i className='material-icons right'>close</i>
                        </span>
                        <p className='black-text'>Estado: {product.condition}</p>
                        <p className='black-text'>Cantidad disponible: {product.available_quantity}</p>
                        <p className='black-text'>Precio: ({product.currency_id}) ${product.price}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ProductCard;