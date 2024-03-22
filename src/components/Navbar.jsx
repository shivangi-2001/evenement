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
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a href="/service">Services</a>
              </li>
              <li>
                <a href="#About">About</a>
              </li>
              <li>
                <a>pricing & Contact</a>
              </li>
            </ul>
          </div>
          <img src="/brand.png" alt="icon" height={"100%"} width={"200px"} />
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a href="/services">Services</a>
            </li>
            <li>
              <a href="#About">About</a>
            </li>
            <li>
              <a>pricing & Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
