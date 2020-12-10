import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import M from 'materialize-css'
import './product.css'
import { actionClearProduct} from '../../../redux/actions';

const Product = ({scroll}) => {
    const dispatch = useDispatch()
    const product = useSelector(store => store.reducer.product);
    const loading = useSelector(store => store.reducer.loading);
    const mb = document.querySelectorAll('.materialboxed');
    M.Materialbox.init(mb)
    const crsl = document.querySelectorAll(".carousel");
    M.Carousel.init(crsl, { fullWidth: true, duration: 150 })
    return (
        <div>
            <div class="container" id='productContainer' style={{ display: 'none', marginTop: "10px" }}>
                <div class="row">
                    <div className='col s12' style={{ display: loading }}>
                        <div class="progress">
                            <div class="indeterminate"></div>
                        </div>
                    </div>
                    {(product.length > 0) ? (
                        <div className='col s12'>

                            <div className="col s12 m6 offset-m3">
                                <div className='carousel carousel-slider center transparent z-depth-5'>
                                    {product.map((img) => {
                                        return (<div class="carousel-item">
                                            <a href="#one!"><img className='img-rounded responsive-img imagen' src={img.secure_url} /></a>
                                        </div>)
                                    })}
                                </div>
                                <div className='black-text'><i className='material-icons left'>chevron_left
                                </i>desliza para ver mas imagenes<i className='material-icons right'>chevron_right
                                </i></div>
                            </div>
                        </div>
                    ) : (
                            <div></div>
                        )
                    }
                    <div className='col s6 offset-s3'>
                        <div className='btn black-text' onClick={() => {
                            dispatch((actionClearProduct()));
                            document.getElementById('container').style.display = 'block'
                            document.getElementById('productContainer').style.display = 'none'
                            window.scrollTo({ top: scroll, behavior: 'smooth' })
                        }}>
                            REGRESAR<i className='material-icons left'>arrow_back</i>
                        </div>
                    </div>
                </div>

            </div>
        </div>)
}
export default Product;