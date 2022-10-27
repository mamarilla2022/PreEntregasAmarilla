import ItemList from "./ItemList";

const Menu = ({opciones}) => {
    return (
        <ul>    
            
            <ItemList opcion="inicio"/>
            <ItemList opcion="contacto"/>
            <ItemList opcion="nosotros"/>
            <ItemList opcion="nuevo"/>
                
            </ul>
    )
}

export default Menu;
