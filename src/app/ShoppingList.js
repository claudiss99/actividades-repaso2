import { useState } from "react";

let nextId=0;
export default function ShoppingList(){
    
    const[productos, setProductos]=useState([]);
    const[name, setName] = useState('');

    function handleClickAdd(){
        setProductos([
            ...productos,
            {id: nextId++, name:name}
        ])
    }

    return(
        <>
            <input
                value={name}
                onChange={e => setName(e.target.value)}
            />
            <button onClick={handleClickAdd}>Añadir Producto</button>
            
            <ul>
                {productos.map(producto => (
                    <li key= {producto.id}>{producto.name}
                        <button onClick={() => {
                            setProductos(
                                productos.filter(p => p.id !== producto.id)
                            );
                        }}>Eliminar Producto</button>
                    </li>
                ))}

            </ul>
        </>
    );
}