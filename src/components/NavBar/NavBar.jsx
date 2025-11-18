import { useState } from "react";
import NavLink from "../NavLink/NavLink";
import { RiMenu2Fill } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";

const NavBar = () => {
  // state: to toggle the menu icon
  const [openMenu, setOpenMenu] = useState(false);

  // fake routes
  const routes = [
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "/about", name: "About" },
    { id: 3, path: "/services", name: "Services" },
    { id: 4, path: "/contact", name: "Contact" },
    { id: 5, path: "*", name: "NotFound" },
  ];

  return (
    <nav className="">
      {/* hamburger icons container  */}
      <div
        onClick={() => setOpenMenu(!openMenu)}
        className="text-2xl p-5 md:hidden bg-amber-400"
      >
        {openMenu === true ? <RxCross2 /> : <RiMenu2Fill />}
      </div>

      {/* nav items container  */}
      <ul
        className={`md:flex bg-amber-200 p-5 absolute md:static duration-700  ${
          openMenu ? "top-16" : "-top-80"
        }`}
      >
        {/* nav items  */}
        {routes.map((route) => (
          <NavLink key={route?.id} route={route}></NavLink>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
