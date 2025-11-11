import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { IoMdHome } from "react-icons/io";
import { MdDashboard } from "react-icons/md";
import { CiSettings } from "react-icons/ci";
import { IoLogOutOutline } from "react-icons/io5";

const menuItems = [
  { icon: <IoMdHome size={16} />, label: "Home", link: "/" },
  { icon: <MdDashboard size={16} />, label: "Dashboard", link: "/Dashboard" },
  { icon: <CiSettings size={16} />, label: "Settings", link: "/Settings" },
];

export default function Menu() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      {/* Floating arrow toggle */}
      <button
        onClick={() => setOpen(!open)}
        className={`
          fixed top-1/2 z-50 text-2xl md:hidden
          transform -translate-y-1/2 transition-all duration-300
          ${open ? "left-56" : "left-2"} 
          animate-bounce-slow text-gray-700 hover:text-pink-600
        `}
      >
        {open ? "<" : ">"}
      </button>

      {/* Sidebar for large screens */}
      <div className="hidden md:flex flex-col fixed left-0 top-0 h-full w-64
                      bg-gradient-to-br from-white/80 via-pink-50/70 to-white/60
                      backdrop-blur-xl p-6 rounded-tr-3xl rounded-br-3xl
                      shadow-2xl border border-pink-100/60">
        <SidebarContent location={location} />
      </div>

      {/* Overlay sidebar for small screens */}
      {open && (
        <div className="fixed inset-0 z-40 flex md:hidden">
          <div
            className="absolute inset-0 bg-black/30"
            onClick={() => setOpen(false)}
          ></div>

          <div className="relative z-50 w-56 
                          bg-gradient-to-br from-white/80 via-pink-50/70 to-white/60
                          backdrop-blur-xl shadow-2xl h-full p-6 animate-slideIn
                          rounded-r-3xl border border-pink-100/60">
            <SidebarContent location={location} toggleMenu={() => setOpen(false)} />
          </div>
        </div>
      )}
    </>
  );
}

/* Sidebar content */
function SidebarContent({ location, toggleMenu }) {
  return (
    <div className="flex flex-col h-full">
      {/* Logo */}
      <div className="flex flex-col items-center gap-2 py-4">
        <img src="/src/assets/m.svg" alt="Logo" className="w-12 h-12" />
        <h1 className="text-pink-600 font-extrabold text-lg tracking-wide">
          Ullas
        </h1>
      </div>

      <div className="border-t border-pink-100/50 my-4"></div>

      {/* Menu items as card-style */}
      <nav className="flex-1 flex flex-col gap-4">
        {menuItems.map((item, index) => {
          const active = location.pathname.toLowerCase() === item.link.toLowerCase();
          return (
            <Link
              key={index}
              to={item.link}
              onClick={toggleMenu}
              className={`
                relative flex items-center gap-3 p-4 rounded-3xl
                transition-all duration-300
                ${active
                  ? "bg-gradient-to-br from-pink-400 to-fuchsia-500 text-white font-semibold shadow-lg"
                  : "bg-white/70 hover:bg-gradient-to-br hover:from-pink-50/70 hover:via-pink-100/50 hover:to-white/60 text-gray-700 hover:text-pink-600 hover:shadow-md"}
              `}
            >
              {/* Accent vertical line */}
              <span
                className={`absolute left-0 top-0 h-full w-1 rounded-l-3xl
                            ${active ? "bg-gradient-to-b from-pink-400 to-fuchsia-500" : "bg-pink-200/50"}`}
              ></span>

              {item.icon}
              <span className="text-lg">{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="border-t border-pink-100/50 my-4"></div>

      {/* Logout */}
      <button className="flex items-center justify-center gap-2 px-4 py-3 
                         bg-white/70 text-pink-600 rounded-3xl 
                         hover:bg-gradient-to-br hover:from-pink-50/70 hover:via-pink-100/50 hover:to-white/60
                         hover:shadow-md transition-all text-lg font-medium">
        <IoLogOutOutline size={16} />
        Logout
      </button>
    </div>
  );
}
