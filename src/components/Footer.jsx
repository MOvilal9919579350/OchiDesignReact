import { motion } from "framer-motion";
import React from "react";

function Footer() {
  
  return (
    <div 
    
    data-scroll
      data-scroll-section
      data-scroll-speed=".08"
    className="w-full h-screen bg-white py-10 relative">
      <div className="tracking-tighter text-black  flex justify-between">
        <div className="font-semibold text-[6vw] leading-none uppercase">
          <h1 className="">Eye-</h1>
          <h1>Opening</h1>

          <div className="absolute w-[8vw] h-[8vw] bottom-0 left-2">
            <img
              src="https://i.ytimg.com/vi/fypjTCWx8nQ/maxresdefault.jpg"
              alt=""
            />
          </div>
        </div>

        <div className="">
          <h1 className="font-semibold text-[6vw] leading-1 uppercase">
            Presentation
          </h1>
          <div className="flex flex-wrap gap-20 ">
            <div className="flex flex-col">
              <h1>S</h1>
              <a href="#">instagram</a>
              <a href="#">LinkedIn</a>
              <a href="#">github</a>
              <a href="#">pintrest</a>
              <a href="#">leetcode</a>
              <a href="#">HackerRank</a>
            </div>

            <div className="flex flex-col">
              <h1>L</h1>
              <a href="#">instagram</a>
              <a href="#">LinkedIn</a>
              <a href="#">github</a>
              <a href="#">pintrest</a>
              <a href="#">leetcode</a>
              <a href="#">HackerRank</a>
            </div>

            <div className="flex flex-col">
              <h1>N</h1>
              <a href="#">instagram</a>
              <a href="#">LinkedIn</a>
              <a href="#">github</a>
              <a href="#">pintrest</a>
              <a href="#">leetcode</a>
              <a href="#">HackerRank</a>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Footer;
