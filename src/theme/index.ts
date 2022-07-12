import { extendTheme } from "@chakra-ui/react";
import { withProse } from "@nikolovlazar/chakra-ui-prose";

import { breakpoints } from "./breakpoints";
import { colors } from "./colors";
import { Accordion } from "./components/accordion";
import { Button } from "./components/button";
import { Heading } from "./components/heading";
import { Modal } from "./components/modal";
import { Text } from "./components/text";
import { config } from "./config";
import { fonts } from "./fonts";

const theme = extendTheme(
  {
    components: {
      Accordion,
      Heading,
      Text,
      Button,
      Modal,
    },
    fonts,
    colors,
    config,
    breakpoints,
  },
  withProse()
);

export default theme;
