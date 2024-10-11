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
        path:"contact",
        element: <Contact />,
    },
    {
        path: "login",
        element: <Login />,
    },
    {
        path: "signup",
        element: <Signup />
    }
]
export default routes