import CategoryItem from "../category-item/category-item.component";

import "./directory.styles.scss";
// Off the props we are getting categories
const Directory = ({ categories }) => {
  return (
    <div className="directory-container">
      {/* Destructuring categories element to title */}
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Directory;
