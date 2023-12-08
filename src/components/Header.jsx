import { Grid, Link, Typography, styled } from '@mui/material';
import Navbar from './Navbar';

const Container = styled('div')({
    minHeight:'3rem',
    width: '100%',
    backgroundColor: 'rgb(0,185,189)',
    background: 'linear-gradient(0deg, rgba(0,185,189,1) 0%, rgba(22,26,255,1) 100%)'
})

const Header = () => {
    return (
        <Container>
            <Grid>
                <Typography style={{textAlign: 'center', fontWeight: 'bold'}}>Ultimas oportunidad | productos con hasta 60% OFF</Typography>
            </Grid>
            <Navbar />
        </Container>
    )
}

export default Header;