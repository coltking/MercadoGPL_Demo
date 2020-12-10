import React from 'react'
import './home.css'

const Home = () => {

    return (<div>
        <div className='texto'>
            <br></br>
            <h1 className='welcome'>Mercado GPL</h1>
            <div className='sub-welcome'>Busca un producto o haz click en categorias para iniciar.</div>
        </div>
        <a href='/contact' className='black-text footer btn'>Desarrollado por Juan Bautista Abal</a>
    </div>)

}
export default Home;
