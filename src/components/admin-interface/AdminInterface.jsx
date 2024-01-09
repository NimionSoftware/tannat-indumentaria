import React, { useEffect } from 'react'
import {styled} from '@mui/material'
import { useAxiosFetch } from '../custom-hooks/useAxios';
import AdminProductCard from './AdminProductCard'
import FilterComponent from '../Shared/FilterComponent';

const AdminContainer = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  flexDirection:'column',
  width:'100%'
})

const Wall = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  background: `white`,
})

const ContainerDashboard = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent:'space-around'
})

const BannerGreeting = styled('div')({
  width:'100%',
  height:'4rem',
  backgroundColor:'#151c29'
})

const ContainerAdminSearch = styled('div')({
  display:'flex',
  alignItems:'center',
  margin:'0 3rem',
  height:'3rem',
})



const AdminInterface = () => {

  const {fetchData, apiData} = useAxiosFetch();


  useEffect(() => {
    fetchData('http://localhost:4000/api/product')

  }, [!apiData])


  return (
    <AdminContainer>
      <BannerGreeting>
        <p style={{color:'white', fontSize:'1.5rem', fontWeight:'600', paddingLeft:'1rem'}}>¡Holaa! Que vamos a hacer hoy?</p>
      </BannerGreeting>
      <ContainerAdminSearch>
        <h3>Mis productos</h3>
      </ContainerAdminSearch>
      <ContainerDashboard>
        <Wall>
          {apiData?.data.map((card) => (
              <AdminProductCard
              key={card?._id}
              imgId={card?.image}
              productName={card?.title}
              productDescription={card?.description}
              productSizes={card?.sizes}
              productPrice={card?.price}
              card={card}
              index={card?._id}
              />
              ))}
        </Wall>
        <FilterComponent />
      </ContainerDashboard>
    </ AdminContainer>
  )
}

export default AdminInterface
