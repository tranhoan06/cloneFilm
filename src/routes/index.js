import Login from "../pages/Login/Login"
import Home from "../pages/Home/Home"


export const PUBLIC_ROUTES = [
    {path: "/login", component: Login,},
    {path: "/register", component: Login,},
]

export const PRIVATE_ROUTES = [
    {path: "/", component: Home,},
]