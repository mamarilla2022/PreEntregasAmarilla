import React from 'react';
import ItemList from "./ItemList";
import {products} from "./Components/Mock/ProductMock.js";
import { useEffect } from 'react';

const ItemListContainer = () => {

useEffect(()=> {
    const traerProductos = () => {
        return new Promise ((res,rej) => (
            setTimeout (() => {
                res (products);
            }, 2000);
           
        ) );
    };

        traerProductos()
             .then((res)=>{ 
             console.log(res);

    } )
                 .catch((error)=>{
                    console.log(error);

    } )

} )

return (
    <div className="item-list-container">
        <ItemList/>

    </div>
)
};

export default ItemListContainer;