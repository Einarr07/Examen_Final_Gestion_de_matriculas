import { useContext, useState } from "react";
import AuthContext from "../../context/AuthProvider";
import Mensaje from "../Alertas/Mensaje";

const FormularioPerfil = () => {
    const { auth, actualizarPerfil } = useContext(AuthContext);
    const [mensaje, setMensaje] = useState({});
    const [form, setform] = useState({
        id: auth._id,
        nombre: auth.nombre || "",
        codigo: auth.codigo || "",
        credito: auth.credito || "",
        descripcion: auth.descripcion || "",
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (Object.values(form).includes("")) {
            setMensaje({ respuesta: "Todos los campos deben ser ingresados", tipo: false });
            setTimeout(() => {
                setMensaje({});
            }, 3000);
            return;
        }
        const resultado = await actualizarPerfil(form);
        setMensaje(resultado);

        // Recargar la página después de 3 segundos
        setTimeout(() => {
            window.location.reload();
        }, 3000);
    };

    const handleChange = (e) => {
        // Validar la longitud máxima para los campos de dirección, correo, nombre y apellido
        const maxLengths = {
            nombre: 20,
            codigo: 20,
            credito: 20,
            descripcion: 20
        };
        
        if (e.target.name === "codigo" || e.target.name === "credito" || e.target.name === "nombre" || e.target.name === "descripcion") {
            const trimmedValue = e.target.value.slice(0, maxLengths[e.target.name]);
            setform({
                ...form,
                [e.target.name]: trimmedValue
            });
        } else {
            setform({
                ...form,
                [e.target.name]: e.target.value
            });
        }
    }
    
    

    return (
        <form onSubmit={handleSubmit}>
            {Object.keys(mensaje).length > 0 && (
                <Mensaje tipo={mensaje.tipo}>{mensaje.respuesta}</Mensaje>
            )}

            <div>
                <label
                    htmlFor='nombre'
                    className='text-gray-700 uppercase font-bold text-sm'>Nombre de la materia: </label>
                <input
                    id='nombre'
                    type="text"
                    className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md mb-5'
                    placeholder='nombre'
                    name='nombre'
                    value={form.nombre}
                    onChange={handleChange}
                />
            </div>

            <div>
                <label
                    htmlFor='codigo'
                    className='text-gray-700 uppercase font-bold text-sm'>Código materia: </label>
                <input
                    id='codigo'
                    type="text"
                    className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md mb-5'
                    placeholder='codigo'
                    name='codigo'
                    value={form.codigo}
                    onChange={handleChange}
                />
            </div>

            <div>
                <label
                    htmlFor='credito'
                    className='text-gray-700 uppercase font-bold text-sm'>Creditos de la materia: </label>
                <input
                    id='credito'
                    type="text"
                    className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md mb-5'
                    placeholder='credito'
                    name='credito'
                    value={form.credito}
                    onChange={handleChange}
                />
            </div>

            <div>
                <label
                    htmlFor='descripcion'
                    className='text-gray-700 uppercase font-bold text-sm'>Descrión de la materia: </label>
                <input
                    id='descripcion'
                    type="text"
                    className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md mb-5'
                    placeholder='descripcion'
                    name='descripcion'
                    value={form.descripcion}
                    onChange={handleChange}
                />
            </div>

            <input
                type="submit"
                className='bg-gray-800 w-full p-3 
        text-slate-300 uppercase font-bold rounded-lg 
        hover:bg-gray-600 cursor-pointer transition-all'
                value='Actualizar' />

        </form>
    )
}

export default FormularioPerfil