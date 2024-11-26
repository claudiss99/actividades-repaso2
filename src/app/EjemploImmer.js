import { useImmer } from "use-immer";

const tareasIniciales=[
    {id:1, descripcion:"tarea1", completada:false}
];

function Tarea({tarea, onDelete, onClickCheck}){
    return(
        <div>
            <p style={{display:"inline"}}>{tarea.descripcion}</p>
            <button onClick={() => onDelete(tarea.id)}>Eliminar</button>
            <input type="checkbox" checked={tarea.completada} onChange={() => onClickCheck(tarea.id)}/>
        </div>
    );
}

export default function EjemploImmer(){

    const[tareasEstado, updateTareasEstado]=useImmer(tareasIniciales)

    function handleDelete(idTask){
        updateTareasEstado(draft => draft.filter(tarea => tarea.id !== idTask))
    }

    function handleClickCheck(idTask){
        updateTareasEstado(draft => 
        {
            const tarea= draft.find(tarea => tarea.id == idTask)
            tarea.completada = !tarea.completada
        }
        )
    }

    return(
        <>
            <h4>Tareas</h4>
            {tareasEstado.map( tarea => <Tarea key={tarea.id} tarea={tarea}
            onDelete={handleDelete} onClickCheck={handleClickCheck}/>)}
        </>
    );
}