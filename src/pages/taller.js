import {
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Button,
} from "@chakra-ui/core";
import { useState } from "react";

const NuevaPagina = () => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <>
      <Accordion width="300px" hidden={!isVisible}>
        <AccordionItem>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              Section 1 title
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel
            paddingBottom={4}
            border="1px solid black"
            borderRadius="15px"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              Section 2 title
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel paddingBottom={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </AccordionPanel>
        </AccordionItem>
      </Accordion>

      <Button
        onClick={() => {
          setIsVisible(!isVisible);
        }}
        colorScheme={isVisible ? "red" : "blue"}
      >
        {isVisible ? "Ocultar" : "Mostrar"}
      </Button>
    </>
  );
};

export default NuevaPagina;
