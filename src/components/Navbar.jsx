import React from "react";

function Navbar() {
  return (
    <div className="Navbar  w-full top-0 bg-white text-black z-[999] px-20 py-8 flex flex-row justify-between items-center ">
      <div className="w-20 h-20 rounded-3xl">
        <img
          src="https://i.ytimg.com/vi/fypjTCWx8nQ/maxresdefault.jpg"
          alt="ochi"
        />
      </div>

      <div className=" flex  gap-5">
        {["Services", "about us", "our work", "insights", "Contact Us"].map(
          (item, index) => (
            <a
              key={index}
              className={`capitalize font-regular ${index === 4 && "ml-32"} `}
            >
              {item}
            </a>
          )
        )}
      </div>
    </div>
  );
}

export default Navbar;
