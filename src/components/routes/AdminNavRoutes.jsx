import { Route, Routes } from "react-router-dom";
import { styled } from "@mui/material";
import CreateProductForm from "../admin-interface/CreateProductForm";
import UpdateProduct from "../admin-interface/UpdateProduct";
import AdminNavbar from "../admin-interface/AdminNavbar";
import AdminInterface from "../admin-interface/AdminInterface";
import AdminNavbarMobile from "../admin-interface/AdminNavbarMobile";


const CointainerRoutes = styled('div')({
  display: 'flex'
})

const CointainerNavbar = styled('div')({
  minHeight: '160vh',
  '@media (max-width: 1099px)': {
    display:'none',
  }
})

const AdminNavRoutes = () => {
    return (
        <CointainerRoutes>
          <CointainerNavbar>
            <div style={{ position:'sticky', top:0 }} >
              <AdminNavbar />
            </div>
          </CointainerNavbar>
        <AdminNavbarMobile />
          <Routes>
            <Route path="/" element={<AdminInterface />} />
            <Route path="/create" element={<CreateProductForm />} />
            <Route path='/update/:id' element={<UpdateProduct />} />
          </Routes>
        </CointainerRoutes>
    )
}

export default AdminNavRoutes;