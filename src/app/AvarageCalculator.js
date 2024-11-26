
import { useState } from "react";
let nextId = 0;

export default function AverageCalculator(){
    const[name, setName] = useState('');
    const[calificaciones, setCalificaciones] = useState([]);
    const [promedio, setPromedio] = useState(0);

    return(
        <>
            <h2>Calificaciones</h2>
            <input
                value = {name}
                onChange={e => setName(e.target.value)}
            />
            <button onClick={() => {
                setCalificaciones([
                    ...calificaciones,
                    {id: nextId++, name:parseFloat(name)}
                ]);
            }}>Añade calificacion</button>
            <ul>
                {calificaciones.map(calificacion => (
                    <li key={calificacion.id}>{calificacion.name}
                    
                    </li>
                //{average += calificacion}
                ))}
            </ul>
        </>
    );
}