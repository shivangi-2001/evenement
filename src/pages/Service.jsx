import p1 from '../assets/1.jpg';
import p2 from '../assets/2.jpg';
import p3 from '../assets/3.jpg';
import p5 from '../assets/5.jpg';
import p6  from '../assets/6.jpg';

const Service = () => {
    return ( 
        <>
        <div className="grid-1 grid-rows-1 grid-col-5 gap-3">
            <div className='grid-col-1'>
                <img src={p1} alt="" />
            </div>
            <div className='grid-col-1'>
                <img src={p2} alt="" />
            </div>
            <div className='grid-col-1'>
                <img src={p3} alt="" />
            </div>
            <div className='grid-col-1'>
                <img src={p5} alt="" />
            </div>
            <div className='grid-col-1'>
                <img src={p6} alt="" />
            </div>
        </div>
        </>
     );
}
 
export default Service;