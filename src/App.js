// import CategoryItem from "./components/category-item/category-item.component";
import Directory from "./components/directory/directory.component";

/* If text is the SAME for all areas, we can hardcode those,
If text is different, then we PUT THOSE IN THE OBJECT CATEGORIES
- categories.map((category) => {container content}. In this, we are going to iterate through our categories array to input out each of the names. This helps to PREVENT DRY.
  */
const App = () => {
  // THIS IS OUR JSON
  const categories = [
    {
      id: 1,
      title: "hats",
      imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
    },
    {
      id: 2,
      title: "jackets",
      imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
    },
    {
      id: 3,
      title: "sneakers",
      imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
    },
    {
      id: 4,
      title: "womens",
      imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
    },
    {
      id: 5,
      title: "mens",
      imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
    },
  ];

  return <Directory categories={categories} />;
};

export default App;

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
