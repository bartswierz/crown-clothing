// import CategoryItem from "./components/category-item/category-item.component";
// import Directory from "./components/directory/directory.component";
import { Routes, Route } from "react-router-dom";

// import Home from "./routes/home/home.component";
import Home from "./components/routes/home/home.component";
// components\routes\home\home.component
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
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default App;

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
