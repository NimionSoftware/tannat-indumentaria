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
const [succ, setSucc] = useState(false);
const [productSizes, setProductSizes] = useState(() => {

  const storedSizes = localStorage.getItem('sizes');

  return storedSizes ? JSON.parse(storedSizes) : {};
});

  useEffect(() => {
    const get = JSON.parse(localStorage.getItem('cart'));
    if (get) {
      setCart(get);
    } else {
      localStorage.setItem('cart', JSON.stringify([]));
    }
  }, []);

  useEffect(() => {
      const getSizes = JSON.parse(localStorage.getItem('sizes'))
        if (getSizes) {
          setProductSizes(getSizes);
        } else {
          localStorage.setItem('sizes', JSON.stringify(productSizes));
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
    setProductSizes({});
    localStorage.setItem('sizes', JSON.stringify({}));
  };

  const quantity = () => {
    return cart.reduce((acc, product) => acc + product.qty, 0);
  };

  const total = () => {
    return cart.reduce((acc, product) => acc + product.price * product.qty, 0);
  };

  const updateQty = (productId, newQty) => {
    const updatedCart = cart.map((item) => {
      const updatedQty = item.qty + newQty;
      const minQty = Math.max(1, updatedQty);
      return item._id === productId ? { ...item, qty: minQty } : item;
    });
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
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
        succ,
        setSucc,
        productSizes,
        setProductSizes,
        updateQty,
        }}>{children}</Provider>
  );
};

export default Context;