import React from "react";
const Banner = () => {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-12 md:col-span-12">
        <div className="">
          {/* <div className="rounded-full">
                        <img
                          src="https://placeimg.com/1000/800/arch"
                          alt=""
                          className="w-48 h-48 mx-auto animate-bounce rounded-full hover:animate-spin"
                        />
                      </div> */}
          <div className="my-4">
            <h1 className="text-5xl md:text-7xl font-extrabold text-blue-500 text-center mb-2">
              Merchentry
            </h1>
            <h4 className="font-bold text-center overline">
              This is buy and sell web page for used Laptops
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
