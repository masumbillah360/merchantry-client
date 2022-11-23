import React from "react";
const Banner = () => {
  return (
    <>
      <div
        className="hero min-h-screen"
        // style={{
        //   backgroundImage: `url("https://placeimg.com/1000/800/arch")`,
        //   backgroundSize: "conver",
        //   height: "100%",
        //   width: "100%",
        // }}
      >
        <div className="hero"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="">
            {/* <div className="carousel w-full rounded-2xl col-span-12 md:col-span-5 lg:max-w-md mx-auto">
              <div id="slide1" className="carousel-item relative w-full">
                <img
                  src="https://placeimg.com/800/200/arch"
                  className="w-full h-60 rounded-2xl"
                  alt=""
                />
                <div className="absolute flex justify-end transform -translate-y-1/2 right-5 bottom-0">
                  <a href="#slide4" className="bg-yellow-500 rounded-full">
                    <FaArrowCircleLeft className="text-5xl text-blue-600" />
                  </a>
                  <a href="#slide2" className="bg-yellow-600 rounded-full">
                    <FaArrowCircleRight className="text-5xl text-blue-600" />
                  </a>
                </div>
              </div>
              <div id="slide2" className="carousel-item relative w-full">
                <img
                  src="https://placeimg.com/800/200/arch"
                  className="w-full rounded-2xl"
                  alt=""
                />
                <div className="absolute flex justify-end transform -translate-y-1/2 right-5 bottom-0">
                  <a href="#slide1" className="bg-yellow-500 rounded-full">
                    <FaArrowCircleLeft className="text-5xl text-blue-600" />
                  </a>
                  <a href="#slide3" className="bg-yellow-600 rounded-full">
                    <FaArrowCircleRight className="text-5xl text-blue-600" />
                  </a>
                </div>
              </div>
              <div id="slide3" className="carousel-item relative w-full">
                <img
                  src="https://placeimg.com/800/200/arch"
                  className="w-full rounded-2xl"
                  alt=""
                />
                <div className="absolute flex justify-end transform -translate-y-1/2 right-5 bottom-0">
                  <a href="#slide2" className="bg-yellow-500 rounded-full">
                    <FaArrowCircleLeft className="text-5xl text-blue-600" />
                  </a>
                  <a href="#slide4" className="bg-yellow-600 rounded-full">
                    <FaArrowCircleRight className="text-5xl text-blue-600" />
                  </a>
                </div>
              </div>
              <div id="slide4" className="carousel-item relative w-full">
                <img
                  src="https://placeimg.com/800/200/arch"
                  className="w-full rounded-2xl"
                  alt=""
                />
                <div className="absolute flex justify-end transform -translate-y-1/2 right-5 bottom-0">
                  <a href="#slide3" className="bg-yellow-500 rounded-full">
                    <FaArrowCircleLeft className="text-5xl text-blue-600" />
                  </a>
                  <a href="#slide1" className="bg-yellow-600 rounded-full">
                    <FaArrowCircleRight className="text-5xl text-blue-600" />
                  </a>
                </div>
              </div>
            </div> */}
            <div className="grid grid-cols-12">
              <div className="col-span-12 md:col-span-12">
                <div className="flex justify-center items-center h-full flex-col px-4">
                  <div className="text-black">
                    <div className="grid grid-cols-1">
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
                        <p className="max-w-sm mx-auto text-center">
                          Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit. Eveniet provident sunt animi dolor, inventore
                          minus voluptates
                        </p>
                      </div>
                      {/* <div className="rounded-full hidden lg:block">
                        <img
                          src="https://placeimg.com/1000/800/arch"
                          alt=""
                          className="w-48 h-48 mx-auto animate-bounce rounded-full"
                        />
                      </div> */}
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="card border shadow-xl">
                        <div className="card-body items-center text-center">
                          <h2 className="card-title">Lenevo</h2>
                          <p>We are using cookies for no reason.</p>
                        </div>
                      </div>
                      <div className="card border shadow-xl">
                        <div className="card-body items-center text-center">
                          <h2 className="card-title">Dell</h2>
                          <p>We are using cookies for no reason.</p>
                        </div>
                      </div>
                      <div className="card border shadow-xl">
                        <div className="card-body items-center text-center">
                          <h2 className="card-title">HP</h2>
                          <p>We are using cookies for no reason.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
