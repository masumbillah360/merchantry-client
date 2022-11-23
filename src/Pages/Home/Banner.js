import React from "react";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
const Banner = () => {
  return (
    <div className="grid min-h-screen py-10 grid-cols-1 md:grid-cols-2 gap-5">
      <div className="carousel w-full rounded-2xl">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src="https://placeimg.com/800/200/arch"
            className="w-full rounded-2xl"
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
      </div>

      <div className="mockup-window border bg-base-300 text-yellow-600">
        <div className="flex justify-center items-center h-full flex-col px-4 py-16 bg-base-200">
          <div className="text-black">
            <h1 className="text-5xl font-bold text-blue-500">Merchentry</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              provident sunt animi dolor, inventore minus voluptates. Accusamus
              laudantium illo, eligendi dolore expedita iste molestiae quas
              recusandae adipisci velit, inventore reiciendis.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
