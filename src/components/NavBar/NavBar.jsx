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
    <nav className="text-2xl md:hidden">
      {/* hamburger icons container  */}
      <div onClick={() => setOpenMenu(!openMenu)}>
        {openMenu === true ? <RxCross2 /> : <RiMenu2Fill />}
      </div>

      {/* nav items container  */}
      <ul className="md:flex">
        {/* nav items  */}
        {routes.map((route) => (
          <NavLink key={route?.id} route={route}></NavLink>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
