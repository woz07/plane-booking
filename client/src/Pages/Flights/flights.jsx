import TopNav from "../../Components/TopNav";
function Flights(){
    const flights = [
        {destination:"Kenya", date:new Date(2025, 9, 27),from:"Heathrow",capacity:"45",price:"$43"},
        {destination:"London", date:new Date(2024, 11, 13),from:"Luton",capacity:"20",price:"$6542"},
        {destination:"London", date:new Date(2024, 11, 13),from:"Luton",capacity:"20",price:"$6542"},
        {destination:"London", date:new Date(2024, 11, 13),from:"Luton",capacity:"20",price:"$6542"},
        {destination:"London", date:new Date(2024, 11, 13),from:"Luton",capacity:"20",price:"$6542"},
        {destination:"London", date:new Date(2024, 11, 13),from:"Luton",capacity:"20",price:"$6542"},
        {destination:"London", date:new Date(2024, 11, 13),from:"Luton",capacity:"20",price:"$6542"},
        {destination:"London", date:new Date(2024, 11, 13),from:"Luton",capacity:"20",price:"$6542"},

        {destination:"London", date:new Date(2024, 11, 13),from:"Luton",capacity:"20",price:"$6542"},
    ]
    return(
        <div className="pt-32 text-standard bg-slate-300 text-orange-800 font-bold w-full h-[100%] px-10 ">
            <TopNav />
            <h1 className="text-center text-large mb-10">Flights</h1>
            <div className="width-[80%] text-center flex flex-wrap justify-start gap-x-10 mx-auto my-auto">
            {flights.map((flight, index) => (
                <div key={index} className="w-72 p-4 bg-black text-white mb-8">
                    <h1 className="border-b-2 border-white mb-4">
                        {flight.from} to {flight.destination}
                    </h1>
                    <p>
                        Date: {flight.date.toDateString()} <br />
                        Price: {flight.price} <br />
                        Capacity: {flight.capacity}
                    </p>
                </div>
            ))}
            </div>
        </div>
    )
}
export default Flights;