import "./company.css";
import photo1 from "../assets/14.jpg";
import photo2 from "../assets/16.jpg";
import photo3 from "../assets/17.jpg";


const Company = () => {
  return (
    <>
      <div className="AboutSection" id="company">
        <div className="grid grid-rows-2 grid-cols-2 gap-3">
          <div className="col-span-1 row-end-1">
            <img
              src="/text.png"
              alt="text"
              width={"370px"}
              style={{ opacity: 0.3 }}
            />
          </div>
          <div class="col-span-1">
            <h1 className="text-orange-900 font-bold md:text-5xl sm:text-2xl mb-14">
              Company Event
            </h1>
          </div>
          <div className="row-span-3">
            <img src={photo2} alt="ph1" width={320} />
          </div>
          <div className="col-span-1">
            <img src={photo1} alt="ph1" width={370} height={140} className="" />
          </div>
          <div className="col-span-1">
            <img src={photo3} alt="ph1" width={370} height={140} className="" />
          </div>
        </div>

      </div>
    </>
  );
};

export default Company;
