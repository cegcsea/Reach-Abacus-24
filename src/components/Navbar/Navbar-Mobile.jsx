import React, { useState } from "react";
import { FaHome, FaExclamationCircle, FaTools } from "react-icons/fa";
import { FiLogIn } from "react-icons/fi";
import { MdEventAvailable } from "react-icons/md";
import { Link } from "react-router-dom";

const Navigation = () => {
  const Menus = [
    { name: "Home", icon: FaHome, dis: "translate-x-0", path: "/"},
    { name: "Workshops", icon: FaTools, dis: "translate-x-48", path: "/workshops" },
    { name: "Events", icon: MdEventAvailable, dis: "translate-x-64", path: "/events" },
    { name: "About", icon: FaExclamationCircle, dis: "translate-x-16", path: "/about" },
    { name: "Login", icon: FiLogIn, dis: "translate-x-32", path: "/login" },
  ];
  const [active, setActive] = useState(0); 

  return (
    <div className="bg-[#24272dac] h-[4.4rem] px-6 rounded-xl mb-4 flex items-center">
      <ul className="flex relative list-none">
        {Menus.map((menu, i) => (
          <li key={i} className="w-16">
            <Link
              to={menu.path}
              className="flex flex-col items-center text-center pt-2 relative"
              onClick={() => setActive(i)}
            >
              <span
                className={`text-xl cursor-pointer duration-500 ${
                  i === active && "-mt-6 text-white"
                }`}
              >
                <div
                  className={`rounded-full p-2 flex items-center justify-center ${
                    i === active
                      ? "bg-[#242424] border border-[#ABB2BF]"
                      : "bg-[#C778DD]"
                  }`}
                >
                  {React.createElement(menu.icon)}
                </div>
              </span>
              <span
                className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 ${
                  active === i
                    ? "translate-y-6 duration-700 opacity-100"
                    : "opacity-0 translate-y-10"
                }`}
              >
                {menu.name}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navigation;
