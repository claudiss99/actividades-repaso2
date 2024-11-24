import { useState } from "react";

export default function SurveySimulator(){
    const [countSi, setCountSi] = useState(0);
    const [countNo, setCountNo] = useState(0);
    const [countTv, setCountTv] = useState(0);

    function handleClickYes(){
        setCountSi(countSi+1);
    }

    function handleClickNo(){
        setCountNo(countNo+1);
    }

    function handleClickTv(){
        setCountTv(countTv+1);
    }
    return(
        <>
            <h2>Contador Sí {countSi}</h2>
            <button onClick={handleClickYes}>Boton Si</button>
            <h2>Contador No {countNo}</h2>
            <button onClick={handleClickNo}>Boton No</button>
            <h2>Contador Tal vez {countTv}</h2>
            <button onClick={handleClickTv}>Boton Tal vez</button>
        </>
    );
}