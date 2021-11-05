import React from "react";
import { Input, Stack } from "@chakra-ui/react";
import { Colors } from "../../Theme/Colors";
import { Wrapper } from "./Styled";

export const Search = () => {
  return (
    <Wrapper>
      <Stack spacing={3} bg={Colors.mainTheme}>
        <Input
          variant="outline"
          bg={Colors.mainTheme1}
          placeholder="Search Movie"
          size="md"
        />
      </Stack>
    </Wrapper>
  );
};
