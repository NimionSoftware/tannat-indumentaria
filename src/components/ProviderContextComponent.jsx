import { createContext, useEffect, useState } from "react";
import { user } from '../mockup/superadmin';
import { isValidPassword } from './hashPassword/Hash';

export const providerContext = createContext();

const { Provider } = providerContext;

const ProviderContextComponent = ({ children }) => {
  const [errorMessage, setErrorMessage] = useState(false);
  const [rol, setRol] = useState(JSON.parse(sessionStorage.getItem('rol')));

  const verifyUser = (data) => {

    const isPasswordValid = isValidPassword(data.password, user.password);

    const role = 'SUPER_ADMIN';
    if (data.email === user.email && isPasswordValid) {
        sessionStorage.setItem('rol', JSON.stringify(role));
        setErrorMessage(false);
        setRol(role);

    } else {
        setErrorMessage(true);
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
        setRol
      }}
    >
      {children}
    </Provider>
  );
};


export default ProviderContextComponent;