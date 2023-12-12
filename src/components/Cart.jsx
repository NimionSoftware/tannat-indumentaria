import { useContext } from "react";
import { cartContext } from "./Context";
import ItemCart from "./ItemCart"


const Cart = () => {

    const {total, emptyCart, get} = useContext(cartContext);


    return(
        <>
            {get.length > 0
                ?
                (
                    get.map((item, index) => {(
                        <ItemCart item={item} key={index} />
                        )})
                )
                :
                (
                    'El carrito esta vacío, comienza a cargarlo con productos!'
                )
            }
            {get.length > 0 && (
                <>
                    <p>Total: US$ {total()}</p>
                    <button onClick={()=>{emptyCart()}}>Vaciar Carrito</button>
                </>
                )}
        </>
    )
}

export default Cart;