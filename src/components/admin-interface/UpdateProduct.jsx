import React, { useContext, useState } from 'react'
import {
  styled,
  Typography,
  TextField,
  Button,
  Box
} from '@mui/material'
import { cartContext } from '../Context'

const FormContainer = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-start',
  width: '100%',
  padding: '30px 0',
  maxHeight: '100vh',
})

const Form = styled(Box)({
  width: '50%',
  padding:'1rem',
  backgroundColor:'#f3f3f3',
  borderRadius:'6px'
})

const Text = styled(Typography)({
  width: '50%',
  fontSize: '14px',
  color: 'black',
  textAlign: 'start'
})

const Description = styled (Typography)({
  width: '50%',
  fontSize: '10px',
  color: 'black',
  textAlign: 'start'
})

const UpdateProduct = () => {

  const { updateData } = useContext(cartContext);
  const [productData, setProductData] = useState({
    title: updateData.title,
    description: updateData.description,
    sizes: updateData.sizes,
    image: updateData.image,
    price: updateData.price,
    category: updateData.category,
    gender: updateData.gender,
    season: updateData.season
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProductData({ ...productData, [name]: value });
  };

  console.log(updateData)

  return (
    <FormContainer>
        <Form>
            <form style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
                }}
                action=""
            >

                <Text
                    sx={{
                        textAlign: 'center',
                        fontSize: '18px',
                        marginBottom: 1,
                        textDecoration: 'underline'
                    }}
                >
                    Modificar Producto
                </Text>

                <Text
                    sx={{
                        marginTop: '20px',
                    }}
                >
                    Titulo
                </Text>
                <Description>(Nombre de la prenda/ nombre prenda + Marca, etc)</Description>
                <TextField
                    name="title"
                    value={productData.title}
                    onChange={handleInputChange}
                    sx={{
                        width: '50%',
                        marginTop: '10px',
                        background: 'white',
                    }}
                />
                <Text
                    sx={{
                        marginTop: '20px',
                    }}
                >
                    Descripcion
                </Text>
                <Description>(Breve descripcion de la prenda, puede incluir detalles de costura, tipo de tela, etc)</Description>
                <TextField
                    name="description"
                    value={productData.description}
                    onChange={handleInputChange}
                    sx={{
                        width: '50%',
                        background: 'white',
                        marginTop: '10px'
                    }}
                />
                <Text
                    sx={{
                        marginTop: '20px',
                    }}
                >
                    Talles
                </Text>
                <Description>(Talles en los que estará disponible la prenda)</Description>
                <TextField
                    name="sizes"
                    value={productData.sizes}
                    onChange={handleInputChange}
                    sx={{
                        width: '50%',
                        background: 'white',
                        marginTop: '10px'
                    }}
                />
                <Text
                    sx={{
                        marginTop: '20px',
                    }}
                >
                    Imagen
                </Text>
                <Description>(link-cloud)</Description>
                <TextField
                    name="image"
                    value={productData.image}
                    onChange={handleInputChange}
                    sx={{
                        width: '50%',
                        background: 'white',
                        marginTop: '10px'
                    }}
                />
                <Text
                    sx={{
                        marginTop: '20px',
                    }}
                >
                    Precio
                </Text>
                <Description></Description>
                <TextField
                    name="price"
                    value={productData.price}
                    onChange={handleInputChange}
                    sx={{
                        width: '50%',
                        background: 'white',
                        marginTop: '10px'
                    }}
                />
                <Text
                    sx={{
                        marginTop: '20px',
                    }}
                >
                    Categoría
                </Text>
                <Description>(Categorías en las que entra la prenda. Ej: "Remera", "Manga Corta", "Vestido", etc)</Description>
                <TextField
                    name="category"
                    value={productData.category}
                    onChange={handleInputChange}
                    sx={{
                        width: '50%',
                        background: 'white',
                        marginTop: '10px'
                    }}
                />
                <Text
                    sx={{
                        marginTop: '20px',
                    }}
                >
                    Genero
                </Text>
                <Description>(Hombre, Mujer, Unisex)</Description>
                <TextField
                    name="gender"
                    value={productData.gender}
                    onChange={handleInputChange}
                    sx={{
                        width: '50%',
                        background: 'white',
                        marginTop: '10px'
                    }}
                />
                <Text
                    sx={{
                        marginTop: '20px',
                    }}
                >
                    Temporada
                </Text>
                <Description>(Verano, Otoño, etc)</Description>
                <TextField
                    name="season"
                    value={productData.season}
                    onChange={handleInputChange}
                    sx={{
                        width: '50%',
                        background: 'white',
                        marginTop: '10px'
                    }}
                />
                <Button
                    variant='contained'
                    sx={{
                        width: '30%',
                        minWidth:'7rem',
                        marginTop: '20px'
                    }}
                    type='submit'
                    onClick={() => {}}>
                    Confirmar edicion
                </Button>
            </form>
        </Form>
    </ FormContainer>
)}

export default UpdateProduct