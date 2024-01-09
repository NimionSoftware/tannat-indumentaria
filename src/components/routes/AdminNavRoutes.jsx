import { useEffect } from "react";
import ProductWall from "../ProductWall";
import { useAxiosFetch } from "../custom-hooks/useAxios";
import { Route, Routes } from "react-router-dom";
import CreateProductForm from "../admin-interface/CreateProductForm";
import UpdateProduct from "../admin-interface/UpdateProduct";
import AdminNavbar from "../admin-interface/AdminNavbar";
import { styled } from "@mui/material";
import DeleteProductForm from "../admin-interface/DeleteProductForm";


const AdminNavRoutes = () => {

    const {fetchData, apiData} = useAxiosFetch();


  useEffect(() => {
    fetchData('http://localhost:4000/api/product')

  }, [!apiData])


const CointainerRoutes = styled('div')({
  display: 'flex'
})

    return (
        <CointainerRoutes>
          <div style={{ minHeight: '160vh' }} >
            <div style={{ position:'sticky', top:0 }} >
              <AdminNavbar />
            </div>
          </div>
          <Routes>
            <Route path="/" element={<ProductWall cards={apiData?.data} />} />
            <Route path="/create" element={<CreateProductForm />} />
            <Route path='/update/:id' element={<UpdateProduct />} />
            <Route path='/delete' element={<DeleteProductForm />} />
          </Routes>
        </CointainerRoutes>
    )
}

export default AdminNavRoutes;