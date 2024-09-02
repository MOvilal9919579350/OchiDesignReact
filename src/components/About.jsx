import { motion } from "framer-motion";
import React from "react";
import { FaArrowUp } from "react-icons/fa";

function About() {
  return (
    <div className=" relative w-full min-h-screen bg-yellow-300 ">
      <div className="border-t-2 border-b-2 border-zinc-700 text-3xl p-20">
        <h1>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam
          perspiciatis magnam corporis, adipisci, amet excepturi inventore animi
          debitis deleniti vero nostrum ipsum nobis maiores et laudantium, omnis
          consequuntur voluptatibus placeat minima voluptates autem fuga at
          aspernatur aut. Enim doloribus harum tenetur? Labore beatae aliquid
          minus numquam suscipit, eos quibusdam similique.
        </h1>
      </div>

      {/* <div className='border-t-2 border-b-2 border-zinc-700 text-3xl  flex justify-between '>
       <p className='flex gap text-sm'>Lorem ipsum dolor sit amet. </p>


       <div className='flex flex-col gap-2'>
       <p className='flex gap text-sm '>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio, illo.</p>
       <p className='flex gap text-sm flex-wrap'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis nostrum eaque reiciendis ex vitae eius ipsa blanditiis, natus deserunt? Ratione!</p>
       </div>
      
      </div> */}

      <div className="parrent border-t-2 border-b-2 border-zinc-800 flex justify-between">
        <div>
          <h1 className="text-3xl m-5">Our Approach</h1>

          <div className="  w-[200px] h-[50px] bg-black flex flex-row m-5 rounded-3xl justify-center items-center gap-5">
            <button className="text-white">Read more</button>
            <div className="w-10 h-10  rounded-full flex justify-center items-center rotate-45 bg-white">
              <FaArrowUp />
            </div>
          </div>
        </div>

        <div className="w-[600px] h-[500] m-5 bg-red-600 rounded-3xl overflow-hidden">
          <img
            className="w-full h-full "
            src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default About;
