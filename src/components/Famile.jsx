import "./family.css";
import photo1 from "../assets/9.jpg";
import photo12 from "../assets/12.jpg";
import photo13 from "../assets/13.jpg";
import photo14 from "../assets/w-1.jpg";


const Family = () => {
  return (
    <>
      <div className="FamilySection">
        <h3 className="text-6xl text-orange-900 font-bold">Family & Friends</h3>
        <p className="text-3xl mt-7 text-orange-600">
          Special Occasion sharing with your Best Clade
        </p>
        <div className="grid grid-cols-2 grid-rows-2 gap-3 md:w-1/3 sm:w-96 mt-12">
          <div>
            <img src={photo1} alt="" />
          </div>
          <div>
            <img src={photo12} alt="" />
          </div>
          <div>
            <img src={photo13} alt="" />
          </div>
          <div>
            <img src={photo14} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Family;
