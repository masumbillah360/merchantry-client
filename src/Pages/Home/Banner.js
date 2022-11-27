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
              <a
                className="inline-flex items-center rounded border-2 border-[#55acee] bg-[#55acee] px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-transparent hover:text-[#55acee] focus:outline-none focus:ring active:opacity-75"
                href="/twitter"
                target="_blank"
                rel="noreferrer"
              >
                Twitter
                <svg
                  className="ml-2 h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
