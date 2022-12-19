import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Footer: React.FunctionComponent = (props) => {
  return (
    <div className="flex justify-between bg-black p-8">
      <div className="flex items-center gap-4">
        <button>
          <FontAwesomeIcon
            icon={faFacebook}
            className="text-3xl text-white hover:text-yellow-500"
          />
        </button>
        <button className="flex h-8 w-8 items-center justify-center rounded-full bg-white hover:bg-yellow-500">
          <FontAwesomeIcon icon={faInstagram} className="text-xl text-black" />
        </button>
      </div>
      <div
        style={{ fontFamily: "Special Elite" }}
        className="flex flex-col  gap-6 sm:flex-row sm:items-center sm:justify-center"
      >
        <p className="text-sm text-white sm:text-lg">555-555-5555</p>
        <p className="text-sm text-white sm:text-lg">
          123 Spring Street,
          <br /> Hoboken NJ 08873
        </p>
      </div>
    </div>
  );
};

export default Footer;
