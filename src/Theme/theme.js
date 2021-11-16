// theme.js
// 1. import `extendTheme` function
import { extendTheme } from "@chakra-ui/react";
import { Colors } from "./Colors";

// 2. Add your color mode config
const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};
// 3. extend the theme
const overrides = extendTheme({
  styles: {
    global: (props) => ({
      body: {
        fontFamily: "body",
        bg: Colors.body,
      },
    }),
  },
});
export default overrides;
