import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function LinkFooter({ destiny, link }) {
  return (
    <Link
      to={link}
      className="flex items-center justify-start hover:translate-x-1 transition hover:font-semibold"
    >
      {<MdKeyboardArrowRight />}
      <p>{destiny}</p>
    </Link>
  );
}

LinkFooter.propTypes = {
  destiny: PropTypes.string,
  link: PropTypes.string,
};

export default LinkFooter;
