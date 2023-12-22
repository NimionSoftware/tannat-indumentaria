import React from 'react'
import AdminNavbar from './AdminNavbar'
import CreateProductForm from './CreateProductForm'
import {styled} from '@mui/material'

const AdminContainer = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  height: '100vh'
})

const AdminInterface = () => {
  return (
    <AdminContainer>
        <AdminNavbar />
        <CreateProductForm />
    </ AdminContainer>
  )
}

export default AdminInterface