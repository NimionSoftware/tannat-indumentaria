import React, {useState} from 'react'
import cartImg from "../assets/shopping_cart_white_24dp.svg"
import expandMoreIcon from "../assets/expand_more_black_24dp.svg"
import {
    Box,
    Button,
    styled,
    Typography,
    Divider,
    Collapse,
    IconButton,
} from "@mui/material"

const Title = styled(Typography)({
  fontSize: 20,
  fontWeight: 'lighter',
})

const Description = styled(Typography)({
  fontSize: 12,
  marginBottom: 20,
  padding: "0 10px",
  textAlign: 'center',
})

const Size = styled(Typography)({
  margin: "15px 0",
  fontSize: 15,
  fontWeight: '600',
  color: 'green',
  textAlign: 'center',
})

const Price = styled(Typography)({
  fontSize: 28,
  fontWeight: '600',
  color: '#F4F4F4',
  marginBottom: 15,
  textAlign: 'center',
  letterSpacing: 1
})


const ProductCard = ({imgId, productName, productDescription, productSizes, productPrice}) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton
              onClick={handleExpandClick}
              {...other}
              />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    textAlign: 'center',
    position: 'relative',
    top: 10,
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        maxWidth: "250px",
        maxHeight: !expanded && "617px",
        transition: 'all .250s',
        gap: 1,
        margin: 3,
        background: '#f1f1f1',
        boxShadow: 5,
      }}
    >
      <img style={{
        position: 'relative',
        width: "100%",
        maxHeight: "550px",
        }}
        src={/*`http://drive.google.com/uc?export=view&id=`*/imgId}
        alt="card Img"
        />
        <Divider
          variant="middle"
          style={{
            width: '70%',
            height: '.5px',
            marginTop: 10,
            backgroundColor: '#121212',
            opacity: '0.5',
          }}
        />
        <Title>
          {productName}
        </Title>
        <Divider
          variant="middle"
          style={{
            width: '70%',
            height: '.5px',
            marginBottom: 10,
            backgroundColor: '#121212',
            opacity: '0.5',
          }}
        />
        <Collapse
          in={expanded}
        >
          <Description>
            {productDescription}
          </Description>
          <Size>
            <span style={{color: 'black', fontWeight: "400"}}>Talles:</span> {productSizes}
          </Size>
        </Collapse>
          <Price
          style={{
            width:'100%',
            paddingTop: 10,
            paddingBottom: 10,
            background: 'brown'
          }}>
          {productPrice}
        </Price>

          <Button
          sx={{
            gap: 1,
            marginBottom: "-20px",
            background: "#3c3c3c",
            fontSize: 11
          }}
          variant='contained'
          onClick={()=>{}}
        >
          <img src={cartImg} alt="imagen del carrito" />
          Al Carrito
        </Button>
        <ExpandMore
          expand={expanded}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <img onClick={handleExpandClick} src={expandMoreIcon} alt="expand icon" />
        </ExpandMore>
    </Box>
  )
}

export default ProductCard