import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { actionCategories, actionFilterResult, actionSearch, actionSetCategory, actionSetLocalResult } from '../../../redux/actions';
import ProductCard from './productCard'
import qs from 'query-string'
import Product from './product';
import 'materialize-css'
import M from 'materialize-css'
import './body.css'

const Body = () => {
    const dispatch = useDispatch()
    //////////////////////// SELECTORS
    const result = useSelector(store => store.reducer.searchResult)
    const resultFiltered = useSelector(store => store.reducer.searchResultFiltered)
    const loading = useSelector(store => store.reducer.loading)

    //////////////////////// HOOKS
    const [pageLimits, setPageLimits] = useState({ min: 0, max: 31 });
    const [scroll, setScroll] = useState(0)

    //////////////////////// OTROS
    const search = qs.parse(window.location.search).search;
    const category = qs.parse(window.location.search).category;
    useEffect(() => {
        LoadProducts()
        dispatch(actionCategories())
        const sideNav = document.querySelectorAll('.sidenav-fixed')
        M.Sidenav.init(sideNav)
    }, [])
    window.scrollTo({ top: scroll, behavior: 'smooth' })

    //////////////////////// FUNCIONES
    const LoadProducts = () => {
        if (search) {
            dispatch(actionSearch(search))
        }
        if (category) {
            dispatch(actionSetCategory(category))
        }
    }
    const sort = (term) => {
        switch (term) {
            case 'nameAsc':
                dispatch(actionSetLocalResult([]))
                dispatch(actionSetLocalResult(result.sort((a, b) => {
                    return a.title.localeCompare(b.title)
                })))
                return ""
            case 'nameDesc':
                dispatch(actionSetLocalResult([]))
                dispatch(actionSetLocalResult(result.sort((a, b) => {
                    return b.title.localeCompare(a.title)
                })))
                return ""
            case 'priceAsc':
                dispatch(actionSetLocalResult([]))
                dispatch(actionSetLocalResult(result.sort((a, b) => {
                    return a.price - b.price
                })))
                return ""
            case 'pricedesc':
                dispatch(actionSetLocalResult([]))
                dispatch(actionSetLocalResult(result.sort((a, b) => {
                    return b.price - a.price
                })))
                return ""
            case 'nuevo':
                dispatch(actionFilterResult([]))
                dispatch(actionFilterResult(result.filter(product => product.condition === "nuevo")))
                return ""
            case 'usado':
                dispatch(actionFilterResult([]))
                dispatch(actionFilterResult(result.filter(product => product.condition === "usado")))
                return ""
            default:
                return undefined
        }
    }
    /////////////////////// FIN FUNCIONES

    return (<div>
        <Product scroll={scroll} style={{ display: 'none' }}></Product>
        <div id='nav-mobile' className='sidenav sidenav-fixed'>
            <ul>
                <li>
                    <a className='flow-text black-text bold'>Mercado GPL</a>
                </li>
            </ul>
            <div class="collection">
                <a class="collection-item waves-effect waves-light left black-text" href='#' data-target='nav-mobile' onClick={() => {
                    sort('nameAsc')
                    setScroll(0)
                }}><i className='material-icons left'>sort_by_alpha</i>Nombre ascendente</a>
                <a class="collection-item waves-effect waves-light left black-text" onClick={() => {
                    sort('nameDesc')
                    setScroll(0)
                }}><i className='material-icons left'>sort_by_alpha</i>Nombre descendente</a>
                <a className='collection-item waves-effect waves-light left black-text' onClick={() => {
                    sort('priceAsc')
                    setScroll(0)
                }}><i className='material-icons left'>attach_money</i>Precio ascendente</a>
                <a className='collection-item waves-effect waves-light left black-text' onClick={() => {
                    sort('pricedesc')
                    setScroll(0)
                }}><i className='material-icons left'>attach_money</i>Precio descendente</a>
                <a className='collection-item waves-effect waves-light left black-text' onClick={() => {
                    sort('nuevo')
                    setScroll(0)
                }}><i className='material-icons left'>fiber_new</i>Filtrar nuevo</a>
                <a className='collection-item waves-effect waves-light left black-text' onClick={() => {
                    sort('usado')
                    setScroll(0)
                }}><i className='material-icons left'>new_releases</i>Filtrar usado</a>
            </div>
        </div>
        {
            <div className='container' id='container'>
                <div className='row'>
                    <div className='col s12' style={{ display: loading }}>
                        <div class="progress">
                            <div class="indeterminate yellow darken-4"></div>
                        </div>
                    </div>

                    {(resultFiltered.length === 0) ? (<div></div>
                    ) : (
                            <div className='col s12 m10 offset-m2 '>
                                {
                                    resultFiltered.map((product, index) => {
                                        if (index < pageLimits.max && index > pageLimits.min) {
                                            return <ProductCard setScroll={setScroll} product={product} />
                                        }
                                    })
                                }

                                <div className='col s12'>
                                    <div className='col s6 m4 offset-m1 xl4 offset-xl1'>
                                        {(pageLimits.min >= 1) ? (<div id='menorque' className='btn-floating scale-transition waves-effect waves-light' onClick={() => {
                                            window.scrollTo({ top: 0, behavior: 'smooth' })
                                            setPageLimits({ min: pageLimits.min - 30, max: pageLimits.max - 30 })
                                        }}>
                                            <i className='material-icons black-text btn-floatinghov'>arrow_back</i>
                                        </div>) : (<a className='btn-floating disabled z-depth-3' waves-effect waves-light><i className='material-icons black-text'>arrow_back</i></a>)}
                                    </div>
                                    <div className='col s6 m4 offset-m1 xl4 offset-xl1 scale-transition'>
                                        {(pageLimits.max < resultFiltered.length) ? (<div id='scale-demo' className='btn-floating scale-transition waves-effect waves-light' onClick={() => {
                                            window.scrollTo({ top: 0, behavior: 'smooth' })
                                            setPageLimits({ min: pageLimits.min + 30, max: pageLimits.max + 30 })
                                        }}>
                                            <i className='material-icons black-text btn-floatinghov'>arrow_forward</i>
                                        </div>) : (
                                                <a className='btn-floating disabled z-depth-3 waves-effect waves-light'><i className='material-icons black-text'>arrow_forward</i></a>)}
                                    </div>
                                </div>
                            </div>)}

                </div>
            </div>
        }
    </div>)
}
export default Body;
