import { Link } from "react-router-dom";
import plane from "../plane.svg";
import { useState } from "react";
function TopNav(){
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
}
  return (
    <nav className="fixed top-0 bg-orange-800 text-white left-0 w-full h-20 flex items-center justify-between px-4 z-10 max-[900px]:justify-norma">
      <ul className='float-left'>
        <li><button onClick={toggleSidebar} className="flex items-center gap-1 font-bold text-standard round"><img src={plane} alt="Logo" className='h-16 dark:bg-white text-white rounded-2xl  p-1 ' />Plane Booking Prototype</button></li>
      </ul>
      <ul className="flex space-x-[20%] max-[750px]:hidden right-0 pr-52">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/flights">Flights</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to ="/login">Login</Link></li>
        <li><Link to="/signup">Signup</Link></li>
      </ul>

      {isSidebarOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-900 text-white flex flex-col items-center justify-center z-20">
          <button onClick={toggleSidebar} className="absolute top-5 right-5 text-3xl">
            &times;
          </button>
          <ul className="space-y-8 text-3xl">
            <img src={plane} alt="Logo" className="w-20 bg-white pt-1 rounded-full" />
            <li><Link to="/" onClick={toggleSidebar}>Home</Link></li>
            <li><Link to="/flights" onClick={toggleSidebar}>Flights</Link></li>
            <li><Link to="/contact" onClick={toggleSidebar}>Contact</Link></li>
            <li><Link to="/login" onClick={toggleSidebar}>Login</Link></li>
            <li><Link to="/signup" onClick={toggleSidebar}>Signup</Link></li>
          </ul>
        </div>
      )}
    </nav>
  );
}
export default TopNav;