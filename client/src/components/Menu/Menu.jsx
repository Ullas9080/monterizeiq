import { MdDashboard } from "react-icons/md";
import { FaHistory } from "react-icons/fa";
import { CiSettings } from "react-icons/ci";
import { IoMdHome } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";


const Menu = () => {
  const location = useLocation();

  const menuItems = [
    {icon:<IoMdHome/>,label:"Home",link:"/"},
    { icon: <MdDashboard />, label: "Dashboard", link: "/DashBoard" },
    { icon: <CiSettings />, label: "Settings", link: "/Settings" },
  ];

  return (
    <div
      className="fixed left-0 top-0 h-screen text-white
                 w-50 lg:w-64 flex flex-col items-center 
                 bg-gradient-to-bl from-indigo-600 via-purple-600 to-fuchsia-600
                 shadow-lg shadow-fuchsia-800/20 border-r border-white/10 z-30"
    >
      {/* Logo */}
      <div className="lg:mt-10 mt-6 flex items-center gap-3">
        <img src="/src/assets/m.svg" alt="User logo" className="w-8 lg:w-10" />
        <h1 className="text-lg lg:text-xl font-semibold text-white tracking-wide">
          Ullas
        </h1>
      </div>

      {/* Menu Items */}
      <aside className="flex flex-col mt-6 lg:mt-10 w-full lg:space-y-3 space-y-1  justify-center ">
        {menuItems.map((item, i) => {
          const isActive =
            location.pathname.toLowerCase() === item.link.toLowerCase();
          return (
            <Link
              key={i}
              to={item.link}
              className={`ml-3 flex text-sm lg:text-lg items-center gap-3 w-[80%] lg:w-[85%] justify-start lg:px-5 lg:py-3
                px-3 py-2
                font-medium 
                rounded-2xl border transition-all duration-300
                ${
                  isActive
                    ? "bg-white text-violet-700 border-violet-400 shadow-md scale-105"
                    : "text-white border-transparent hover:bg-violet-100 hover:text-violet-700 hover:border-violet-400"
                }`}
            >
              {item.icon}
              <span>{item.label}</span>
            </Link>
          );
        })}
      </aside>

      {/* Logout Button */}
      <div className="mt-auto mb-6 w-full flex justify-center">
        <button
          className="w-[85%] py-3 rounded-2xl border border-violet-400/40 
                     bg-white/10 text-white font-semibold text-base
                     hover:bg-violet-100 hover:text-violet-700 hover:border-violet-400
                     hover:shadow-lg hover:shadow-violet-200/40 hover:scale-105 
                     transition-all duration-300"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Menu;
