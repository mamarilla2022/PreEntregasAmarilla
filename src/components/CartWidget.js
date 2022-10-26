import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faCartShopping } from '@fortawesome/free-solid-svg-icons';

function CartWidget(){
 return(
        <div> 
          <h2>Brand</h2>
            <ul>
                    <li>opcion1</li>
                    <li>opcion2</li>

             </ul>
             <FontAwesomeIcon icon={faCartShopping} />  
                   
   
        </div>
     )
}

export default CartWidget;