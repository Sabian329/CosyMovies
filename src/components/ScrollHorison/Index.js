import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import React from "react";
import { BtnLeft, BtnRight } from "./Syled";
import { AnimatePresence, motion } from "framer-motion";

export const ScrollHorizon = ({ scrollHorisontal, isScrollMax }) => {
  const variants = {
    open: { opacity: 1, x: 0, transition: { duration: 0.7 } },
    closed: { opacity: 0, x: "-100px", transition: { duration: 0.1 } },
    open1: { opacity: 1, x: 0, transition: { duration: 0.1 } },
    closed1: { opacity: 0, x: "-100px", transition: { duration: 2 } },
  };
  return (
    <>
      <BtnRight onClick={() => scrollHorisontal(700)}>
        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <ArrowRightIcon w={10} h={10} color="white" />
        </motion.button>
      </BtnRight>
      <AnimatePresence initial={false}>
        <motion.div
          animate={!isScrollMax ? "closed1" : "open1"}
          variants={variants}
        >
          <BtnLeft onClick={() => scrollHorisontal(-700)}>
            <motion.div
              animate={!isScrollMax ? "closed" : "open"}
              variants={variants}
            >
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ArrowLeftIcon w={10} h={10} color="white" />
              </motion.button>
            </motion.div>
          </BtnLeft>
        </motion.div>
      </AnimatePresence>
    </>
  );
};
