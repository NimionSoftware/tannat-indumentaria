import { useContext } from "react";
import { cartContext } from "./Context";
import { styled } from "@mui/material";

const ContainerTable = styled('div')({
    boxShadow: '0 0 2px black',
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

const Th = styled('th')({
    transition: 'all .2s',
    '@media (max-width: 1000px)': {
        fontSize: '.7rem',
      }
})

const Td = styled('td')({
    transition: 'all .2s',
    '@media (max-width: 1000px)': {
        fontSize: '.8rem',
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
                        <Th>Nombre</Th>
                        <Th>Talles</Th>
                        <Th>Precio</Th>
                        <Th>Cant.</Th>
                        <Th>Subtotal</Th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style={{maxWidth:'7rem', width:'20%'}}><img src={item.imgId} style={{width:'70%'}} alt="Imagen del Producto" /></td>
                        <Td>{item.productName}</Td>
                        <Td>{item.productSizes}</Td>
                        <Td>${item.productPrice}</Td>
                        <Td>X{item.qty}</Td>
                        <Td>
                            ${item.productPrice * item.qty}
                        </Td>
                        <td><DeleteItemButton onClick={()=>{deleteItem(item.id)}} title="Eliminar">&times;</DeleteItemButton></td>
                    </tr>
                </tbody>
            </table>
        </ContainerTable>
    )
}

export default ItemCart;