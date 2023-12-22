import { styled } from "@mui/material";
import Cart from "./Cart";
import { cartContext } from "./Context";
import { useContext } from "react";
import PopUp from "./PopUp";

const ContainerModal = styled('div')({
    zIndex:'9999',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    position:'fixed',
    top:'0',
    margin:'auto',
    width:'100%',
    height:'100%',
    backgroundColor: '#1b1b1bc7'
})

const ModalStyle = styled('div')({
    display:'flex',
    flexDirection:'column',
    margin:'auto',
    minWidth:'25rem',
    width:'40%',
    height:'35rem',
    backgroundColor: '#fff',
    borderRadius:'.1rem'
})

const Cross = styled('p')({
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    alignSelf:'end',
    cursor:'pointer',
    width:'2rem',
    height:'2rem',
    fontSize:'2rem',
    fontWeight:'bold',
    background: 'linear-gradient(90deg, rgba(0, 185, 189, 1) 0%, rgba(22, 26, 255, 1) 100%)',
    WebkitBackgroundClip: 'text',
    color: 'transparent',
    '-webkit-text-fill-color': 'transparent',
    transition: '.2s all',
    '&:hover': {
        transform: 'scale(1.2)'
    },
    margin:'0'
})

const Modal = ({setOpenCart}) => {

    const {itemW, setItemW, popUp, setPopUp } = useContext(cartContext);


    return (
        <ContainerModal>
            {!popUp && <ModalStyle>
                <Cross style={{color:'#000'}} onClick={() => setOpenCart(false)} title="Cerrar Ventana">&times;</Cross>
                <div>
                    <Cart />
                </div>
            </ModalStyle>}
            {popUp && <PopUp setPopUp={setPopUp} itemW={itemW} setItemW={setItemW} />}
        </ContainerModal>
    )
}

export default Modal;