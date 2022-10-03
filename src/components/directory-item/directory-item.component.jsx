import "./directory-item.styles.scss";

// Will receive ENTIRE OBJECT as a PROP
const DirectoryItem = ({ category }) => {
  // CANNOT PUT id here, have to put it where map is CALLED
  // <div key={id} className="category-container">

  // Destructuring passed category
  const { imageUrl, title } = category;
  return (
    <div className="directory-item-container">
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="body">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

export default DirectoryItem;
