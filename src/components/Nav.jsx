import React from "react";
import { BiHomeAlt2, BiUser } from "react-icons/bi";
import { BsClipboardData, BsBriefcase, BsChatSquare } from "react-icons/bs";

import { Link } from "react-scroll";

const linkClasses =
  "cursor-pointer w-[60px] h-[60px] flex items-center justify-center";

const Nav = () => {
  return (
    <nav className="fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50">
      <div className="container mx-auto">
        {/* nav inner content */}
        <div className="w-full h-[60px] backdrop-blur-2xl rounded-full max-w-[460px] mx-auto px-2 flex justify-between items-center text-xl text-purple-600 transition-all duration-100 ease-in-out">
          <Link
            activeClass="active"
            smooth={true}
            spy={true}
            offset={-200}
            to="banner"
            className={linkClasses}
          >
            <BiHomeAlt2 />
          </Link>
          <Link
            activeClass="active"
            smooth={true}
            spy={true}
            to="about"
            className={linkClasses}
          >
            <BiUser />
          </Link>
          <Link
            activeClass="active"
            smooth={true}
            spy={true}
            to="services"
            className={linkClasses}
          >
            <BsClipboardData />
          </Link>
          <Link
            activeClass="active"
            smooth={true}
            spy={true}
            to="work"
            className={linkClasses}
          >
            <BsBriefcase />
          </Link>
          <Link
            activeClass="active"
            smooth={true}
            spy={true}
            to="contact"
            className={linkClasses}
          >
            <BsChatSquare />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
