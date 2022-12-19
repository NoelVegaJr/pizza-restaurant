import { motion } from "framer-motion";
import * as React from "react";
import { useState } from "react";
import HamburgerMenu2 from "../components/Navbar/HamburgerMenu";

// interface ISandbox {
//   isOpen: boolean;
// }

const Sandbox: React.FunctionComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const variant = isOpen ? "opened" : "closed";

  const top = {
    closed: {
      rotate: 0,
      translateY: 0,
    },
    opened: {
      rotate: 45,
      translateY: 10,
    },
  };

  const center = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };

  const bottom = {
    closed: {
      rotate: 0,
      translateY: 0,
    },
    opened: {
      rotate: -45,
      translateY: -10,
    },
  };

  return (
    <div>
      <HamburgerMenu2 />
    </div>
  );
};

export default Sandbox;
