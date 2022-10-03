import { Routes, Route } from "react-router-dom";

import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../category/category.component";

import "./shop.styles.scss";

// Iterate through our shop-data json file with MAP
const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;

/*
// Iterate through our shop-data json file with MAP
const Shop = () => {
  const { products } = useContext(CategoriesContext);

  return (
    <div className="products-container">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
*/

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
