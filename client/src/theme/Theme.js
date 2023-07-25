import { extendTheme, theme } from "@chakra-ui/react";

const Theme = extendTheme({
  colors: {
    primary: {
      400: "#a51d02",
      900: "rgb(117, 1, 1)",
      100: "#d73d00",
    },
  },
  fonts: {
    heading: "Lumanosimo, cursive ",
    body: "Libre Baskerville, serif",
    input: "eyada, cursive",
  },
});

export default Theme;
