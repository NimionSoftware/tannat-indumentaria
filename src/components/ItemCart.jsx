import { useContext, useState } from "react";
import { cartContext } from "./Context";
import { styled } from "@mui/material";
import InputOption from "./Shared/InputOption";
import { useEffect } from "react";

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
    width:'20%',
    transition: 'all .2s',
    '@media (max-width: 1000px)': {
        fontSize: '.7rem',
      }
})

const Td = styled('td')({
    width:'20%',
    transition: 'all .2s',
    '@media (max-width: 1000px)': {
        fontSize: '.8rem',
      }
})

const ItemCart = ({item}) => {

    const { deleteItem, setProductSizes } = useContext(cartContext);

    const handleSizeChange = (productId, newSize) => {
        setProductSizes((prevSizes) => {
            const newSizes = { ...prevSizes, [productId]: newSize };
            localStorage.setItem('sizes', JSON.stringify(newSizes));

            return newSizes;
          });
    };

    return(
        <ContainerTable>
            <table style={{width:'100%'}}>
                <thead>
                    <tr>
                        <th></th>
                        <Th>Nombre</Th>
                        <Th>Talle</Th>
                        {item.color && <Th>Color</Th>}
                        <Th>Precio</Th>
                        <Th>Cant.</Th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style={{minWidth:'7rem', width:'7rem'}}><img src={item.image} style={{width:'70%'}} alt="Imagen del Producto" /></td>
                        <Td>{item.title}</Td>
                        <Td>
                            <InputOption
                                key={item._id}
                                sizes={item.sizes}
                                productId={item._id}
                                onSizeChange={handleSizeChange}
                                />
                        </Td>
                        {item.color && <Td>{item.color}</Td>}
                        <Td>${item.price}</Td>
                        <Td>X{item.qty}</Td>
                        <td><DeleteItemButton onClick={()=>{deleteItem(item._id)}} title="Eliminar">&times;</DeleteItemButton></td>
                    </tr>
                </tbody>
            </table>
        </ContainerTable>
    )
}

export default ItemCart;