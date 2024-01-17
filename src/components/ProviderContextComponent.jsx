import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const providerContext = createContext();

const { Provider } = providerContext;

const ProviderContextComponent = ({ children }) => {
  const [errorMessage, setErrorMessage] = useState(false);
  const [rol, setRol] = useState(JSON.parse(sessionStorage.getItem('rol')));
  const [shouldFetchData, setShouldFetchData] = useState(true);
  const [tokenExpired, setTokenExpired] = useState(false);

  const postURL = `${process.env.REACT_APP_API_URL}/auth`

  const verifyUser = async (user) => {

    try {

      const headers = {
        'Content-Type': 'application/json'
      }

      const config = {
        method: 'POST',
        url: postURL,
        headers:headers,
        data: user,
      };
      const { data: response } = await axios(config);

      const role = 'ADMIN';
      if (response.data.role === role) {
          sessionStorage.setItem('rol', JSON.stringify(role));
          sessionStorage.setItem('token', JSON.stringify(response.data.token));
          setErrorMessage(false);
          setRol(role);
        return true
      } else {
          setErrorMessage(true);
        return false
      }
    }catch (error) {
      setErrorMessage(true);
      console.error('Error en la solicitud:', error);
    }

  };

  useEffect(() => {
    const changeRol = JSON.parse(sessionStorage.getItem('rol'));

    if (!changeRol) {
        setRol(null);

    } else if (changeRol !== rol) {
        setRol(changeRol);
    }

  }, [rol]);

  return (
    <Provider
      value={{
        verifyUser,
        errorMessage,
        rol,
        setRol,
        shouldFetchData,
        setShouldFetchData,
        tokenExpired,
        setTokenExpired,
      }}
    >
      {children}
    </Provider>
  );
};


export default ProviderContextComponent;