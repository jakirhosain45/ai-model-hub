import { use, } from "react";
import Modelcard from "./Modelcard";

const Models = ({modelspromise}) => {
   const models =use(modelspromise)
   
   
    return (
        <div>
            <div className="py-5">
                <h1 className="text-center text-4xl font-bold">Choose Your AI Model</h1>
            <p className="text-center text-gray-400 py-3">One Subsription gives you access to all frontier AI Models</p>
            </div>
        <div className="container  mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8 py-7 px-2">
            {models.map(model=> 
           <Modelcard model={model}></Modelcard>
        )}
        </div>
        </div>
    );
};

export default Models;