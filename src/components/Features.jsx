import React, { useState } from "react";

function Features() {
  var [a, b] = useState(false);
  var [c, d] = useState(false);
  return (
    <div className="w-full py-10 ">
      <div className=" border-b-2 border-zinc-300 pb-10">
        <h1 className="text-7xl text-white">Feature Projects</h1>
      </div>

      {/* 1 */}

      <div className="w-full">
        <div className="relative cards flex justify-between m-10">
          {/* Card1 */}
          <div
            onMouseEnter={() => d(!c)}
            className="hover:scale-110 Container w-[45vw] h-[32vw]"
          >
            <div className="rounded-xl absolute w-[10vw] h-[10vw] top-1/2 left-1/3">
              <h1 className="text-6xl text-green-500 font-semibold">
                {c === true && "CarboSpaceShip"}
              </h1>
            </div>

            <div className="card1 w-full h-full rounded-xl overflow-hidden ">
              <img
                className="w-full h-full bg-cover rounded-xl"
                src="https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-663x551.png"
                alt=""
              />
            </div>
          </div>

          {/* Card2 */}

          <div
            onMouseEnter={() => d(!c)}
            className="hover:scale-110 container w-[45vw] h-[32vw]  overflow-hidden"
          >
            <div className="rounded-xl absolute w-[10vw] h-[10vw] top-1/2 right-1/2 -translate-x-[90%]">
              <h1 className="text-6xl text-red-700 font-semibold">
                {c === false && "WHERE_HERITAGE"}
              </h1>
            </div>
            <div className="card2 w-full h-full rounded-xl overflow-hidden ">
              <img
                className="w-full h-full bg-cover object-cover"
                src="https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-663x551.png"
                alt=""
              />
            </div>
          </div>
        </div>
        {/* card3 */}
        <div className="flex gap-36">
          <div className=" text-white flex gap-2 rounded-2xl  ml-10">
            <div className="rounded-2xl px-2 py-1 bg-black hover:bg-zinc-400 text-white hover:text-black hover:scale-105 hover: text-2xl capitalize flex items-center">
              <a href="">Branded Template</a>
            </div>
            <div className="rounded-xl px-2 py-1 bg-black hover:bg-zinc-400 text-white hover:text-black hover:scale-105 hover: text-2xl capitalize flex items-center">
              <a href="">Sales Deck</a>
            </div>
            <div className="rounded-xl px-2 py-1 bg-black hover:bg-zinc-400 text-white hover:text-black hover:scale-105 hover: text-xl uppercase">
              <a href="">Social Media Template</a>
            </div>
          </div>

          <div className="px-2 py-1 rounded-xl bg-black hover:bg-zinc-400 text-white hover:text-black hover:scale-105 hover: text-2xl capitalize flex items-center">
            <a href="">Pich Deck</a>
          </div>
        </div>
      </div>

      {/* 2 */}

      <div className="w-full ">
        <div className=" cards flex justify-between m-10 relative uppercase">
          <div
            onMouseEnter={() => b(!a)}
            className="hover:scale-110 container w-[45vw] h-[32vw] "
          >
            <div className="rounded-xl absolute w-[10vw] h-[10vw] top-1/2 left-1/2 -translate-x-[40%]">
              <h1 className="text-6xl text-blue-500">{a === true && "FYDE"}</h1>
            </div>

            <div className="w-full h-full overflow-hidden rounded-xl">
              {" "}
              <img
                className="w-full h-full object-cover"
                src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
                alt=""
              />
            </div>
          </div>

          <div
            onMouseEnter={() => b(!a)}
            className="hover:scale-110 container w-[47vw] h-[32vw] "
          >
            <div className="rounded-xl absolute w-[10vw] h-[10vw] top-1/2 left-1/2 -translate-x-[40%]">
              <h1 className="text-6xl text-blue-500">
                {a === false ? "VISE" : ""}
              </h1>
            </div>

            <div className="w-full h-full overflow-hidden rounded-xl">
              {" "}
              <img
                className="w-full h-full object-cover"
                src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="flex gap-36">
          <div className=" text-white flex gap-2 rounded-2xl  ml-10">
            <div className="rounded-2xl px-2 py-1 bg-black hover:bg-zinc-400 text-white hover:text-black hover:scale-105 hover: text-2xl capitalize flex items-center">
              <a href="">Branded Template</a>
            </div>
            <div className="rounded-2xl px-2 py-1 bg-black hover:bg-zinc-400 text-white hover:text-black hover:scale-105 hover: text-2xl capitalize flex items-center">
              <a href="">Sales Deck</a>
            </div>
            <div className=" rounded-2xl px-2 py-1 bg-black hover:bg-zinc-400 text-white hover:text-black hover:scale-105 hover: ">
              <a href="">Social Media Template</a>
            </div>
          </div>

          <div className="px-2 py-1 rounded-xl  bg-black hover:bg-zinc-400 text-white hover:text-black hover:scale-105 hover: text-2xl capitalize flex items-center">
            <a href="">Pich Deck</a>
          </div>
        </div>
      </div>

      {/* 2  closed*/}

      <div className="flex justify-center mt-10  uppercase">
        <div className="w-[31vw] flex justify-center">
          <div className="px-20 py-2  bg-black hover:bg-zinc-400 text-white hover:text-black hover:scale-105 hover: text-2xl capitalize flex items-center whitespace-nowrap rounded-xl">
            <a href="#">view all cases studies</a>
          </div>
        </div>
      </div>

      {/* <div className="mt-10"> 
      
            <h1 className="text-7xl text-white">Clients Reviws</h1>
            
            <div className="border-white pb-5 border-b-2 ">

            </div>
       
      </div> */}
    </div>
  );
}

export default Features;
