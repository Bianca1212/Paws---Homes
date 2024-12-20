import PropTypes from "prop-types";
// import { Link } from "react-router-dom";
const NavigationButton = ({ path, onClick, children }) => {
  return (
    <>
      <button
        path={path}
        onClick={onClick}
        className="p-2 font-josefin hover:scale-110 cursor-pointer text-white text-sm"
      >
        {/* <Link */}

        {children}
        {/* </Link> */}
      </button>
    </>
  );
};

export default NavigationButton;

NavigationButton.propTypes = {
  path: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.object,
};
