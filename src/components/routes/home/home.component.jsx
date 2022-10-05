import { Outlet } from "react-router-dom";
import Directory from "../../directory/directory.component";

/* If text is the SAME for all areas, we can hardcode those,
If text is different, then we PUT THOSE IN THE OBJECT CATEGORIES
- categories.map((category) => {container content}. In this, we are going to iterate through our categories array to input out each of the names. This helps to PREVENT DRY.
  */
const Home = () => {
  return (
    <div>
      <Directory />
      <Outlet />
    </div>
  );
};

export default Home;

/* USING OUTLET
Outlet allows us to choose which order to render in our component.
If we put <Outlet /> BEFORE <Directory/> Component then it will render shop content BEFORE Directory on the page. We can do the same by putting it AFTER by placing Outlet after Directory in the div. This RENDERS BOTH ON THE PAGE
<div>
<Directory categories={categories} />
<Outlet />
</div> 
*/

/*
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
*/
