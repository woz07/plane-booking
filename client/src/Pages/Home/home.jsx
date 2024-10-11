import TopNav from "../../Components/TopNav";
function Home(){
    return(
        <div className="pt-32 text-center text-standard bg-slate-300 text-orange-800 font-bold w-full h-screen">
            <TopNav />
            <h1 className="text-large">Home Page</h1>
            <p className="w-[60%] mx-auto my-auto mt-4">
                Welcome, this is a plane tracker prototype designed to integrate both a front end and backend. You can create an
                account via the navbar, find out more about us through the about site or check the mock flights we have in store. 
            </p>
        </div>
    )
}
export default Home;