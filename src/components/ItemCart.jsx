import { useContext } from "react";
import { cartContext } from "./Context";
import { styled } from "@mui/material";
import InputOption from "./Shared/InputOption";

const ContainerTable = styled('div')({
    boxShadow: '0 0 2px black',
    marginBottom: '.5rem',
    marginTop: '.5rem',
    height:'13rem',
    display:'flex',
    flexWrap:'wrap',
    gap:'2rem',
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

const ContainerButtons = styled('div')({
    display:'flex',
    justifyContent:'space-between',
    alignItems:'center',
    margin:'0 auto',
    border:'solid 1px gray',
    borderRadius:'10px',
    maxWidth:'6rem',
    width:'100%',
    height:'2rem',
    overflow:'hidden',
    fontSize:'.8rem',
    fontWeight:'500'
})

const ButtonCart = styled('button')({
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    border:'none',
    background:'transparent',
    fontSize:'1rem',
    fontWeight:'bold',
    textAlign:'center',
    width:'100%',
    height:'100%',
    cursor:'pointer',
    transition:'all .2s',
    '&:hover': {
        background:'#dadada'
    }
})

const NameText = styled('p')({
    maxHeight:'2rem',
    width:'7rem',
    maxWidth:'7rem',
    fontSize:'.8rem',
    textAlign:'center',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    cursor:'pointer',
    '&:hover': {
        textOverflow:'initial',
        overflow:'visible',
    }
})

const TdContainerImg = styled('td')({
    minWidth:'7rem',
    width:'7rem',
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
})


const ItemCart = ({item}) => {

    const { deleteItem, setProductSizes, updateQty } = useContext(cartContext);

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
                        <th style={{width:'20%'}}></th>
                        <Th>Talle</Th>
                        {item.color && <Th>Color</Th>}
                        <Th>Precio</Th>
                        <Th>Cant.</Th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <TdContainerImg>
                            <img src={item.image} style={{width:'70%'}} alt="Imagen del Producto" />
                            <NameText>{item.title}</NameText>
                        </TdContainerImg>
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
                        <Td>
                            <ContainerButtons>
                                <ButtonCart onClick={() => {updateQty(item._id, -1)}} >-</ButtonCart>
                                    <p style={{padding:'10px'}}>{item.qty}</p>
                                <ButtonCart onClick={() => {updateQty(item._id, 1)}}>+</ButtonCart>
                            </ContainerButtons>
                        </Td>
                        <td><DeleteItemButton onClick={()=>{deleteItem(item._id)}} title="Eliminar">&times;</DeleteItemButton></td>
                    </tr>
                </tbody>
            </table>
        </ContainerTable>
    )
}

export default ItemCart;