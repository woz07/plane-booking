import TopNav from "../../Components/TopNav";
import { Link } from "react-router-dom";
function Contact(){
    return(
        <div className="pt-32 text-standard bg-slate-300 text-orange-800 font-bold w-full h-screen">
            <TopNav />
            <h1 className="text-large text-center">About us Page</h1>
            <p className="w-[60%] mx-auto my-auto mt-4">
                The creators on this website are: <br />
                - Muhammad Ravat (Tasked with front end development): I was tasked with the client side of development, using 
                React to develop a responsive and sleek looking website to display our data. <br />
                - Sameer (Tasked with back end development):  <br />
                To find out more about us there are some links below: <br />
                <Link to="https://github.com/m0ravat" className="text-black" target="_blank"> - Muhammad's GitHub</Link> <br />
                <Link to="https://www.linkedin.com/in/muhammad-ravat" className="text-black" target="_blank"> - Muhammad's LinkedIn</Link> <br />
            </p>
        </div>
    )
}
export default Contact;