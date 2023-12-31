import React, { useState } from "react";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className="bg-VeryGray z-50 flex justify-between md:justify-around p-4 px-6 relative  items-center">
      <div className="flex items-center px-2 ">
        <img src="/images/logo.svg"></img>
      </div>
      <i
        onClick={toggleMenu}
        className={`bx ${
          showMenu ? "bx-x" : "bx-menu"
        } text-2xl md:hidden cursor-pointer`}
      ></i>

      <nav
        className={`items-center absolute top-full -left-full w-[100%] grid gap-4 px-2 text-xl ${
          showMenu ? "left-0" : "-left-full"
        }  duration-200 md:static md:flex md:w-auto p-5 place-content-center place-items-center rounded-sm bg-VeryGray`}
      >
        <a className="hover:animate-pulse text-GrayishBlue hover:font-semibold hover:text-stone-600 " href="">
          Home
        </a>
        <a className="hover:animate-pulse text-GrayishBlue hover:font-semibold hover:text-stone-600 " href="">
          About
        </a>
        <a className="hover:animate-pulse text-GrayishBlue hover:font-semibold hover:text-stone-600 " href="">
          Contact
        </a>
        <a className="hover:animate-pulse text-GrayishBlue hover:font-semibold hover:text-stone-600 " href="">
          blog
        </a>
        <a className="hover:animate-pulse text-GrayishBlue hover:font-semibold hover:text-stone-600 " href="">
          Careers
        </a>
        <div className="md:hidden">
          <button
            type="submit"
            className="bg-gradient-to-r  from-LimeGreen to-BrightCyan h-12 w-44 rounded-2xl text-white font-semibold mt-4"
          >
            Request Invite
          </button>
        </div>
      </nav>

      <div
        className={`hidden md:flex justify-center ${showMenu ? "mt-4" : ""}`}
      >
        {" "}
        <button
          type="submit"
          className="bg-gradient-to-r  from-LimeGreen to-BrightCyan h-12 w-44 rounded-full text-white font-semibold "
        >
          Request Invite
        </button>
      </div>
    </header>
  );
};

export default Header;
