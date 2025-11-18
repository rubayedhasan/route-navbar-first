import PropTypes from "prop-types";
const NavLink = ({ route }) => {
  return (
    <li className="mr-10 text-lg md:text-xl hover:bg-amber-50 md:px-4 md:py-2 md:rounded-sm hover:font-bold duration-1000">
      <a href={route?.path}>{route?.name}</a>
    </li>
  );
};

// define the prop types
NavLink.propTypes = {
  route: PropTypes.object,
};

export default NavLink;
