import React, { useEffect } from 'react'
import 'materialize-css'
import M from 'materialize-css'
import './contact.css'

const Contact = () => {
    useEffect(() => {
        const elems = document.querySelectorAll('.parallax');
        M.Parallax.init(elems);
        const col = document.querySelectorAll('.collapsible');
        M.Collapsible.init(col);
    })
    return (
        <div>
            <div class="parallax-container">
                <div class="parallax">
                    <img src="https://i.ytimg.com/vi/xSqXTGq-4uk/maxresdefault.jpg" />
                </div>
            </div>
            <div className='container container-contact'>
                <h3 className='white-text'>Juan Bautista Abal</h3>
                <h4></h4>
                <h5 className='white-text'>Rosario, Santa Fe, Argentina</h5>
                <h6 className='white-text'>
                </h6>
                <div className='lista-botones-contacto'>
                    <a target="_blank" className='btn btn-contact transparent' href="https://api.whatsapp.com/message/GKYKXJSSPFIMH1">
                        Whatsapp:
                    <i className='material-icons white-text right'>insert_link</i>
                    </a>
                    <a target="_blank" className='btn btn-contact transparent' href="https://www.linkedin.com/in/%F0%9F%87%A6%F0%9F%87%B7-juan-bautista-abal-3618a5b5/">
                        Linkedin:
                    <i className='material-icons white-text right'>insert_link</i>
                    </a>
                    <a target="_blank" className='btn transparent btn-contact' href="https://t.me/JuanBautistaAbal">
                        Telegram:
                        <i className='material-icons white-text right'>insert_link</i>
                    </a>
                </div>
            </div>
            <div class="section white">
                <div className='container'>
                    <div className='row'>
                        <div className='col s12 m6 offset-m3'>
                            <h1>Sobre mi</h1>
                            <p className='flow-text'>No hay nada mas poderoso que una buena historia.<br></br>Tenia una para contarte, pero no la encuentro por ningun lado. Mil disculpas.<br></br><br></br><br></br>El humor mejora la calidad de la existencia.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="parallax-container">
                <div class="parallax">
                    <img src="https://cdn.wallpapersafari.com/15/3/dUKEyg.jpg" />
                </div>
            </div>
            <div class="section white">
                <div className='container'>
                    <div className='row'>
                        <div className='col s12 m6 offset-m3'>
                            <h2>Este proyecto fue desarrollado en 50 horas.</h2>
                            <div className=''>
                                <div className='jsx flow-text'>JSX 62.24%</div>
                                <div className='js flow-text black-text'>JavaScript 12.06%</div>
                                <div className='css flow-text black-text'>CSS 11.98%</div>
                                <div className='json flow-text black-text'>JSON 10.13%</div>
                                <div className='html flow-text black-text'>HTML 3.51%</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="parallax-container">
                <div class="parallax">
                    <img src="https://cdn.wallpapersafari.com/15/3/dUKEyg.jpg" />
                </div>
            </div>
            <div class="section white">
                <div className='container'>
                    <div className='row'>
                        <div className='col s12 m6 offset-m3'>
                            <h1>Mis skills</h1>
                            <div>
                                <h4>resolución de problemas</h4>
                                <h6 className='flow-text'>Escribir código consiste en detectar y resolver problemas. La programación siempre tiene el objetivo de aportar soluciones a necesidades del cliente o del usuario.La habilidad de problem solving se aplica en todas las fases del código: desde la concepción, donde es esencial encontrar el planteamiento adecuado para abordarlo, hasta la revisión del mismo, para detectar fallos e incorporar las soluciones oportunas</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="parallax-container">
                <div class="parallax">
                    <img src="https://www.newstatesman.com/sites/default/files/styles/cropped_article_image/public/blogs_2014/05/6333984637_7d08596f9e_b.jpg?itok=Vg2D5Jle" />
                </div>
            </div>
            <div class="section white">
                <div className='container'>
                    <div className='row'>
                        <div className='col s12 m6 offset-m3'>
                            <div>
                                <h4 className='flow-text'>Curiosidad</h4>
                                <h6 className='flow-text'>La curiosidad nos hace investigar y nos dirige a la mejora continua. No por casualidad el sector del desarrollo de software es de los más fértiles en foros y plataformas Q&A como Stackoverflow o Reddit.</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="parallax-container">
                <div class="parallax">
                    <img src="https://www.grandespymes.com.ar/wp-content/uploads/2018/10/Productividad.-Autogesti%C3%B3n-o-el-arte-de-gestionarse-a-uno-mismo..jpg" />
                </div>
            </div>
            <div class="section white">
                <div className='container'>
                    <div className='row'>
                        <div className='col s12 m6 offset-m3'>
                            <div>
                                <h4 className='flow-text'>Autogestión</h4>
                                <h6 className='flow-text'>Saber manejar el volumen de trabajo y gestionar la presión del time-to-market para reducir el estrés son habilidades fundamentales para el desarrollador de software.<br></br>
                                Para poder gestionar las propias emociones, lo primero es conocerse a uno mismo. Lo que queremos y lo que no queremos, lo que nos motiva y lo que nos frustra, lo que nos inspira y lo que nos enfada… saberlo es vital para tener el control de nuestra autoestima.<br></br>
                                La autogestión se refiere también al manejo de nuestro propio tiempo y de cómo realizar nuestras tareas de la manera más eficiente posible, especialmente si en nuestro puesto disfrutamos de flexibilidad horaria o teletrabajo.
                                </h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="parallax-container">
                <div class="parallax">
                    <img src="https://miro.medium.com/max/2732/1*oo4XShWHTNhk34_8PUr8EQ.jpeg" />
                </div>
            </div>
            <div class="section white">
                <div className='white black-text '>
                    <div className='container'>
                        <div className='row'>
                            <div className='col s12 m6 offset-m3'>
                                <h4>Comunicación</h4>
                                <h6 className='flow-text'>Tanto oralmente como por escrito, la necesidad de comunicarse correctamente es transversal a casi todas las profesiones. La comunicación abierta, empática y funcional facilita el trabajo en equipo.<br></br>En el caso de los programadores, desarrolladores y otros perfiles IT es muy valioso saber articular ideas complejas de manera diferente dependiendo del interlocutor: tanto si es un compañero técnico como si es un perfil no técnico.<br></br>En este sentido el método de depuración del <a target='_blank' href='https://es.wikipedia.org/wiki/M%C3%A9todo_de_depuraci%C3%B3n_del_patito_de_goma'>patito de goma</a> es una buena manera de practicar la comunicación a la vez que volvemos al primer punto: la resolución de problemas.</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="parallax-container">
                <div class="parallax">
                    <img src="https://i.ytimg.com/vi/xSqXTGq-4uk/maxresdefault.jpg" />
                </div>
                <div classname='col s3 white'>
                    <a href='/' className='btn volver'>volver al menú principal</a>
                </div>
            </div>

            <div className='section white'>
                <div className='container'>
                    <div className='row'>

                    </div>
                </div>
            </div>
        </div>)
}
export default Contact;
