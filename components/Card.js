import * as React from "react";
import * as PropTypes from "prop-types";
import Link from "next/link";

export const Image = (props) => (
  <Link href={props.url}>
    <a target={"_blank"}>
      <div className="pr-4 md:pr-0 h-[170px]">{props.children}</div>
    </a>
  </Link>
);
export const Title = (props) => (
  <h5
    className="text-primaryPurple-900 text-xl sm:3text-xl max-w-xs md:max-w-sm mt-6 md:w-full  font-medium md:mt-4 mb-5 text-center transition-all opacity-100 md:opacity-0 group-hover:opacity-100
  duration-100 ease-in-out "
  >
    {props.children}
  </h5>
);

const Card = (props) => (
  <div
    className="h-[250px] max-w-md w-full md:max-w-sm  relative shadow-xl md:shadow-none bg-white  md:mb-0 md:bg-transparent  hover:bg-white py-4 pl-0 md:pl-10 pr-3 rounded-2xl  hover:shadow-blue
  group cursor-pointer transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50  
  "
  >
    {props.children}
  </div>
);

Card.Image = Image;
Card.Title = Title;

export default Card;

Card.defaultProps = {
  children: null,
};

Card.propTypes = {
  children: PropTypes.node,
};

Image.defaultProps = {
  children: null,
};

Image.propTypes = {
  children: PropTypes.node,
};

Title.defaultProps = {
  children: null,
};

Title.propTypes = {
  children: PropTypes.node,
};
