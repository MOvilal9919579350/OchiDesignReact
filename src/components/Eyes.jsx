import React, { useEffect, useRef, useState } from "react";

function Eyes() {
  const [rotate, setRotate] = useState(0);
  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;
      var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle - 180);
    });
  });
  return (
    <div data-scroll data-scroll-section data-scroll-speed='-.08' className="w-full h-screen overflow-hidden bg-white">
      <div className='relative w-full h-full bg-cover bg-center  bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg")]'>
        <div className=" absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] bg-center">
          <div className="flex  justify-between gap-10">
            <div className="w-[11vw] h-[11vw] bg-white rounded-full flex items-center justify-center">
              <div className=" relative w-[7vw] h-[7vw] bg-black rounded-full ">
                <div
                  style={{
                    transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
                  }}
                  className="line w-full h-5 absolute top-1/2 left-1/2 -translate-x-(-50%, -50%)"
                >
                  <div className="w-5 h-5 rounded-full bg-white"></div>
                </div>{" "}
              </div>
            </div>

            <div className="w-[11vw] h-[11vw] bg-white rounded-full flex justify-center items-center">
              <div className=" relative w-[7vw] h-[7vw] bg-black rounded-full">
                <div
                  style={{
                    transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
                  }}
                  className="line w-full h-5 absolute top-1/2 left-1/2 -translate-x-(-50%, -50%)"
                >
                  <div className="w-5 h-5 rounded-full bg-white"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Eyes;
