import { useState } from "react";


const Modelcard = ({model}) => {
    const [isSubsribed, setIssubscribed] = useState(false)

    const handelsubscription = () =>{
        setIssubscribed(true)
    }
    return (
         <div className=" shadow-lg rounded-lg">
                <div className="flex items-center justify-center bg-slate-200 rounded-t-md py-4">
                    <img className="h-40 w-40 rounded-lg" src={model.image} alt="" />
                </div>
                <div className="p-4 space-y-2">
                    <h2 className="text-2xl font-bold">{model.title}</h2>
                    <p className="text-gray-400">{model.description}</p>
                    <div className="text-2xl font-bold">${model.price}<span className="text-sm text-gray-400">/month</span></div>
                    <button onClick={handelsubscription} className="bg-red-500 text-white rounded-lg w-full py-2 font-semibold">{isSubsribed ?"Subscribed":"Subscribe Now" }</button>
                </div>
            </div>
    );
};

export default Modelcard;