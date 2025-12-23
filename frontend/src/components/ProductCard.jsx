import { assets } from "../assets/assets";
import { useAppContext } from "../context/AppContext";

const ProductCard = ({ product }) => {
  const { currency, addToCart, removeFromCart, cartItems } = useAppContext();

  return (
    <>
    <div className="border border-gray-700/20 rounded-md px-3 py-2 bg-white w-56 ">
      <div className="group cursor-pointer flex items-center justify-center">
        <img
          className="group-hover:scale-105 transition max-w-36"
          src={product.image[0]}
          alt={product.name}
        />
      </div>

      <div className="text-sm text-gray-500">
        <p>{product.category}</p>

        <p className="text-gray-700 font-medium text-lg truncate">
          {product.name}
        </p>

        <div className="flex items-center gap-1">
          {Array(5)
            .fill("")
            .map((_, i) => (
              <img
                key={i}
                className="w-3"
                src={i < 4 ? assets.star_icon : assets.star_dull_icon}
              />
            ))}
          <span>(4)</span>
        </div>

        <div className="flex items-end justify-between mt-3">
          <p className="text-black font-medium">
            {currency}{product.offerPrice}
            <span className="ml-1 text-xs line-through">
              {currency}{product.price}
            </span>
          </p>

          {!cartItems[product._id] ? (
            <button
              onClick={() => addToCart(product._id)}
              className="flex items-center gap-1 bg-indigo-100 border border-indigo-300 px-3 h-8 rounded text-black"
            >
              <img src={assets.cart_icon} alt="cart" />
              Add
            </button>
          ) : (
            <div className="flex items-center gap-2 px-2 h-8 rounded">
              <button onClick={() => removeFromCart(product._id)}>-</button>
              <span>{cartItems[product._id]}</span>
              <button onClick={() => addToCart(product._id)}>+</button>
            </div>
          )}
        </div>
      </div>
    </div>
    </>
  );
};

export default ProductCard;
