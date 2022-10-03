import DirectoryItem from "../directory-item/directory-item.component";

import "./directory.styles.scss";
// Off the props we are getting categories
const Directory = ({ categories }) => {
  return (
    <div className="directory-container">
      {/* Destructuring categories element to title */}
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Directory;
