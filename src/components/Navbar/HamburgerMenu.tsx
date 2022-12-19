import { motion } from "framer-motion";
import * as React from "react";
import { useContext, useState } from "react";
import { DrawerContext } from "../../context/drawer-context";

// interface ISandbox {
//   isOpen: boolean;
// }

const HamburgerMenu: React.FunctionComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const drawerCtx = useContext(DrawerContext);

  const variant = drawerCtx.isOpen ? "opened" : "closed";

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
    <button
      onClick={drawerCtx.toggle}
      className="fixed top-8 right-8 z-50 h-8 w-8 xl:hidden"
    >
      <motion.svg
        preserveAspectRatio="none"
        viewBox={`0 8 20 4`}
        overflow="visible"
        width={24}
        height={4}
        style={{}}
      >
        <motion.line
          x1="0"
          x2="24"
          y1="0"
          y2="0"
          strokeWidth={4}
          //   stroke="#000"
          vectorEffect="non-scaling-stroke"
          variants={top}
          strokeLinecap="round"
          initial="closed"
          animate={variant}
          className="stroke-yellow-600"
        />
        <motion.line
          x1="0"
          x2="24"
          y1="10"
          y2="10"
          strokeWidth={4}
          className="stroke-yellow-600"
          vectorEffect="non-scaling-stroke"
          variants={center}
          strokeLinecap="round"
          initial="closed"
          animate={variant}
        />
        <motion.line
          x1="0"
          x2="24"
          y1="20"
          y2="20"
          strokeWidth={4}
          className="stroke-yellow-600"
          vectorEffect="non-scaling-stroke"
          variants={bottom}
          strokeLinecap="round"
          initial="closed"
          animate={variant}
        />
      </motion.svg>
    </button>
  );
};

export default HamburgerMenu;
