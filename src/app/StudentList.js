import { useState } from "react";

let nextId = 0;

export default function StudentList(){

    const [name, setName] = useState('');
    const[estudiantes, setEstudiantes] = useState([]);

    return(
        <>
            <h1>Estudiantes</h1>
            <input
                value={name}
                onChange={e => setName(e.target.value)}
            
            />
            <button onClick={() => {
                setEstudiantes([
                    ...estudiantes,
                    {id: nextId++, name:name}
                ]);
            }}>Añadir estudiante</button>
            <ul>
                {estudiantes.map(estudiante =>(
                    <li key={estudiante.id}>{estudiante.name}{('  ')}
                    <button onClick={() => {
                        setEstudiantes(
                            estudiantes.filter(e => e.id!== estudiante.id)
                        );
                    }}
                    >Eliminar estudiante</button>
                    </li>
                ))}
            </ul>
        </>
    );

}