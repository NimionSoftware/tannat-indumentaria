import { styled } from '@mui/material';
import wpp from '../assets/whatsapp.png';

const Image = styled('img')({
    zIndex:'999',
    position: 'fixed',
    right:'3rem',
    bottom:'3rem',
    width: '3.5rem',
    transition:'.2s ease',
    '&:hover': {
        transform: 'scale(1.2)'
    }
})

const ContactButton = () => {
    return(
        <a href={`https://wa.me/${process.env.REACT_APP_CONCTACT}?text=Hola%2C%20Como%20estas%3F%20Quiero%20consultarte%20por%20una%20prenda%20que%20vi%20en...`}  rel="noreferrer" target="_blank">
            <Image src={wpp} alt="Icono de whatsapp" />
        </a>
    )
}

export default ContactButton;