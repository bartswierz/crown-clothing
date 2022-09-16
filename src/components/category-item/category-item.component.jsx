import "./category-item.styles.scss";

// Will receive ENTIRE OBJECT as a PROP
const CategoryItem = ({ category }) => {
  // CANNOT PUT id here, have to put it where map is CALLED
  // <div key={id} className="category-container">

  // Destructuring passed category
  const { imageUrl, title } = category;
  return (
    <div className="category-container">
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="category-body-container">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

export default CategoryItem;
