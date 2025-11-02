import { MdDashboard } from "react-icons/md";
import { FaHistory } from "react-icons/fa";
import { CiSettings } from "react-icons/ci";
import { Link, useLocation } from "react-router-dom";

const Menu = () => {
  const location = useLocation();

  const menuItems = [
    { icon: <MdDashboard />, label: "Dashboard", link: "/DashBoard" },
    { icon: <FaHistory />, label: "History", link: "/History" },
    { icon: <CiSettings />, label: "Settings", link: "/Settings" },
  ];

  return (
    <div className="fixed left-0 top-0 h-screen w-64 flex flex-col items-center bg-gray-100 border-r border-gray-300 z-30">
      <div className="mt-10 flex items-center gap-3 overflow-hidden">
        <img src="/src/assets/m.svg" alt="User logo" className="w-12 h-12" />
        <h1 className="text-2xl max-w-[120px] font-semibold text-transparent truncate bg-clip-text bg-gradient-to-r from-violet-700 to-fuchsia-500">
          Ullas
        </h1>
      </div>

      <aside className="flex flex-col mt-8 w-full space-y-4 items-center">
        {menuItems.map((item, i) => {
          
            const isActive = location.pathname.toLowerCase() == item.link.toLowerCase();
          
          return (
            <Link key={i}
              to={item.link} className={`flex items-center gap-3 w-48 px-4 py-2 rounded-lg text-lg font-medium transition-all duration-300
                ${
                  isActive
                    ? "bg-gradient-to-r from-indigo-500 to-fuchsia-500 text-white shadow-md scale-105"
                    : "text-gray-700 hover:text-violet-600 hover:scale-105"
                }`}>{item.icon} {item.label}
            </Link>
          );
        })}
      </aside>
      <div className="mt-auto mb-2">
        <button className="py-3 px-6 rounded-xl bg-gradient-to-r from-indigo-500 to-fuchsia-500 text-white font-semibold shadow-md hover:shadow-lg hover:scale-105">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Menu;
