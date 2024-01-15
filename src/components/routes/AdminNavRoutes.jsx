import { Route, Routes } from "react-router-dom";
import { styled } from "@mui/material";
import CreateProductForm from "../admin-interface/CreateProductForm";
import UpdateProduct from "../admin-interface/UpdateProduct";
import AdminNavbar from "../admin-interface/AdminNavbar";
import AdminInterface from "../admin-interface/AdminInterface";
import AdminNavbarMobile from "../admin-interface/AdminNavbarMobile";
import CreateCategoryForm from "../admin-interface/CreateCategoryForm";
import AdminCategoryInterface from "../admin-interface/AdminCategoryInterface";
import UpdateCategory from "../admin-interface/UpdateCategory";


const CointainerRoutes = styled('div')({
  display: 'flex',
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
            <Route path='/category' exact element={<AdminCategoryInterface />} />
            <Route path='/category/create' exact element={<CreateCategoryForm />} />
            <Route path='/category/update/:id' exact element={<UpdateCategory />} />
          </Routes>
        </CointainerRoutes>
    )
}

export default AdminNavRoutes;