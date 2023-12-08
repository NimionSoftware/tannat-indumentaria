import { Grid, Typography, styled } from '@mui/material';
import nameLogo from '../assets/logoName.png';

const Container = styled('div')({
    display:'flex',
    justifyContent: 'center',
    minHeight:'2.5rem',
    width: '100%',
    backgroundColor: '#1b1b1b',
    position: 'relative',
    '&::after': {
        content: '""',
        position: 'absolute',
        bottom: '0',
        left: '0',
        width: '100%',
        height: '2px',
        backgroundImage: 'linear-gradient(90deg, rgba(0,185,189,1) 0%, rgba(22,26,255,1) 100%)',
    },
})

const Images = styled('img')({
    width:'13rem',
    margin:'1rem',
    filter: 'drop-shadow(0 0 1px #a8a8a8)',
})

const Header = () => {
    return (
        <Container>
            <Grid>
                <Images src={nameLogo} alt='Imagen nombre de marca' />
                {/* <Typography style={{textAlign: 'center', fontWeight: 'bold', color: '#00a2ff'}}>Ultimas oportunidad | productos con hasta 60% OFF</Typography> */}
            </Grid>
        </Container>
    )
}

export default Header;