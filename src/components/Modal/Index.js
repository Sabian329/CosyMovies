import React from "react";
import { motion } from "framer-motion";

import { MainWrapper, Wrapper } from "./Styled";
import { ModalContent } from "../ModalContent/Index";

export const Modal = ({
  setIsModalOpen,
  movie_id,
  setIsOpen,
  isOpen,
  original_title,
  original_name,
}) => {
  const CloseModalAndActive = () => {
    setIsModalOpen(false);
    setIsOpen(!isOpen);
  };

  return (
    <MainWrapper onClick={() => CloseModalAndActive()}>
      <motion.div
        animate={{
          scale: [0, 1.1, 1],
        }}
      >
        <Wrapper onClick={(proxy) => proxy.stopPropagation()}>
          <ModalContent
            isOpen={isOpen}
            movie_id={movie_id}
            original_title={original_title}
            original_name={original_name}
          />
        </Wrapper>
      </motion.div>
    </MainWrapper>
  );
};
