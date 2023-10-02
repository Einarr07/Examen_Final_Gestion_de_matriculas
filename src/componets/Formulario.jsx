import { useContext, useState } from "react";
import { useNavigate } from 'react-router-dom';
import AuthContext from "../context/AuthProvider";
import axios from 'axios';
import Mensaje from "./Alertas/Mensaje";
import { useForm, Controller } from "react-hook-form";

export const Formulario = ({ paciente }) => {
    const { auth } = useContext(AuthContext);
    const navigate = useNavigate();
    const [mensaje, setMensaje] = useState({});

    // Configuración de React Hook Form
    const { control, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        try {
            if (paciente?._id) {
                const token = localStorage.getItem('token');
                const url = `${import.meta.env.VITE_BACKEND_URL}api/materias/crear/${paciente?._id}`;
                const options = {
                    headers: {
                        method: 'PUT',
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`
                    }
                };
                await axios.put(url, data, options);
                navigate('/dashboard/listar');
            } else {
                const token = localStorage.getItem('token');
                data.id = auth._id;
                const url = `${import.meta.env.VITE_BACKEND_URL}api/materias/crear`;
                const options = {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`
                    }
                };
                await axios.post(url, data, options);
                navigate('/dashboard/listar');
            }
        } catch (error) {
            setMensaje({ respuesta: error.response.data.msg, tipo: false });
            setTimeout(() => {
                setMensaje({});
            }, 3000);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {Object.keys(mensaje).length > 0 && <Mensaje tipo={mensaje.tipo}>{mensaje.respuesta}</Mensaje>}

            <div>
                <label
                    htmlFor='nombre:'
                    className='text-gray-700 uppercase font-bold text-sm'>Nombre de la materia: </label>
                <Controller
                    name='nombre'
                    control={control}
                    defaultValue={paciente?.nombre ?? ""}
                    rules={{
                        required: 'Este campo es requerido',
                        minLength: {
                            value: 3, // Valor mínimo de letras
                            message: 'Mínimo 3 letras son requeridas'
                        },
                        maxLength: {
                            value: 30, // Valor máximo de letras
                            message: 'Máximo 30 letras son permitidas'
                        },
                        pattern: {
                            value: /^[A-Za-z]+$/,
                            message: 'Ingrese solo letras sin espacios ni caracteres especiales'
                        }
                    }}
                    render={({ field }) => (
                        <input
                            id='nombre'
                            type="text"
                            className={`border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md mb-5 ${errors.nombre ? 'border-red-500' : ''}`}
                            placeholder='nombre de la mascota'
                            {...field}
                        />
                    )}
                />
                {errors.nombre && <p className='text-red-500 text-sm'>{errors.nombre.message}</p>}
            </div>

            <div>
                <label
                    htmlFor='codigo:'
                    className='text-gray-700 uppercase font-bold text-sm'>Código de la materia: </label>
                <Controller
                    name='codigo'
                    control={control}
                    defaultValue={paciente?.codigo ?? ""}
                    rules={{
                        required: 'Este campo es requerido',
                        minLength: {
                            value: 3, // Valor mínimo de letras
                            message: 'Mínimo 3 letras son requeridas'
                        },
                        maxLength: {
                            value: 30, // Valor máximo de letras
                            message: 'Máximo 30 letras son permitidas'
                        },
                        pattern: {
                            value: /^[A-Za-z]+$/,
                            message: 'Ingrese solo letras sin espacios ni caracteres especiales'
                        }
                    }}
                    render={({ field }) => (
                        <input
                            id='codigo'
                            type="text"
                            className={`border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md mb-5 ${errors.codigo ? 'border-red-500' : ''}`}
                            placeholder='codigo de la materia'
                            {...field}
                        />
                    )}
                />
                {errors.nombre && <p className='text-red-500 text-sm'>{errors.codigo.message}</p>}
            </div>

            <div>
                <label
                    htmlFor='creditos:'
                    className='text-gray-700 uppercase font-bold text-sm'>Creditos para la materia: </label>
                <Controller
                    name='creditos'
                    control={control}
                    defaultValue={paciente?.creditos ?? ""}
                    rules={{
                        required: 'Este campo es requerido',
                        minLength: {
                            value: 3, // Valor mínimo de letras
                            message: 'Mínimo 3 letras son requeridas'
                        },
                        maxLength: {
                            value: 30, // Valor máximo de letras
                            message: 'Máximo 30 letras son permitidas'
                        },
                        pattern: {
                            value: /^[A-Za-z]+$/,
                            message: 'Ingrese solo letras sin espacios ni caracteres especiales'
                        }
                    }}
                    render={({ field }) => (
                        <input
                            id='creditos'
                            type="text"
                            className={`border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md mb-5 ${errors.creditos ? 'border-red-500' : ''}`}
                            placeholder='codigo de la materia'
                            {...field}
                        />
                    )}
                />
                {errors.nombre && <p className='text-red-500 text-sm'>{errors.creditos.message}</p>}
            </div>

            <div>
                <label
                    htmlFor='descripcion:'
                    className='text-gray-700 uppercase font-bold text-sm'>Descricion de la materia: </label>
                <Controller
                    name='descripcion'
                    control={control}
                    defaultValue={paciente?.descripcion ?? ""}
                    rules={{
                        required: 'Este campo es requerido',
                        maxLength: {
                            value: 20, // Máximo 20 caracteres
                            message: 'Máximo 20 caracteres son permitidos'
                        }
                    }}
                    render={({ field }) => (
                        <textarea
                            id='descripcion'
                            className={`border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md mb-5 ${errors.descripcion ? 'border-red-500' : ''}`}
                            placeholder='Ingrese la descripcion de la materia'
                            {...field}
                        />
                    )}
                />
                {errors.sintomas && <p className='text-red-500 text-sm'>{errors.descripcion.message}</p>}
            </div>

            <input
                type="submit"
                className='bg-gray-600 w-full p-3 
                    text-slate-300 uppercase font-bold rounded-lg 
                    hover:bg-gray-900 cursor-pointer transition-all'
                value={paciente?._id ? 'Actualizar materia' : 'Registrar materia'} />

        </form>
    )
}