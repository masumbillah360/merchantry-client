import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";

import slider1 from "../../assets/sliderImage/slider-1.jpg";
import slider2 from "../../assets/sliderImage/slider-2.jpg";
import slider3 from "../../assets/sliderImage/slider-3.jpg";
import slider4 from "../../assets/sliderImage/slider-4.jpg";
import slider5 from "../../assets/sliderImage/slider-5.jpg";
import slider6 from "../../assets/sliderImage/slider-6.jpg";

const Banner = () => {
  const bannerItems = [
    { thumbnail: slider1 },
    { thumbnail: slider2 },
    { thumbnail: slider3 },
    { thumbnail: slider4 },
    { thumbnail: slider5 },
    { thumbnail: slider6 },
  ];
  return (
    <div className="md:mb-10 mt-7">
      <Carousel showArrows={true} showThumbs={false}>
        {bannerItems.map((bannerItem, idx) => (
          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-7 justify-center items-center"
            key={idx}
          >
            <div className="text-center md:text-end order-2 md:order-1">
              <p className=" font-bold text-primary">Trusted</p>
              <h2 className="text-3xl font-bold">
                Buy Your Best Product From Us
              </h2>
              <p className="text-base text-gray-700 md:text-lg">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae. explicabo.
              </p>
              <div className="flex items-center justify-center md:justify-end my-4 mb-10 lg:mb-0">
                <Link
                  className="inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
                  to="/"
                >
                  Let's Start
                </Link>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <img
                src={bannerItem.thumbnail}
                className=" w-full h-full  rounded shadow-2xl "
                alt=""
              />
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Banner;
