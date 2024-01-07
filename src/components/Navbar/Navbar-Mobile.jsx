import React, { useState } from "react";
import { FaHome, FaExclamationCircle, FaTools } from "react-icons/fa";
import { FiLogIn } from "react-icons/fi";
import { MdEventAvailable } from "react-icons/md";

const Navigation = () => {
  const Menus = [
    { name: "Home", icon: FaHome, dis: "translate-x-0" },
    { name: "About", icon: FaExclamationCircle, dis: "translate-x-16" },
    { name: "Login", icon: FiLogIn, dis: "translate-x-32" },
    { name: "Workshops", icon: FaTools, dis: "translate-x-48" },
    { name: "Events", icon: MdEventAvailable, dis: "translate-x-64" },
  ];
  const [active, setActive] = useState(0); 

  return (
    <div className="bg-[rgba(165,55,253,0.5)] h-[4.4rem] px-6 rounded-xl mb-4 flex items-center">
      <ul className="flex relative list-none">
        {Menus.map((menu, i) => (
          <li key={i} className="w-16">
            <a
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
                      ? "bg-black border-2 border-purple-500"
                      : "bg-orange-400"
                  }`}
                >
                  {React.createElement(menu.icon)}
                </div>
              </span>
              <span
                className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 ${
                  active === i
                    ? "translate-y-4 duration-700 opacity-100"
                    : "opacity-0 translate-y-10"
                }`}
              >
                {menu.name}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navigation;
