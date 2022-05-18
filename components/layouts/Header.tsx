import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  Flex,
  Heading,
  HStack,
  Text,
  Image,
  Button,
  BoxProps,
  useMediaQuery,
  Link,
  useBoolean,
} from "@chakra-ui/react";

export const Header = () => {
  return (
    <>
      <Flex
        w={"100%"}
        h={"58px"}
        color="brand.white"
        alignItems="center"
        justifyContent="space-between"
      >
        <Image w="90.99px" h="18px" mx="2rem" src="/images/Logo.png" />
        <Image mx="2rem" src="/images/Download cta.png" />
      </Flex>
    </>
  );
};
