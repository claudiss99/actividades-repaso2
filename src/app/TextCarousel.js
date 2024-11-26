import { useState } from "react";

export default function TextCarousel({frases}){

    const[indice, setIndice] = useState(0);

    function siguienteFrase(){
        if(indice < frases.length-1){
            setIndice(indice+1)
        }else if(indice === frases.length-1){
            setIndice(0)
        }
    }

    function fraseAnterior(){
        if(indice > 0){
            setIndice(indice-1)
        }else if (indice === 0){
            setIndice(frases.length-1)
        }
    }

    let fraseActual = frases[indice];

    return(
        <>
            <p>
                {fraseActual.frase}
                <button onClick={siguienteFrase}>Siguiente</button>
                <button onClick={fraseAnterior}>Atras</button>
            </p>
        </>
    );
}