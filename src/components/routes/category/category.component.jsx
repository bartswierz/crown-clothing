import { useState, useEffect, Fragment } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import ProductCard from "../../product-card/product-card.component";
// import { CategoriesContext } from "../../../contexts/categories.context";
import { selectCategoriesMap } from "../../../store/categories/category.selector";

import { CategoryContainer, Title } from "./category.styles.jsx";

const Category = () => {
  const { category } = useParams();
  const categoriesMap = useSelector(selectCategoriesMap);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <Fragment>
      <Title className="category-title">{category.toUpperCase()}</Title>

      <CategoryContainer className="category-container">
        {products && products.map((product) => <ProductCard key={product.id} product={product} />)}
      </CategoryContainer>
    </Fragment>
  );
};

export default Category;

// <Fragment> -> using element because we have MULTIPLE elements to display, title above our grid AND the products in a Grid format
