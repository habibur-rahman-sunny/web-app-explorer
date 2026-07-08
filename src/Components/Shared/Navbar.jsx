import logo from "/images/logo.png";
import { FaGithub } from "react-icons/fa";
import ReusableNav from "./ReusableNav";
import { useEffect, useRef, useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const menuRef = useRef(null);

  const navItems = [
    { path: "/", text: "Home" },
    { path: "/apps", text: "Apps" },
    { path: "/installedapps", text: "Installation" },
    { path: "/dashboard", text: "Dashboard" },
  ];

  // outside click handler
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  
  return (
    <div className="shadow-md relative z-50">
      <div className="navbar bg-white w-11/12 mx-auto py-3">

        {/* Left */}
        <div className="navbar-start">
          <div className="flex items-center gap-2">
            <img src={logo} alt="logo" className="w-10" />
            <h1 className="text-xl font-bold text-[#5B4BFF]">HERO.IO</h1>
          </div>
        </div>

        {/* Center */}
        <div className="navbar-center hidden md:flex">
          <ul className="menu menu-horizontal px-1 gap-6">
            {navItems.map((item, index) => (
              <ReusableNav key={index} to={item.path}>
                {item.text}
              </ReusableNav>
            ))}
          </ul>
        </div>

        {/* Mobile menu */}
        {open && (
          <div
            ref={menuRef}
            className="md:hidden absolute top-full right-0 w-40 bg-white shadow-xl rounded-xl p-4 mt-2"
          >
            <ul className="flex flex-col gap-3">
              {navItems.map((item, index) => (
                <ReusableNav
                  key={index}
                  to={item.path}
                  onClick={() => setOpen(false)}
                  className="px-4 py-3 rounded-lg hover:bg-gray-100 transition-all font-medium text-gray-700"
                >
                  {item.text}
                </ReusableNav>
              ))}
            </ul>
          </div>
        )}

        {/* Right */}
        <div className="navbar-end flex gap-3">
          <button className="btn bg-[#7C4DFF] hover:bg-[#6c3df5] text-white border-none rounded-md">
            <FaGithub /> Contribute
          </button>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-2xl"
          >
            ☰
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;