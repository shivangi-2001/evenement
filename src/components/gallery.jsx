import photo3 from "../assets/7.jpg";
import photo1 from "../assets/5.jpg";
import photo8 from "../assets/8.png";
import photo2 from "../assets/10.jpg";
import photo4 from "../assets/1.jpg";
import photo7 from "../assets/2.jpg";
import photo6 from "../assets/6.jpg";

import "./gallery.css";

const Gallery = () => {
  return (
    <>
      <div className="grid grid-row-3 grid-cols-7 gap-3 mt-28">
        <div className="row-span-2 col-span-2">
          <img src={photo3} alt=""className="shadow-md" />
        </div>
        <div className="col-start-3 row-span-2">
          <img src={photo2} alt="" className="shadow-md"/>
        </div>
        <div className="col-start-4 row-span-1 row-start-2 col-span-1">
          <img src={photo1} alt=""className="shadow-md" />
        </div>
        <div className="">
          <img src={photo4} alt="" className="shadow-md"/>
        </div>
        <div className="row-span-3 col-span-2">
          <img src={photo8} alt="" className="shadow-md"/>
        </div>
        <div className=" col-span-1">
          <img src={photo7} alt="" className="shadow-md"/>
        </div>
        <img src={photo6} alt="" className="shadow-md"/>
      </div>
    </>
  );
};

export default Gallery;

{
  /* <div className="row-span-2">
               
            </div>
            <div className="row-span-1  grid-col-1 row-start-2 col-end-2">
                
            </div>
            <div className="row-span-3 grid-col-2 col-span-1">
            </div>
            <div className="row-span-1 col-end-8 row-end-4">
                
            </div>
            <div className="col-span-4 row-span-1">
            <img src={photo3} alt="" />

            </div> */
}
