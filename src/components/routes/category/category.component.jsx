import { useState, useEffect, Fragment } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import ProductCard from "../../product-card/product-card.component";
import Spinner from "../../../components/spinner/spinner.component";
// import { CategoriesContext } from "../../../contexts/categories.context";
import { selectCategoriesIsLoading, selectCategoriesMap } from "../../../store/categories/category.selector";

import { CategoryContainer, Title } from "./category.styles";

const Category = () => {
  const { category } = useParams();
  // console.log("render/re-rendering category component");
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    // console.log("effect fied calling setProducts");
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <Fragment>
      <Title className="category-title">{category.toUpperCase()}</Title>
      {isLoading ? (
        <Spinner />
      ) : (
        <CategoryContainer className="category-container">
          {products && products.map((product) => <ProductCard key={product.id} product={product} />)}
        </CategoryContainer>
      )}
    </Fragment>
  );
};

export default Category;

// <Fragment> -> using element because we have MULTIPLE elements to display, title above our grid AND the products in a Grid format

//  isLoading ? <Spinner /> :  "if isLoading is True, then we will RENDER the SPINNER COMPONENT". If False then we will RENDER the CATEGORY CONTAINER COMPONENT
