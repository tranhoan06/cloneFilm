import { combineReducers } from "redux";
import reducerMovies from "./reducerMovies";
import reducerAuth from "./reducerAuth";

const rootReducer = combineReducers({
    infoMovies: reducerMovies,
    auth: reducerAuth
})

export default rootReducer;