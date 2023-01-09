import { GET_NETFLIX_ORGINALS } from "../type";
import * as Types from '../type';

const dataFromLocalStorage = JSON.parse(localStorage.getItem("user"));

const InitialState = {
    user: dataFromLocalStorage || false,
}

const reducer = (state = InitialState, action) => {
    switch (action.type) {
        case "LOGIN":
            if(action.payload.username === "abc" && action.payload.password === "xyz"){
                localStorage.setItem("user", JSON.stringify(true))

                return {...state, user: true}
            }else{
                return state
            }
        default:
            return state
    }
}

export default reducer