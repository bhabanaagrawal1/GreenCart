import { useMemo, useState } from "react";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import { useAppContext } from "../context/AppContext";
import FooterC from "../components/FooterC";

const CATEGORIES = ["all", "vegetables", "fruits", "dairy", "others"];
const OTHER_CATEGORIES = ["drinks", "bakery", "instant", "grains"];

const Products = () => {
  const { products } = useAppContext();
  const [category, setCategory] = useState("all");
  const [search, setSearch] = useState("");

  const filteredProducts = useMemo(() => {
    let result = [...products];

    //adding the searching filter
    if (search.trim()) {
      result = result.filter((product) =>
        product.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    //adding the category filter
    if (category === "others") {
      result = result.filter((product) =>
        OTHER_CATEGORIES.includes(product.category.toLowerCase())
      );
    } else if (category !== "all") {
      result = result.filter(
        (product) => product.category.toLowerCase() === category
      );
    }

    //the produts in stock
    return result.filter((product) => product.inStock);
  }, [products, search, category]);

  return (
    <>
      <Navbar />
<div className="flex justify-between items-center">
  
      <h1 className="px-6 pt-16 pb-4 text-5xl font-semibold">
        Products
      </h1>

      {/* designing the search box */}
      <div className="px-6 pt-16 pb-4">
  <div className="relative w-full max-w-md shadow-sm rounded-full">
    <i className="ri-search-line absolute left-4 top-1/2 -translate-y-1/2 text-lg"></i>
    <input
      type="text"
      placeholder="Search groceries..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="w-full pl-12 pr-4 py-2 rounded-full outline-none "
    />
  </div>
</div>
</div>


      {/* category filter */}
      <div className="flex gap-4 px-6 pb-6">
        {CATEGORIES.map((item) => (
          <button
            key={item}
            onClick={() => setCategory(item)}
            className={`px-6 py-2 rounded-full capitalize transition shadow-sm
              ${
                category === item
                  ? "bg-black text-white"
                  : "bg-white hover:bg-gray-100"
              }`}
          >
            {item}
          </button>
        ))}
      </div>

      {/* making the product grids */}
      <div className="grid grid-cols-5 gap-6 p-6 px-auto">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500 text-lg">
            No products found
          </p>
        )}
      </div>
      <FooterC/>
    </>
  );
};

export default Products;
