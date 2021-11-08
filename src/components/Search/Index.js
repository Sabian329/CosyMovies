import React, { useState } from "react";
import { Input, Stack, Button } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { Colors } from "../../Theme/Colors";
import { Wrapper } from "./Styled";
import { SearchIcon, CloseIcon } from "@chakra-ui/icons";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import {
  closeSearch,
  openSearch,
  updateCurrentValue,
} from "../../Redux/slices/searchSlice";
import { selectSearch } from "../../Redux/selectors";

export const Search = () => {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();
  const searchState = useSelector(selectSearch);

  const inputHandle = (e) => {
    setInputValue(e.target.value);
  };

  const startSearching = () => {
    dispatch(updateCurrentValue(inputValue));
    inputValue && dispatch(openSearch());
  };
  const closeAndResetInput = () => {
    dispatch(closeSearch());
    setInputValue("");
  };
  useEffect(() => {
    !searchState.currentValue && dispatch(closeSearch());
  }, [searchState.currentValue]);

  return (
    <Wrapper>
      <Stack spacing={3} bg={Colors.mainTheme}>
        <input
          type="text"
          // variant="outline"
          // bg={Colors.mainTheme1}
          placeholder="Search Movie"
          // size="md"
          onChange={(e) => inputHandle(e)}
        />
      </Stack>
      <button onClick={() => startSearching()}>
        <SearchIcon w={5} h={5} color="red" />
      </button>
      {searchState.isOpen && (
        <button onClick={() => closeAndResetInput()}>
          <CloseIcon color={Colors.mainTheme1} />
        </button>
      )}
    </Wrapper>
  );
};
