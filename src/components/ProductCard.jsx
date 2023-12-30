import React, {useContext, useState, useEffect} from 'react'
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
import { cartContext } from './Context'
import Loader from './Loader';

const Title = styled(Typography)({
  display: 'flex',
  alignItems:'center',
  minHeight:'38px',
  maxHeight: '40px',
  fontWeight: 'lighter',
  textAlign: 'center'
})

const TextTitle = styled(Typography)({
  fontSize:'1.3rem',
})

const Description = styled(Typography)({
  fontSize: 12,
  marginBottom: 20,
  padding: "0 10px",
  textAlign: 'center',
  maxHeight:'5rem',
  overflowY:'scroll',
  '::-webkit-scrollbar': {
    width: '3px',
},
'::-webkit-scrollbar-track': {
    backgroundColor: '#f1f1f1',
},
'::-webkit-scrollbar-thumb': {
    backgroundColor: '#888',
    borderRadius: '5px',
},
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

const ContainerCardImage = styled('div')({
  width:'100%',
  height:'100%',
})


const ProductCard = ({index, isExpanded, imgId, productName, productDescription, productSizes, productPrice, card}) => {
  const [expanded, setExpanded] = useState(false);
  const [expandedPress, setExpandedPress] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(true);
  const {isExpandedIndex, setIsExpandedIndex} = isExpanded

  const handleExpandClick = () => {
    setExpandedPress(!expandedPress)
    setTimeout(() => {
      setExpanded(!expanded);
    }, 300);
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

  const {addItem, qty} = useContext(cartContext);

  useEffect(() => {
    if(expandedPress){
      setIsExpandedIndex(index)
    }

  }, [expandedPress]);

  useEffect(() => {
    if(isExpandedIndex !== index){
      setExpanded(false);
      setExpandedPress(false)
    }
  }, [isExpandedIndex])

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        maxWidth: "250px",
        maxHeight: !expanded && "630px",
        transition: 'all .250s',
        gap: 1,
        margin: 3,
        background: '#f1f1f1',
        boxShadow: 5,
      }}
    >
      <ContainerCardImage onLoad={()=>setImageLoaded(false)}>
            <img style={{
                  position: 'relative',
                  width: "100%",
                  maxHeight: "550px",
                  }}
                  src={/*`http://drive.google.com/uc?export=view&id=`*/imgId}
                  alt="card Img"
              />
            <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                {imageLoaded && <Loader />}
            </div>
      </ContainerCardImage>
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
          <TextTitle>
            {productName}
          </TextTitle>
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
            <span style={{color: 'black', fontWeight: "400"}}>Talles:</span> {productSizes?.map((size, index) => (<span key={index}>{size} </span>))}
          </Size>
        </Collapse>
          <Price
          style={{
            width:'100%',
            paddingTop: 10,
            paddingBottom: 10,
            background: 'brown'
          }}>
          ${productPrice}
        </Price>

          <Button
          sx={{
            gap: 1,
            marginBottom: "-20px",
            background: "#3c3c3c",
            fontSize: 11
          }}
          variant='contained'
          onClick={()=>{addItem(card, qty)}}
        >
          <img src={cartImg} alt="imagen del carrito" />
          Al Carrito
        </Button>
        <ExpandMore
          expand={expanded}
          aria-expanded={expanded}
          aria-label="show more"
          onClick={handleExpandClick}
        >
          <img src={expandMoreIcon} alt="expand icon" />
        </ExpandMore>
    </Box>
  )
}

export default ProductCard