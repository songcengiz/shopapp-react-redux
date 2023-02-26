import { combineReducers } from "redux";
import changeCategoryReducer from "./changeCategoryReducer";
import categoryListReducer from "./categoryListReducer";
import productListReducer from "./productListReducer";
import cartReducer from "./cartReducer";
import sendProductReducer from "./sendProductReducer";
import authorListReducer from "./authorListReducer";
import changeAuthorReducer from "./changeAuthorReducer";
import publisherListReducer from "./publisherListReducer";
import sendPublisherReducer from "./sendPublisherReducer";
import sendAuthorReducer from "./sendAuthorReducer";
import sendCategoryReducer from "./sendCategoryReducer";
import changePublisherReducer from "./changePublisherReducer"

const rootReducer = combineReducers({
    changeCategoryReducer,
    categoryListReducer,
    productListReducer,
    cartReducer,
    sendProductReducer,
    authorListReducer,
    changeAuthorReducer,
    publisherListReducer,
    sendPublisherReducer,
    sendAuthorReducer,
    sendCategoryReducer,
    changePublisherReducer

})

export default rootReducer;