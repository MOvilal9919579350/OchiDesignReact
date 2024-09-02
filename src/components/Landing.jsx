import { motion } from "framer-motion";
import React from "react";
import { IoArrowUpOutline } from "react-icons/io5";

function Landing() {
  return (
    <div
      // data-scroll
      // data-scroll-section
      // data-scroll-speed="-.3"
      className="w-full min-h-screen bg-white p-10"
    >
      <div className="TextStructure mt-40 p-20">
        {["we create", "eye-opening", "presentation"].map((item, index) => {
          return (
            <div className="masker">
              <div className="w-fit flex items-center ">
                {index === 1 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "9vw" }}
                    transition={{ ease: [0.64, 0, 0.78, 0], duration: 2.4 }}
                    className=" w-[9vw] h-[5vw] bg-red-600"
                  >
                    <img
                      className="w-full h-full"
                      src="https://assets.awwwards.com/awards/images/2022/09/ochi-cover.jpg"
                      alt=""
                    />
                  </motion.div>
                )}

                <h1 className="flex items-center uppercase  text-black  tracking-tighter text-[9vw]  leading-[7vw] h-full ">
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>

      <div className="pt-20">
        <div className=" border-t-2 border-zinc-150  mt-10 p-10 flex justify-between ">
          {[
            "For public and private companies",
            "From the first pitch to IPO",
          ].map((item, index) => (
            <p className=" p-2 rounded-3xl bg-black hover:bg-zinc-400 text-white hover:text-black hover:scale-110">
              {item}
            </p>
          ))}
          <div className="flex flex-row gap-5 items-center">
            <h1 className="px-7 py-2  border-5 rounded-xl bg-black hover:bg-zinc-400 text-white hover:text-black hover:scale-110">
              start the project
            </h1>

            <h1 className="w-10 h-10 rounded-full bg-zinc-100 flex justify-center items-center rotate-45">
              <IoArrowUpOutline />
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
