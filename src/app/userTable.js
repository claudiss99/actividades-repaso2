import { useState } from "react";

const usuarioIniciales = [
    {
        id:1,
        nombre: "Claudia",
        email: "claudissperez@hotmail.com",
        edad: 25
    }
]

let contadorId = 2;

function User({usuario, onDelete}){
    return(
        <li>
            <p>Nombre: {usuario.nombre}</p>
            <p>Email: {usuario.email}</p>
            <p>Edad: {usuario.edad}</p>
            <button onClick={() => onDelete(usuario.ID)}>Eliminar</button>
        </li>
    )
}


export default function UserTable(){
    const [usuariosEstado, setUsuariosEstado] = useState(usuarioIniciales)
    const [nuevoNombre, setNuevoNombre] = useState('')
    const [nuevoEmail, setNuevoEmail] =useState ('')
    const [nuevaEdad, setNuevaEdad] = useState(0)

    const[mensajeError, setMensajeError]= useState('')


    function gestionarAgregarUsuario(e){
        e.preventDefault();


        if(nuevoNombre === "" || nuevoEmail==="" || nuevaEdad===""){
            setMensajeError("Debes completar todos los campos")
        }else if(nuevoNombre.length>10 || nuevoEmail>20 || nuevaEdad>100){
            setMensajeError("Los campos son muy largos")
        }else{
            setMensajeError("")
            setUsuariosEstado([
                ...usuariosEstado,
                {
                    id: contadorId++,
                    nombre: nuevoNombre,
                    email: nuevoEmail,
                    edad: nuevaEdad
                }
            ])
            setNuevoNombre("")
            setNuevoEmail("")
            setNuevaEdad("")
        }
        
        
    }

    function handleDelete(userId){
        setUsuariosEstado(
            usuariosEstado.filter(
                usuario => usuario.id !== userId
            )
        )
    }

    return(
        <>
            <form onSubmit={gestionarAgregarUsuario}>
                <label>Nombre: <input type="text" value={nuevoNombre} onChange={e => setNuevoNombre(e.target.value)}/></label>
                <label>Email: <input type="email" value={nuevoEmail} onChange={e => setNuevoEmail(e.target.value)}/></label>
                <label>Edad: <input type="number" value={nuevaEdad} onChange={e => setNuevaEdad(e.target.value)}/></label>
                <p>{mensajeError}</p>
                <input type="submit" value="Crear"></input>
            </form>
            <h3>Usuarios registrados:</h3>
            <ul>
                {usuariosEstado.map(
                    usuario => <User usuario={usuario} key={usuario.id}
                    onDelete={handleDelete} />
                    )}
            </ul>
        </>
    );
}