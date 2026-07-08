import { NavLink } from "react-router";

const ReusableNav = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `px-5 py-2 rounded-lg transition-all duration-300 font-medium border
        ${
          isActive
            ? "bg-[#7C4DFF] text-white border-[#7C4DFF] shadow-md"
            : "text-gray-700 border-transparent hover:bg-[#F3F0FF] hover:text-[#7C4DFF]"
        }`
      }
    >
      {children}
    </NavLink>
  );
};

export default ReusableNav;