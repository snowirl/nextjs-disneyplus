"use client";
import React from "react";
import { Button } from "./ui/button";
import { IoMdHome } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { RiMovie2Fill } from "react-icons/ri";
import { AnimationControls, motion, useAnimation } from "framer-motion";

const HeaderButtonsBar = () => {
  const homeControls = useAnimation(); // Controls for animation
  const searchControls = useAnimation(); // Controls for animation
  const watchlistControls = useAnimation(); // Controls for animation
  const originalsControls = useAnimation(); // Controls for animation
  const moviesControls = useAnimation(); // Controls for animation

  const handleHoverStart = (controls: AnimationControls) => {
    // Function to execute when hover starts
    controls.start({ width: "100%" }); // Example: Enlarge scaleX
  };

  const handleHoverEnd = (controls: AnimationControls) => {
    // Function to execute when hover ends
    controls.start({ width: "0%" }); // Example: Reset scaleX
  };

  return (
    <div className="pl-8 flex space-x-6 lg:space-x-8">
      <motion.button
        onHoverStart={() => handleHoverStart(homeControls)}
        onHoverEnd={() => handleHoverEnd(homeControls)}
        className="flex items-center space-x-2 text-white font-semibold"
      >
        <IoMdHome className="w-4 h-4" />
        <div>
          <p className="hidden lg:block">HOME</p>
          <motion.div
            className="w-full h-0.5 bg-white"
            initial={{ width: 0 }}
            animate={homeControls}
          ></motion.div>
        </div>
      </motion.button>
      <motion.button
        onHoverStart={() => handleHoverStart(searchControls)}
        onHoverEnd={() => handleHoverEnd(searchControls)}
        className="flex items-center space-x-2 text-white font-semibold"
      >
        <FaSearch className="w-3 h-3" />
        <div>
          <p className="hidden lg:block">SEARCH</p>
          <motion.div
            className="w-full h-0.5 bg-white"
            initial={{ width: 0 }}
            animate={searchControls}
          ></motion.div>
        </div>
      </motion.button>
      <motion.button
        onHoverStart={() => handleHoverStart(watchlistControls)}
        onHoverEnd={() => handleHoverEnd(watchlistControls)}
        className="flex items-center space-x-2 text-white font-semibold"
      >
        <FaPlus className="w-3 h-3" />
        <div>
          <p className="hidden lg:block">WATCHLIST</p>
          <motion.div
            className="w-full h-0.5 bg-white"
            initial={{ width: 0 }}
            animate={watchlistControls}
          ></motion.div>
        </div>
      </motion.button>
      <motion.button
        onHoverStart={() => handleHoverStart(originalsControls)}
        onHoverEnd={() => handleHoverEnd(originalsControls)}
        className="flex items-center space-x-2 text-white font-semibold"
      >
        <FaStar className="w-3 h-3" />
        <div>
          <p className="hidden lg:block">ORIGINALS</p>
          <motion.div
            className="w-full h-0.5 bg-white"
            initial={{ width: 0 }}
            animate={originalsControls}
          ></motion.div>
        </div>
      </motion.button>
      <motion.button
        onHoverStart={() => handleHoverStart(moviesControls)}
        onHoverEnd={() => handleHoverEnd(moviesControls)}
        className="flex items-center space-x-2 text-white font-semibold"
      >
        <RiMovie2Fill className="w-3 h-3" />
        <div>
          <p className="hidden lg:block">MOVIES</p>
          <motion.div
            className="w-full h-0.5 bg-white"
            initial={{ width: 0 }}
            animate={moviesControls}
          ></motion.div>
        </div>
      </motion.button>
    </div>
  );
};

export default HeaderButtonsBar;
