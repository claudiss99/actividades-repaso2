import { useState } from 'react';
import { sculptureList } from './data.js';

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  function handleNextClick() {
      if(index == sculptureList.length-1){
        setIndex(0);
      }else{
        setIndex(index + 1);
      }  
  }

  function handlePreviousClick() {
    if(index == 0){
      setIndex(sculptureList.length -1);
    }else{
      setIndex(index - 1);
    }  
}


  function handleMoreClick() {
    setShowMore(!showMore);
  }

  let sculpture = sculptureList[index];
  return (
    <>
      <button onClick={handlePreviousClick}>
        Anterior
      </button>
      <button onClick={handleNextClick}>
        Siguiente
      </button>
      
      <h2>
        <i>{sculpture.name} </i> 
        por {sculpture.artist}
      </h2>
      <h3>  
        ({index + 1} de {sculptureList.length})
      </h3>
      <button onClick={handleMoreClick}>
        {showMore ? 'Ocultar' : 'Mostrar'} detalles
      </button>
      {showMore && <p>{sculpture.description}</p>}
      <img 
        src={sculpture.url} 
        alt={sculpture.alt}
      />
    </>
  );
}