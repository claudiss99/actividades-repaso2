import { useState } from "react";

export default function LimitedCounter(){
    const [count, setCount]= useState(0);
    const [limite, setLimite] = useState(0);

    function handleClickIncrement(){
        if (limite === 0){
            alert('Introduce un limite, porfavor');
        }else{
            if(count !== limite){
                setCount(count+1);
            }
        }
       
    }


    return(
        <>
            <input
                value={limite}
                onChange={e => setLimite(e.target.value)}></input>
            <h2>Contador: {count}</h2>
            <button onClick={handleClickIncrement}>Incrementar</button>
        </>

    );
}