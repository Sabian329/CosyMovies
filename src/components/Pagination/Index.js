import { Button } from "@chakra-ui/button";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";
import React, { useEffect, useState } from "react";
import { CenterBtns, Wrapper } from "./Styled";
import { useWindowSize } from "../../Hooks/useWindowSize";

export const Pagination = ({ pageNum, setPageNum }) => {
  const [isMobile, setIsMobile] = useState(false);
  const size = useWindowSize();
  useEffect(() => {
    size.width >= 768 ? setIsMobile(false) : setIsMobile(true);
  }, [size]);

  return (
    <Wrapper>
      <Button onClick={() => setPageNum(pageNum === 1 ? pageNum : pageNum - 1)}>
        <ChevronLeftIcon />
      </Button>
      {isMobile && (
        <CenterBtns>
          <Button
            color="wheat"
            onClick={() => setPageNum(pageNum === 1 ? 2 : pageNum)}
          >
            {pageNum}
          </Button>
        </CenterBtns>
      )}
      {!isMobile && (
        <>
          {/* <Button onClick={() => setPageNum(1)}>1</Button> */}
          {/* <Button
            onClick={() =>
              pageNum >= 3 ? setPageNum(pageNum - 2) : setPageNum(1)
            }
          >
            <ArrowLeftIcon />
          </Button> */}

          <CenterBtns>
            {pageNum !== 1 && (
              <Button
                onClick={() => setPageNum(pageNum > 1 ? pageNum - 1 : pageNum)}
              >
                {pageNum > 1 ? pageNum - 1 : pageNum}
              </Button>
            )}
            {/* center */}
            <Button
              color="wheat"
              onClick={() => setPageNum(pageNum === 1 ? 2 : pageNum)}
            >
              {pageNum === 1 ? 1 : pageNum}
            </Button>
            <Button onClick={() => setPageNum(pageNum === 1 ? 3 : pageNum + 1)}>
              {pageNum === 1 ? 2 : pageNum + 1}
            </Button>
          </CenterBtns>

          {/* <Button onClick={() => setPageNum(pageNum + 2)}>
            <ArrowRightIcon />
          </Button> */}

          {/* <Button onClick={() => setPageNum(50)}>50</Button> */}
        </>
      )}
      <Button onClick={() => setPageNum(pageNum + 1)}>
        <ChevronRightIcon />
      </Button>
    </Wrapper>
  );
};
