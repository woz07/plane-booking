import Home from "./Pages/Home/home";
import Flights from "./Pages/Flights/flights";
import Contact from "./Pages/Contact/contact";
import Login from "./Pages/Login/login";
import Signup from "./Pages/SignUp/signup";
const routes = [
    {
        path:"/",
        element:<Home />,
    },
    {
        path:"flights",
        element: <Flights />,
    },
    {
        path:"about",
        element: <Contact />,
    },
    {
        path: "user/login",
        element: <Login />,
    },
    {
        path: "user/signup",
        element: <Signup />
    }
]
export default routes