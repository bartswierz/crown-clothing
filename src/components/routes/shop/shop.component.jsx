// import SHOP_DATA from "../../../shop-data.json";

import { useContext } from "react";

import { ProductsContext } from "../../../contexts/products.context";
import ProductCard from "../../product-card/product-card.component";

import "./shop.styles.scss";

// Iterate through our shop-data json file with MAP
const Shop = () => {
  const { products } = useContext(ProductsContext);

  return (
    <div className="products-container">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Shop;

// SHOP_DATA -> each product contains the following inside:
// {
//   "id": 1,
//   "name": "Brown Brim",
//   "imageUrl": "https://i.ibb.co/ZYW3VTp/brown-brim.png",
//   "price": 25
// },

// const Shop = () => {
//   return (
//     <div>
//       {SHOP_DATA.map((product) => (
//         <div>
//           <h1>{product.name}</h1>
//         </div>
//       ))}
//     </div>
//   );
// };
