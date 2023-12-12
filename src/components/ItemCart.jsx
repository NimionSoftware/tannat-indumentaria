import { useContext } from "react";
import { cartContext } from "./Context";
import { styled } from "@mui/material";

const ContainerTable = styled('div')({
    position: 'relative',
    '&::before, &::after': {
        content: '""',
        position: 'absolute',
        width: '100%',
        height: '2px',
        background: 'linear-gradient(to right, rgba(0,185,189,1) 0%, rgba(22,26,255,1) 100%)',
    },
    '&::before': {
        top: '0',
        left: '0',
    },
    '&::after': {
        bottom: '0',
        right: '0',
    },
    marginBottom: '.5rem',
    marginTop: '.5rem',
    height:'10rem',
})

const DeleteItemButton = styled('button')({
    fontWeight:'bold',
    fontSize:'2rem',
    color:'red',
    backgroundColor: 'transparent',
    border:'none',
    cursor:'pointer',
    transition:'.2s ease',
    '&:hover':{
        transform: 'scale(1.15)'
    }
})

const ItemCart = ({item}) => {

    const {deleteItem} = useContext(cartContext);

    return(
        <ContainerTable>
            <table style={{width:'100%'}}>
                <thead>
                    <tr>
                        <th></th>
                        <th>Nombre</th>
                        <th>Talles</th>
                        <th>Precio</th>
                        <th>Cant.</th>
                        <th>Subtotal</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style={{width:'20%'}}><img src={item.imgId} style={{width:'70%'}} alt="Imagen del Producto" /></td>
                        <td>{item.productName}</td>
                        <td>{item.productSizes}</td>
                        <td>${item.productPrice}</td>
                        <td>X{item.qty}</td>
                        <td>
                            ${item.productPrice * item.qty}
                        </td>
                        <td><DeleteItemButton onClick={()=>{deleteItem(item.id)}} title="Eliminar">&times;</DeleteItemButton></td>
                    </tr>
                </tbody>
            </table>
        </ContainerTable>
    )
}

export default ItemCart;