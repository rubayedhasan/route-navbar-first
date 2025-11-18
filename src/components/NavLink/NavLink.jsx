import PropTypes from "prop-types";
const NavLink = ({ route }) => {
  return (
    <li className="mr-10">
      <a href={route?.path}>{route?.name}</a>
    </li>
  );
};

// define the prop types
NavLink.propTypes = {
  route: PropTypes.object,
};

export default NavLink;
