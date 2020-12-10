import './navBar.css'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { actionCategories, actionSearch } from '../../redux/actions'
import 'materialize-css'
import M from 'materialize-css'
import './navBar.css'
const NavBar = () => {
    const dispatch = useDispatch()
    localStorage.getItem('user')
    useEffect(() => {
        const dropdown = document.querySelectorAll('.dropdown-trigger');
        M.Dropdown.init(dropdown);
        const sideNav = document.querySelectorAll('.sidenav-fixed');
        M.Sidenav.init(sideNav);
    }, []);

    dispatch(actionCategories())
    return (
        <div>
            <div class="navbar-fixed">
                <nav className='yellow lighten-1 z-depth-3'>
                    <div class="nav-wrapper">
                        <ul class="left">
                            <li>
                                <a href="#" data-target="menu-side" className='dropdown-trigger'>
                                    <i class="hamburger material-icons hide-on-large-only black-text shadow">menu</i>
                                </a>
                            </li>
                        </ul>
                        <span className='hide-on-med-and-down flow-text left bold black-text shadow'>Mercado GPL</span>
                        <form action="" method="post">
                            <div class="input-field yellow lighten-4">
                                <input id="search" type="search" name="search" onKeyPress={(e) => {
                                    if (e.key === 'Enter') {
                                        e.preventDefault()
                                        dispatch(actionSearch(e.target.value))
                                        window.location.href = '/body/?search=' + e.target.value
                                        return false
                                    }
                                }} />
                                <label class="label-icon" for="search">
                                    <i class=" black-text material-icons">search</i>
                                </label>
                                <i class="material-icons">close</i>
                            </div>
                        </form>
                        <ul class="right hide-on-small-and-down">
                            <li>
                                <a onClick={() => {
                                    window.location.href = '/'
                                }} className='black-text shadow'><i className='material-icons'>home</i></a>
                            </li>
                            <li>
                                <a className='flow-text black-text shadow' onClick={() => {
                                    window.location.href = '/categories'
                                }
                                }>categorias</a>
                            </li>
                        </ul>
                    </div>
                </nav>
                <ul id="menu-side" class="dropdown-content yellow">
                    <li>
                        <a onClick={() => {
                            window.location.href = '/'
                        }} className='black-text shadow'><span>Home</span></a>
                    </li>
                    <li>
                        <a className='black-text shadow' onClick={() => {
                            window.location.href = '/categories'
                        }
                        }><span>Categorias</span></a>
                    </li>
                    {window.location.pathname.includes('/body') ? (
                        <li>
                            <a class="sidenav-trigger" href='#' data-target='nav-mobile'><span className='black-text shadow'>Ordenar</span>
                            </a>
                        </li>) : (<div></div>)}
                </ul>
            </div>
        </div>)
}

export default NavBar