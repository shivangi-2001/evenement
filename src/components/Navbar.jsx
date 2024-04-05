import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div
        className="navbar"
        style={{
          backgroundColor: "transparent",
          position: "fixed",
          zIndex: 100,
        }}
      >
        
        
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost text-orange-900 lg:hidden">
             
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-orange-200 text-orange-900 hover:bg-orange-300 rounded-box w-52"
            >
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <a href="/#About">About</a>
              </li>
              <li>
                <a href="/pricing_contact">pricing & Contact</a>
              </li>
            </ul>
          </div>
          <Link to={'/'}><img src="/brand.png" alt="icon" height={"100%"} width={"200px"} /></Link>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <a href="/#About">About</a>
            </li>
            <li>
              <a href="/pricing_contact">pricing & Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
