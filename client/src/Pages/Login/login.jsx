import TopNav from "../../Components/TopNav";
function Login(){
    return(
        <div className="pt-32 text-standard bg-slate-300 text-orange-800 font-bold w-full h-screen">
            <TopNav />
            <div className="w-[60%] min-h-80 bg-black text-white mx-auto my-auto mt-4 text-center p-4">
                Login
            </div>
        </div>
    )
}
export default Login;