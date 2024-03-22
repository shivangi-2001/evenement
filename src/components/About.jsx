import "./About.css";
import photo1 from "../assets/4.jpg";
import photo2 from "../assets/w-3.jpg";
import photo3 from "../assets/6.jpg";

const About = () => {
  return (
    <>
      <div className="AboutSection" id="About">
        <div className="grid grid-rows-2 grid-cols-2 gap-0">
          <div className="col-span-1 row-end-1">
            <img
              src="/text.png"
              alt="text"
              width={"370px"}
              style={{ opacity: 0.3 }}
            />
          </div>
          <div class="col-span-1">
            <h1 className="text-orange-900 font-bold md:text-5xl sm:text-2xl mb-14">Our Story</h1>
          </div>
          <div className="row-span-3">
            <img src={photo1} alt="ph1" width={320} />
          </div>
          <div className="col-span-1">
            <img src={photo2} alt="ph1" width={370} height={140} className="" />
          </div>
          <div className="col-span-1">
            <img src={photo3} alt="ph1" width={370} height={140} className="" />
          </div>
        </div>

        <img src="/text.png" width={'100%'} style={{opacity:0.1}} alt="" />
      </div>
    </>
  );
};

export default About;
