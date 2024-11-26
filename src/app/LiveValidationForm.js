import { useState } from "react";


export default function LiveValidationForm (){

    const[nuevoNombre, setNuevoNombre] = useState("")
    const[nuevoEmail, setNuevoEmail] = useState("")
    const[nuevoContri, setNuevoContri] = useState("")

    const[nombreCorrecto, setNombreCorrecto] = useState(false)
    const[mensajeErrorNombre, setMensajeErrorNombre] = useState("")

    function validaFormulario(e){
        e.preventDefault();
        if(nombreCorrecto){
            alert("Añadido")
        }else{
            alert("Revisa los campos")
        }
    }
    function validaNombre(e){
        const posibleNombre = e.target.value
        

        if(posibleNombre === ""){
            setMensajeErrorNombre("Debes escribir algo")
            setNombreCorrecto(false)
        }else if(posibleNombre.length >10){
            setMensajeErrorNombre("Has escrito demasiado")
            setNombreCorrecto(false)
        }else{
            setNombreCorrecto(true)
            setMensajeErrorNombre("")
        }
        setNuevoNombre(posibleNombre)
    }

    return(
        <>
            <form onSubmit={validaFormulario}>
                <label>Nombre: <input type="text" value={nuevoNombre} onChange={validaNombre} ></input></label>
                <p>{mensajeErrorNombre}</p>
                <label>Email: <input type="text" value={nuevoEmail} onChange={e=> setNuevoEmail(e.target.value)}></input></label>
                <label>Contraseña: <input type="password" value={nuevoContri} onChange={e=> setNuevoContri(e.target.value)}></input></label>
                <input type="submit" />
            </form>
        </>
    );
}