import "./footer.css";

const Footer = () => {
  return (
    <>
      <footer className="footer p-10 mt-52 bg-orange-200 text-orange-900 text-lg">
        <nav className="sm:m-0 lg:ml-52 md:w-96 sm:38">
          <h6 className="">
            <img src="/brand.png" width={280} alt="" />
          </h6>
          <p className="	">
            Embrace the moment, cherish the memories, celebrate life's journey.
            Together, we create lasting impressions. Let joy illuminate our
            hearts.
          </p>
        </nav>
        <nav>
          <h6 className="footer-title text-xl font-semibold">Services</h6>
          <a className="link link-hover">Social Events</a>
          <a className="link link-hover">Professional Events</a>
          <a className="link link-hover">Culturals and Enivorments Events</a>
          <a className="link link-hover">Sport Events</a>
        </nav>
        <nav>
          <div className="grid grid-flow-col gap-4 ">
            <img
              src="/icon-ep.png"
              alt=""
              className="opacity-40 hidden md:block"
            />
          </div>
        </nav>
      </footer>
      <div className="bg-slate-800 text-center">
        <p className="text-lg">2024@copyright: Evenement</p>
      </div>
    </>
  );
};

export default Footer;

{
  /* <div classNameName="max-h-72 mt-52 mb-0 bg-orange-200">
<div classNameName="container mx-auto px-20 pt-14">
  <div classNameName="lg:columns-3">
    <div classNameName="aspect-video">
      <img src="/brand.png" alt="" width={300} />
    </div>
    <div classNameName="aspect-video fot">
      <h1>SERVICES</h1>
      <li classNameName="flex text-xl">Social Events</li>
      <li classNameName="flex text-xl">Professional Events</li>
      <li classNameName="flex text-xl">Cultural & Entertainment Events</li>
      <li classNameName="flex text-xl">Sporting Events</li>
    </div>
    <div classNameName="aspect-video text-center justify-center">
      <img src="/icon-ep.png" alt="" width={100} />
    </div>
  </div>
</div>
</div>
<div classNameName="h-5 bg-slate-800 bg-fixed"></div> */
}
