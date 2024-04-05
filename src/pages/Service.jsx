import p1 from "../assets/A.jpg";
import p2 from "../assets/B.jpg";
import p3 from "../assets/C.jpg";
import p5 from "../assets/D.jpg";
import p6 from "../assets/J.jpg";
import p7 from "../assets/F.jpg";
import p8 from "../assets/G.jpg";
import p9 from "../assets/H.jpg";
import p10 from "../assets/E.jpg";
import p11 from "../assets/K.jpg";
import p12 from "../assets/L.jpg";
import p13 from "../assets/I.jpg";
import p14 from "../assets/P.jpg";
import p15 from "../assets/Q.jpg";
import p16 from "../assets/R.jpg";
import p17 from "../assets/S.jpg";


const Service = () => {
  return (
    <>
      <div className="relative">
        <h1 className="absolute tracking-wide top-80 left-0 right-0 text-center hidden lg:block lg:text-9xl bg-slate-100 opacity-60 text-white"
            style={{
                "-webkit-text-stroke-width": "3px",
                "-webkit-text-stroke-color": "black"
            }}>
          Social Event
        </h1>
        <div className="grid grid-flow-col grid-cols-4 gap-4" id="social">
          <div>
            <img src={p1} alt="p1" />
          </div>
          <div>
            <img src={p2} alt="p1" />
          </div>
          <div>
            <img src={p3} alt="p1" />
          </div>
          <div>
            <img src={p5} alt="p1" />
          </div>
        </div>

        <h1 className="absolute mt-96 tracking-wide top-1/4 left-0 right-0 text-center hidden lg:block lg:text-9xl bg-slate-100 opacity-70 text-white"
            style={{
                "-webkit-text-stroke-width": "3px",
                "-webkit-text-stroke-color": "black"
            }}>
          Professional Event
        </h1>
        <div className="mt-20 grid grid-flow-col grid-cols-4 gap-4" id="professional">
          <div>
            <img src={p9} alt="p1" />
          </div>
          <div>
            <img src={p8} alt="p1" />
          </div>
          <div>
            <img src={p7} alt="p1" />
          </div>
          <div>
            <img src={p6} alt="p1" />
          </div>
        </div>

        <h1 className="absolute mt-96 tracking-wide top-2/4 left-0 right-0 text-center hidden lg:block lg:text-9xl bg-slate-100 opacity-70 text-white"
            style={{
                "-webkit-text-stroke-width": "3px",
                "-webkit-text-stroke-color": "black"
            }}>
          Cultural Event
        </h1>
        <div className="mt-20 grid grid-flow-col grid-cols-4 gap-4" id="cultural">
          <div>
            <img src={p10} alt="p1" />
          </div>
          <div>
            <img src={p11} alt="p1" />
          </div>
          <div>
            <img src={p12} alt="p1" />
          </div>
          <div>
            <img src={p13} alt="p1" />
          </div>
        </div>


        <h1 className="absolute mt-96 tracking-wide top-3/4 left-0 right-0 text-center hidden lg:block lg:text-9xl bg-slate-100 opacity-70 text-white"
            style={{
                "-webkit-text-stroke-width": "3px",
                "-webkit-text-stroke-color": "black"
            }}>
          Sport Event
        </h1>
        <div className="mt-20 grid grid-flow-col grid-cols-4 gap-4" id="sports">
          <div >
            <img src={p14} alt="p1" className="h-96 w-full" />
          </div>
          <div>
            <img src={p15} alt="p1" className="h-96 w-full"  />
          </div>
          <div>
            <img src={p16} alt="p1"className="h-96 w-full"  />
          </div>
          <div>
            <img src={p17} alt="p1" className="h-96 w-full" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
