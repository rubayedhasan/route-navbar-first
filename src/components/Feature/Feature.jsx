import PropTypes from "prop-types";
import { LuCircleCheckBig } from "react-icons/lu";

const Feature = ({ feature }) => {
  return (
    <div>
      <p className="flex items-center justify-start gap-2 md:text-lg">
        <LuCircleCheckBig className="text-green-500" />
        <span>{feature}</span>
      </p>
    </div>
  );
};

// define the prop types
Feature.propTypes = {
  feature: PropTypes.string,
};

export default Feature;
