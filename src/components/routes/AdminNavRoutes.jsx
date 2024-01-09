import { Route, Routes } from "react-router-dom";
import { styled } from "@mui/material";
import CreateProductForm from "../admin-interface/CreateProductForm";
import UpdateProduct from "../admin-interface/UpdateProduct";
import AdminNavbar from "../admin-interface/AdminNavbar";
import DeleteProductForm from "../admin-interface/DeleteProductForm";
import AdminInterface from "../admin-interface/AdminInterface";


const CointainerRoutes = styled('div')({
  display: 'flex'
})

const AdminNavRoutes = () => {
    return (
        <CointainerRoutes>
          <div style={{ minHeight: '160vh' }} >
            <div style={{ position:'sticky', top:0 }} >
              <AdminNavbar />
            </div>
          </div>
          <Routes>
            <Route path="/" element={<AdminInterface />} />
            <Route path="/create" element={<CreateProductForm />} />
            <Route path='/update/:id' element={<UpdateProduct />} />
            <Route path='/delete' element={<DeleteProductForm />} />
          </Routes>
        </CointainerRoutes>
    )
}

export default AdminNavRoutes;