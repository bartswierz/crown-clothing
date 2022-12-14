import { Fragment } from "react";
import { useSelector } from "react-redux";

import { selectCategoriesMap, selectCategoriesIsLoading } from "../../../store/categories/category.selector";

import CategoryPreview from "../../category-preview/category-preview.component";
import Spinner from "../../spinner/spinner.component";
// import { CategoriesContext } from "../../../contexts/categories.context";

// Iterate through our shop-data json file with MAP
const CategoriesPreview = () => {
  // const { categoriesMap } = useContext(CategoriesContext);
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);

  return (
    <Fragment>
      {isLoading ? (
        <Spinner />
      ) : (
        Object.keys(categoriesMap).map((key) => {
          const products = categoriesMap[key];
          return <CategoryPreview key={key} title={key} products={products} />;
        })
      )}
    </Fragment>
  );
};

export default CategoriesPreview;
