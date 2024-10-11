import TopNav from "../../Components/TopNav";
function Login(){
    return(
        <div className="pt-32 text-standard bg-slate-300 text-orange-800 font-bold w-full h-screen">
            <TopNav />
            <div className="w-[60%] min-h-80 bg-black  text-white mx-auto my-auto mt-4 text-center p-4">
                <form action="" className="bg-slate-800 h-80 p-2">
                    <legend>Login</legend>
                    <label htmlFor="">Username: 
                        <input type="text" name="" id="" className="ml-4 mt-4"/>
                    </label> <br />
                    <label htmlFor="">Password:
                        <input type="text" name="" id="" className="ml-4 mt-3" />
                    </label> <br />
                    <input type="submit" value="Login" className="bg-white text-black mt-10 p-3" />
                </form>
            </div>
        </div>
    )
}
export default Login;