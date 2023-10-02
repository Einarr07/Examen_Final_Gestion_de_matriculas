import React from 'react'
import { Formulario } from '../componets/Formulario'

const Crear = () => {
    return (
        <div>
            <h1 className='font-black text-4xl text-gray-500'>Creacion de materias</h1>
            <hr className='my-4' />
            <p className='mb-8'>Este modulo te permite crear una nueva materia</p>
            <Formulario />
        </div>
    )
}

export default Crear