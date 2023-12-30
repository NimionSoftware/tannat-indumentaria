import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import NotAllowed from '../NotAllowed';
import AdminInterface from '../admin-interface/AdminInterface';

const PrivateRoute = ({ rute }) => {

    const rol = sessionStorage.getItem('rol');

    // const lookRol = () => {

    // }
    // if(rol){
    //     console.log('existe el rol')
    //     if(rol !== "SUPER_ADMIN"){
    //     console.log('el rol es distinto')
    //     navigate("/admin/not-allowed")
    //     }else{
    //     console.log('rol encontrado')
    //     navigate("/admin")
    //     }
    // }else{
    //     console.log('no existe el rol')
    //     navigate("/")
    // }

    return (
        <>
            <Route
                element={
                    rol === "SUPER_ADMIN"
                    ?
                    <AdminInterface />
                    :
                    <Navigate to='/admin/not-allowed' replace={true}/>
                }
                />
        </>
    );
};

export default PrivateRoute;