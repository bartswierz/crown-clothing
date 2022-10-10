import { CATEGORIES_ACTION_TYPES } from "./category.types";
import { createAction } from "../../components/utils/reducer/reducer.utils";

export const setCategories = (categoriesArray) => createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES, categoriesArray);
