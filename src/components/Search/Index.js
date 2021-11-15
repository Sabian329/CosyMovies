import React, { useState } from "react";
import { Stack, Heading } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { Colors } from "../../Theme/Colors";
import { Wrapper } from "./Styled";
import { SearchIcon, CloseIcon } from "@chakra-ui/icons";
import { useSelector } from "react-redux";
import {
  closeSearch,
  openSearch,
  updateCurrentValue,
} from "../../Redux/slices/searchSlice";
import { selectSearch } from "../../Redux/selectors";

export const Search = ({ favouritesOpen, setFavouritesOpen }) => {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();
  const searchState = useSelector(selectSearch);

  const inputHandle = (e) => {
    setInputValue(e.target.value);
  };

  const startSearching = () => {
    dispatch(updateCurrentValue(inputValue));
    inputValue && dispatch(openSearch());
    setFavouritesOpen(false);
  };
  const closeAndResetInput = () => {
    dispatch(closeSearch());
    setFavouritesOpen(false);
  };

  return (
    <Wrapper>
      <Stack spacing={3} bg={Colors.mainTheme}>
        <input
          type="text"
          placeholder="Search Movie"
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
      <button onClick={() => setFavouritesOpen(!favouritesOpen)}>
        <Heading
          fontSize="1rem"
          fontWeight="medium"
          color={favouritesOpen && "#ff0000"}
        >
          Favourites
        </Heading>
      </button>
    </Wrapper>
  );
};
