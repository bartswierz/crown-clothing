import "./directory-item.styles";

import { useNavigate } from "react-router-dom";

import { BackgroundImage, Body, DirectoryItemContainer } from "./directory-item.styles";

// Will receive ENTIRE OBJECT as a PROP
const DirectoryItem = ({ category }) => {
  // CANNOT PUT id here, have to put it where map is CALLED
  // <div key={id} className="category-container">

  // Destructuring passed category
  const { imageUrl, title, route } = category;
  const navigate = useNavigate();

  const onNavigateHandler = () => navigate(route);

  return (
    <DirectoryItemContainer onClick={onNavigateHandler}>
      <BackgroundImage imageUrl={imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
