import { createStore } from "redux";
import rootReducer from "./rootReducer";




const store = createStore(rootReducer);

store.subscribe(() => {
	localStorage['redux-store'] = JSON.stringify(store.getState())
})

export default store;

