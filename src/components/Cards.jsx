import React from "react";
import { MdStars } from "react-icons/md";

function Cards() {
  return (
    <div className="w-full h-screen bg-white relative">
      <div className=" flex justify-center px-10 gap-10  m-2">
        <div className=" hover:scale-110 Card relative rounded-xl w-2/3 h-[60vh]  bg-green-700 flex justify-center items-center">
          <h1 className="text-white text-7xl font-semibold">Ochi</h1>
       
                    
                    <div className=" absolute px-5 py-2 mt-72 mr-[30vw]  rounded-3xl bg-black hover:bg-zinc-400 text-white hover:text-black hover:scale-110">
                       <h1>2020-2032</h1>
                    </div>
                   
         </div>       
         <div className="hover:scale-110 Card rounded-xl w-1/3 h-[60vh] bg-zinc-900 flex justify-center items-center">
         <div>
         <h1 className="text-white text-6xl font-semibold block">clutch</h1>
         <div className="flex flex-row gap-2 ">
         <span className="bg-white rounded-full"> <MdStars /></span>
         <span className="bg-white rounded-full"> <MdStars /></span>
         <span className="bg-white rounded-full"> <MdStars /></span>
         <span className="bg-white rounded-full"> <MdStars /></span>
         <span className="bg-white rounded-full"> <MdStars /></span>


         </div>
      

         </div>
        

          

          <div className=" absolute px-5 py-2 mt-72 mr-20  rounded-3xl bg-black hover:bg-zinc-400 text-white hover:text-black hover:scale-110">
                       <h1>Rating 5.0 on Clucth</h1>
                      
                    </div>

         </div>
         <div className="hover:scale-110 Card rounded-xl w-1/3 h-[60vh] bg-zinc-900 flex justify-center items-center overflow-hidden">
          <img
            className="rounded-full "
            src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"
            alt=""
          />

<div className=" absolute px-5 py-2 mt-72  mr-7  rounded-3xl bg-black hover:bg-zinc-400 text-white hover:text-black hover:scale-110"> 
                       <h1>Business Bootcamp Alumini</h1>
                    </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
