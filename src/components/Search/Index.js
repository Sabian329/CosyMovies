import React from "react";
import { Input, Stack, Button } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { Colors } from "../../Theme/Colors";
import { Wrapper } from "./Styled";
import { SearchIcon } from "@chakra-ui/icons";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import {
  closeSearch,
  openSearch,
  updateCurrentValue,
} from "../../Redux/slices/searchSlice";
import { selectSearch } from "../../Redux/selectors";

export const Search = () => {
  const dispatch = useDispatch();
  const searchState = useSelector(selectSearch);

  const inputHandle = (e) => {
    dispatch(updateCurrentValue(e.target.value));
  };
  useEffect(() => {
    !searchState.currentValue && dispatch(closeSearch());
  }, [searchState.currentValue]);

  return (
    <Wrapper>
      <Stack spacing={3} bg={Colors.mainTheme}>
        <Input
          variant="outline"
          bg={Colors.mainTheme1}
          placeholder="Search Movie"
          size="md"
          onChange={(e) => inputHandle(e)}
        />
      </Stack>
      <Button onClick={() => dispatch(openSearch())}>
        <SearchIcon w={5} h={5} color="red" />
      </Button>
    </Wrapper>
  );
};
