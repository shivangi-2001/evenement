import Slider from "../components/Slider";
import About from "../components/About";
import Gallery from "../components/gallery";
import Family from "../components/Famile";
import Company from "../components/company";
import ImageSlider from "../components/ImageSlider";



const Landing = () => {
  return (
    <>
      <Slider />
      <About />
      <Gallery />
      <Family />
      <Company />
      <div className="columns-1 my-44">
        <div className="w-full text-start">
          <h1 className="text-orange-900 sm:text-5xl md:text-8xl">
            CONFERENCES
          </h1>
          <h1
            className="sm:text-5xl md:text-8xl opacity-15"
            style={{
              "-webkit-text-stroke-color": "brown",
              "-webkit-text-stroke-width": "2px",
            }}
          >
            CONFERENCES
          </h1>
        </div>
        <div className="w-full text-center">
          <h1 className="text-orange-900 sm:text-5xl md:text-8xl">
            BRITHDAY PARTIES
          </h1>
          <h1
            className="sm:text-5xl md:text-8xl opacity-20"
            style={{
              "-webkit-text-stroke-color": "brown",
              "-webkit-text-stroke-width": "2px",
            }}
          >
            BRITHDAY PARTIES
          </h1>
        </div>
        <div className="w-full text-end">
          <h1 className="text-orange-900 sm:text-5xl md:text-8xl">
            SPORT EVENT
          </h1>
          <h1
            className="sm:text-5xl md:text-8xl opacity-30"
            style={{
              "-webkit-text-stroke-color": "brown",
              "-webkit-text-stroke-width": "2px",
            }}
          >
            SPORT EVENT
          </h1>
        </div>
      </div>
      <ImageSlider />
    </>
  );
};

export default Landing;
