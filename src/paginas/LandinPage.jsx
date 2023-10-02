import logoDarkMode from '../assets/dark.png'
import logoFacebook from '../assets/facebook.png'
import logoGithub from '../assets/github.png'
import logoLinkedind from '../assets/linkedin.png'
import logoRocket from '../assets/rocket.webp'
import logoCode from '../assets/code.png'
import logoConsulting from '../assets/consulting.png'
import logoDesign from '../assets/design.png'
import logoWeb1 from '../assets/web1.png'
import logoWeb2 from '../assets/web2.png'
import logoWeb3 from '../assets/web3.png'
import logoWeb4 from '../assets/web4.png'
import logoWeb5 from '../assets/web5.png'
import logoWeb6 from '../assets/web6.png'
import { useState } from 'react'
import {Link} from 'react-router-dom'


export const LandinPage = () => {
    const [darkMode, setdarkMode] = useState(false)
    return (
        <div className={darkMode ? "dark" :""}>

            <main className='bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-800'>
                <section>
                    <nav className='p-10 mb-12 flex justify-between'>
                        <h1 className='text-2xl font-bold dark:text-white'>MATRICULAS EPN</h1>
                        <ul className='flex items-center'>
                            <li><Link to="/login" className='bg-gray-600 text-slate-400 px-6 py-2 rounded-full ml-8 hover:bg-gray-900 hover:text-white' href="#">Iniciar sesión</Link></li>
                        </ul>
                    </nav>

                    <div className='text-center'>
                        <h2 className='text-5xl py-2 text-teal-600 font-medium md:text-6xl'>Proyecto EPN</h2>
                        <h3 className='text-2xl py-2 md:text-3xl dark:text-white'>Bienvenidos</h3>
                        <p className='text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto dark:text-white'>Nuestro compromiso como gestion de matriculas es birndar la máxima expresion en profecionalismo para que su matricula sea exitosa.</p>
                    </div>
                    
                    <div className='relative mx-auto    w-80 h-80 mt-12 overflow-hidden md:w-96 md:h-96 dark:border-4 border-teal-300'>
                        <img src="https://www.learnchile.cl/wp-content/uploads/2020/05/iStock-1133557365-1174x694.jpg" alt="universitarios" />
                    </div>
                </section>

                <section>

                    <div className='md:flex md:flex-wrap lg:flex lg:justify-center gap-10'>
                        <div className='text-center shadow-2xl p-10 rounded-xl my-10 md:w-72 lg:w-96 dark:bg-slate-100'>
                            <img className='mx-auto' src="https://crearpaginaweb.org/wp-content/uploads/2013/03/ok.jpg" alt="" />
                            <h3 className='text-lg font-medium pt-8 pb-2'>Lo que ofrecemos</h3>
                            <p className='py-4 text-teal-600'>Brindar un buen servicio</p>
                            <p className='py-4 text-teal-600'>Un buen soporte a la pagina</p>
                            <p className='py-4 text-teal-600'>Asesoramiento sobre las matriculas</p>
                        </div>
                        <div className='text-center shadow-2xl p-10 rounded-xl my-10 md:w-72 lg:w-96 dark:bg-slate-300'>
                            <img className='mx-auto' src={logoConsulting} alt="" />
                            <h3 className='text-lg font-medium pt-8 pb-2'>Contactos</h3>
                            <p className='py-4 text-teal-600'>Si cuentas con alguna inquietud respecto a nuestro sistema puedes contactarnos vía celular y correo electronico</p>
                            <p className='text-gray-800 py-1'>(+62) 8939123</p>
                            <p className='text-gray-800 py-1'>matriculas@epn.edu.ec</p>
                        </div>
                        
                    </div>
                </section>

            </main>

        </div>
    )
}
