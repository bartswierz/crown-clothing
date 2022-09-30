import SHOP_DATA from "../../../shop-data.json";

// Iterate through our shop-data json file with MAP
const Shop = () => {
  return (
    <div>
      {SHOP_DATA.map(({ id, name }) => (
        <div key={id}>
          <h1>{name}</h1>
        </div>
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
