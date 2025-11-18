import PropTypes from "prop-types";
import Feature from "../Feature/Feature";

const PriceOption = ({ option }) => {
  const { name, description, features, price } = option;

  return (
    <div className="bg-blue-500 text-white p-6 md:p-8 rounded-md flex flex-col ">
      {/* price of membership */}
      <h2 className="text-lg md:text-xl font-bold text-center">
        <span className="text-3xl md:text-5xl">{price}</span>
        <span>/month</span>
      </h2>

      {/* title of membership  */}
      <h3 className="mt-2.5 text-center text-xl md:text-3xl font-semibold">
        {name}
      </h3>

      {/* description about the membership  */}
      <p className="mt-2 text-justify md:text-lg font-light">{description}</p>

      {/* features of the membership  */}
      <div className="mt-5 ml-8 grow">
        {features.map((feature, idx) => (
          <Feature key={idx} feature={feature}></Feature>
        ))}
      </div>

      {/* buy now button  */}
      <button
        className="mt-8 px-6 py-2.5 bg-green-500 w-full rounded-lg border border-green-600 md:text-lg font-semibold hover:bg-green-900 hover:font-bold duration-700"
        type="button"
      >
        Purchase Now
      </button>
    </div>
  );
};

// define the prop types
PriceOption.propTypes = {
  option: PropTypes.object,
};

export default PriceOption;
