import { createContext, useEffect, useState } from "react";

export const cartContext = createContext();

const { Provider } = cartContext;

const Context = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [qty, setQty] = useState(1);
  const [openCart, setOpenCart] = useState(false);
  const [itemW, setItemW] = useState(``);
  const [popUp, setPopUp] = useState(false);
  const [formData, setFormData] = useState({
    nombre: '',
    numero: '',
    direccion: '',
    paymentMethod: ''
});


  useEffect(() => {
    const get = JSON.parse(localStorage.getItem('cart'));
    if (get) {
      setCart(get);
    } else {
      localStorage.setItem('cart', JSON.stringify([]));
    }
  }, []);

  const isInCart = (id) => {
    return cart.some((item) => item._id === id);
  };

  const addItem = (product, qty) => {
    const newItem = {
      ...product,
      qty,
    };

    if (isInCart(newItem._id)) {
      const updatedCart = cart.map((item) =>
        item._id === newItem._id ? { ...item, qty: item.qty + qty } : item
      );
      setCart(updatedCart);
      localStorage.setItem('cart', JSON.stringify(updatedCart));
    } else {
      const updatedCart = [...cart, newItem];
      setCart(updatedCart);
      localStorage.setItem('cart', JSON.stringify(updatedCart));
    }
  };

  const deleteItem = (id) => {
    const updatedCart = cart.filter((item) => item._id !== id);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const emptyCart = () => {
    setCart([]);
    localStorage.setItem('cart', JSON.stringify([]));
  };

  const quantity = () => {
    return cart.reduce((acc, product) => acc + product.qty, 0);
  };

  const total = () => {
    return cart.reduce((acc, product) => acc + product.price * product.qty, 0);
  };

  return (
    <Provider
      value={{
        cart,
        isInCart,
        addItem,
        deleteItem,
        emptyCart,
        quantity,
        total,
        qty,
        setQty,
        openCart,
        setOpenCart,
        itemW,
        setItemW,
        popUp,
        setPopUp,
        formData,
        setFormData,
        }}>{children}</Provider>
  );
};

export default Context;