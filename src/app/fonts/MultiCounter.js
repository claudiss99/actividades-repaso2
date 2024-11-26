
export default function MultiCounter(){
    const[contadores, setContadores] = ([])

    function agregarContador(){
        setContadores([
            ...contadores, 0
        ])
    }

    function Contador({count, onIncrementar}){
        <>
            <p>{count}</p>
            <button onClick={() => onIncrementar(indice)}>Incrementar</button>
        </>
    }

    function handleIncrementar(indice){
        setContadores(contadores.map(
            (contador, index) => {
                if(index === indice){
                    return contador+1
                }else{
                    return contador
                }
            }
        ))
    }

    return(
        <>
        <button onClick={agregarContador}>Agregar Contador</button>
        {contadores.map((contador, index) => 
            <Contador key={index} count={contador} onIncrementar={handleIncrementar} indice={index}/>
        )}
        </>

    );
}