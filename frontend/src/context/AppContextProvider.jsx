import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "./AppContext";
import { dummyProducts } from "../assets/assets";
import toast from "react-hot-toast";

const AppContextProvider = ({ children }) => {
  const currency = import.meta.env.VITE_CURRENCY;
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [isSeller, setIsSeller] = useState(false);
  const [cartItems, setCartItems] = useState({});
  const [searchQuery, setSearchQuery] = useState("");
  const [products, setProducts] = useState(dummyProducts);


  const addToCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1,
    }));
    toast.success("Added to cart");
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      if (!prev[itemId]) return prev;
      const updated = { ...prev };
      updated[itemId] -= 1;
      if (updated[itemId] === 0) delete updated[itemId];
      return updated;
    });
    toast.success("Removed from cart");
  };

  const updateCartItem = (itemId, quantity) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: quantity,
    }));
  };

  const value = {
    navigate,
    currency,
    user,
    setUser,
    isSeller,
    setIsSeller,
    products,
    setProducts,
    cartItems,
    searchQuery,
    setSearchQuery,
    addToCart,
    removeFromCart,
    updateCartItem,
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
