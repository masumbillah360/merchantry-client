import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";

const Banner = () => {
  return (
    <div className="md:mb-10 mt-7">
      <section className="relative bg-[url(https://i.ibb.co/ysThSmj/HP-Pro-Book-640-G2-a.jpg)] bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-white/95 sm:to-white/25"></div>

        <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
          <div className="max-w-xl text-center sm:text-left">
            <h1 className="text-3xl font-extrabold sm:text-5xl">
              Choose your
              <strong className="block font-extrabold text-primary">
                Best deal.
              </strong>
            </h1>

            <p className="mt-4 max-w-lg sm:text-xl sm:leading-relaxed">
              We offer something that is incredible for you. So book now without
              delay.
            </p>

            <div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start text-center">
              <Link to="/">
                <Button>Let's Start</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
