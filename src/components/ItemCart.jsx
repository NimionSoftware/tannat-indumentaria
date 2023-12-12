import { useContext } from "react";
import { cartContext } from "./Context";

const ItemCart = ({item}) => {

    const {deleteItem} = useContext(cartContext);

    return(
        <div>
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>Nombre</th>
                        <th>Talle</th>
                        <th>Precio</th>
                        <th>Cant.</th>
                        <th>Total</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><img src={item.itemImg} alt="Imagen del Producto" /></td>
                        <td>{item.productName}</td>
                        <td>{item.productSizes}</td>
                        <td>${item.productPrice}</td>
                        <td>
                            <button>-</button>
                            <p>X{item.qty}</p>
                            <button>+</button>
                        </td>
                        <td>
                            ${item.productPrice * item.qty}
                        </td>
                        <td><button onClick={()=>{deleteItem(item.id)}}>Eliminar</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default ItemCart;