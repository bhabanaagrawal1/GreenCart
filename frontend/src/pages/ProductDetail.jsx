import React, { useMemo, useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import FooterC from "../components/FooterC";
import { assets } from "../assets/assets";
import { useAppContext } from "../context/AppContext";
import ProductCard from "../components/ProductCard";

const ProductDetail = () => {
  const { products, currency, addToCart } = useAppContext();
  const { id } = useParams();
  const navigate = useNavigate();

  //Product (derived)
  const product = useMemo(
    () => products?.find(item => item._id === id),
    [products, id]
  );

  //User-selected image ONLY
  const [activeImage, setActiveImage] = useState(null);

  //Default image (derived, no state, no effect)
  const defaultImage = product?.image?.[0] || null;
  const displayImage = activeImage ?? defaultImage;

  //Related products (derived, used → no warning)
  const related = useMemo(() => {
    if (!product || products.length === 0) return [];

    return products
      .filter(
        item =>
          item.category === product.category &&
          item._id !== product._id
      )
      .slice(0, 5);
  }, [products, product]);

  //Invalid product guard (side-effect → allowed)
  useEffect(() => {
    if (products.length > 0 && !product) {
      navigate("/404");
    }
  }, [products, product, navigate]);

  if (!product) return null;

  return (
    <div>
      <Navbar />

      <div className="mt-12 ml-10 mb-7">
        {/* Breadcrumb */}
        <p className="text-left">
          <Link to="/home">Home</Link> /{" "}
          <Link to="/product">Products</Link> /{" "}
          <Link to={`/product/${product.category}/${product._id}`}>
            {product.category}
          </Link>{" "}
          / <span className="text-green-800">{product.name}</span>
        </p>

        <div className="flex flex-col md:flex-row gap-16 mt-4">
          {/* Images */}
          <div className="flex gap-3">
            <div className="flex flex-col justify-between">
              {product.image.map((img, index) => (
                <div
                  key={index}
                  onClick={() => setActiveImage(img)}
                  className="border max-w-24 border-gray-500/30 rounded overflow-hidden cursor-pointer"
                >
                  <img src={img} alt={`Thumbnail ${index + 1}`} />
                </div>
              ))}
            </div>

            <div className="border border-gray-500/30 max-w-100 rounded overflow-hidden">
              {displayImage && (
                <img
                  src={displayImage}
                  alt="Selected product"
                  className="w-full h-full object-cover"
                />
              )}
            </div>
          </div>

          {/* Details */}
          <div className="text-sm w-full md:w-1/2">
            <h1 className="text-3xl font-medium">{product.name}</h1>

            {/* Rating */}
            <div className="flex items-center gap-0.5 mt-1">
              {Array(5)
                .fill("")
                .map((_, i) => (
                  <img
                    key={i}
                    src={
                      i < 4
                        ? assets.star_icon
                        : assets.star_dull_icon
                    }
                    className="md:w-4 w-3.5"
                  />
                ))}
              <p className="text-base ml-2">(4)</p>
            </div>

            {/* Price */}
            <div className="mt-6">
              <p className="text-gray-500/70 line-through">
                {currency}
                {product.price}
              </p>
              <p className="text-2xl font-medium">
                {currency}
                {product.offerPrice}
              </p>
              <span className="text-gray-500/70">
                (inclusive of all taxes)
              </span>
            </div>

            {/* Description */}
            <p className="text-base font-medium mt-6">
              About Product
            </p>
            <ul className="list-disc ml-4 text-gray-500/70">
              {product.description.map((desc, index) => (
                <li key={index}>{desc}</li>
              ))}
            </ul>

            {/* Actions */}
            <div className="flex items-center mt-10 gap-4 text-base">
              <button
                onClick={() => addToCart(product._id)}
                className="w-full py-3.5 font-medium bg-gray-100 hover:bg-gray-200 transition"
              >
                Add to Cart
              </button>

              <button
                onClick={() => {
                  addToCart(product._id);
                  navigate("/ordered");
                }}
                className="w-full py-3.5 font-medium bg-black text-white hover:opacity-70 transition"
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>

        {/* Related products (minimal usage to avoid warnings) */}
        {related.length === 0 && (
          <p className="mt-10 text-gray-400 text-sm">
            No related products found
          </p>
        )}
      </div>
      <div>
        <h1 className="text-5xl text-center p-5">Related Products</h1>
        <div className="flex sm:grid-cols-3 md:grid-cols-4 gap-10 lg:grid-cols-5 mb-6 w-full justify-center">
            {related.filter((product)=>product.inStock).map((product,index)=>(
                <ProductCard key = {index} product={product}/>
            ))}
        </div>
        <div onClick={()=> {navigate('/product');scrollTo(0,0)}} className=" flex justify-center items-center mb-10">
            <button className="px-15 py-2 bg-black text-white hover:opacity-70">See more</button>
        </div>
      </div>

      <FooterC />
    </div>
  );
};

export default ProductDetail;
