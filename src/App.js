import { Routes, Route } from "react-router-dom";

import Navigation from "./components/routes/navigation/navigation.component";
import Home from "./components/routes/home/home.component";
import Authentication from "./components/routes/authentication/authentication.component";
// import Shop from "./routes/shop/shop.component";
import Shop from "./components/routes/shop/shop.component";
// SHOP PAGE
// const Shop = () => {
//   return <h1>I am the shop page</h1>;
// };

/* If text is the SAME for all areas, we can hardcode those,
If text is different, then we PUT THOSE IN THE OBJECT CATEGORIES
- categories.map((category) => {container content}. In this, we are going to iterate through our categories array to input out each of the names. This helps to PREVENT DRY.
  */
const App = () => {
  // <Routes>
  //   <Route path="/" index element={<Home />} />
  // </Routes>
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
};

export default App;

// Install FIREBASE with: 'yarn add firebase'

/* the 'index' MATCHES the BASE COMPONENT, so when we have the default slash, then home will ALSO RENDER WITH NAVIGATION BY DEFAULT.
<Route path="/" element={<Navigation />}>
  <Route index element={<Home />} />
  <Route path="shop" element={<Shop />} />
</Route>;
*/

// Renders in the Shop component while home disappears
{
  /* <Route path="/shop" element={<Shop />} /> */
}

// element RENDERS IN our HOME COMPONENT
{
  /* <Route path="/" element={<Home />} /> */
}

/* Passing in category object as a prop into our category-item component
id MUST BE CALLED HERE where MAP is USED. NOT INSIDE THE COMPONENT
*/
{
  /* <CategoryItem key={category.id} category={category} /> */
}

// THIS IS OUR BACKGROUND IMAGE, using style={{backgroundImage: `url(${...})`}}
// <div
// className="background-image"
// style={{
//   backgroundImage: `url(${imageUrl})`,
// }}
// />

// {categories.map(({ id, title }) => {...} - HERE inside map we are DESTRUCTURING CATEGORY, so now we dont have to say, '{category.title}', instead we can say, '{title}'. This is much cleaner to read

// Prop passed method
// {/* <div className="categories-container">
//   {categories.map((category) => {
//     return (
//       <div className="category-container">
//         {/* <img /> */}
//         <div className="category-body-container">
//           <h2 id={category.id}>{category.title}</h2>
//           <p>Shop Now</p>
//         </div>
//       </div>
//     );
//   })}
// </div>; */}

// HARD CODING METHOD
// {/* <div className="category-container">
//         {/* <img /> */}
//         <div className="category-body-container">
//           <h2>Jackets</h2>
//           <p>Shop Now</p>
//         </div>
//       </div>
//       <div className="category-container">
//         {/* <img /> */}
//         <div className="category-body-container">
//           <h2>Sneakers</h2>
//           <p>Shop Now</p>
//         </div>
//       </div>
//       <div className="category-container">
//         {/* <img /> */}
//         <div className="category-body-container">
//           <h2>Womens</h2>
//           <p>Shop Now</p>
//         </div>
//       </div>
//       <div className="category-container">
//         {/* <img /> */}
//         <div className="category-body-container">
//           <h2>Mens</h2>
//           <p>Shop Now</p>
//         </div>
//       </div> */}
