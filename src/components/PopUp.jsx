import { useContext, useEffect } from "react";
import { cartContext } from "./Context";
import { styled } from "@mui/system";

const ContainerPopUp = styled('div')({
    display:'flex',
    flexDirection:'column',
    margin:'auto',
    minWidth:'25rem',
    width:'40%',
    height:'35rem',
    backgroundColor: '#fff',
    borderRadius:'.1rem'
})

const PopUp = ({setPopUp}) => {

    const {cart, setOpenCart, itemW, setItemW, formData} = useContext(cartContext);

    useEffect(() => {
        if (cart.length > 0) {
            setItemW(cart.map((item, index) => {
                let newIndex = index + 1
                return (
                    `${newIndex}%2D%20%2A${item.productName}%2C%20T%3A%20${item.productSizes}${( item.color ? `%2C%20Color%3A%20${item.color}` : '')}%2C%20%24${item.productPrice}%2C%20X${item.qty}%2A%0A-%0A`
                );
            }))
        }
      }, [cart]);

      const onSubmit = (data) => {
        window.open(`https://wa.me/5493413869246?text=ID:%20${data.nombre}%2C%20Tel:%20${data.numero}%2C%20Dir:%20${data.direccion}%2C%20Pago%20con:%20${data.paymentMethod}%2E%0A-%0A${itemW}`, '_blank');
      };

    return (
        <>
         <ContainerPopUp>
            <p>Gracias por su compra!</p>
            <button onClick={() => {
                setPopUp(false)
                setOpenCart(false)
                }}>
                    Cerrar
            </button>
            <button onClick={() => onSubmit(formData)}>Volver a enviar pedido</button>
         </ContainerPopUp>
        </>
    )
}

export default PopUp;