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
  chakra,
} from "@chakra-ui/react";

export const Hero = () => {
  const [isMobile] = useMediaQuery("(max-width: 600px)");

  const Init = chakra('div', {
       baseStyle: { 
        w:"100%",
        h:{ lg: "35rem", md: "45rem", sm: "65rem" },
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
       }
  })

  return (
    <>
      <Init>
        {!isMobile ? (
          <Box
            w="70%"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Box mr="3rem">
              <Text
                fontSize={"65px"}
                color="brand.lightGreen"
                fontWeight={"normal"}
                fontFamily={"Heading"}
                lineHeight="65px"
              >
                Start to
              </Text>
              <Text
                fontSize={"65px"}
                color="brand.lightGreen"
                fontWeight={"normal"}
                fontFamily={"Heading"}
                lineHeight="65px"
              >
                Workout
              </Text>
              <Text
                fontSize={"14px"}
                mt="2rem"
                fontWeight={"normal"}
                color="#3B3B3B"
                lineHeight="24px"
              >
                This is a template Figma file, turned into code{" "}
              </Text>
              <Text
                fontSize={"14px"}
                fontWeight={"normal"}
                color="#3B3B3B"
                lineHeight="24px"
              >
                using Anima. Learn more at AnimaApp.com
              </Text>
              <Box
                bg="brand.btnColor"
                w="120px"
                h="40px"
                color="#ffffff"
                display="flex"
                justifyContent="center"
                alignItems="center"
                borderRadius="10.5px"
                mt="3rem"
              >
                Get Started
              </Box>
            </Box>
            <Box ml="3rem">
              <Image src="/images/girl.png" />
            </Box>
          </Box>
        ) : (
          <Box
            w="100%"
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
          >
            <Text
              fontSize={"65px"}
              color="brand.lightGreen"
              fontWeight={"normal"}
              fontFamily={"Heading"}
              lineHeight="65px"
              mt="8rem"
            >
              Start to
            </Text>
            <Text
              fontSize={"65px"}
              color="brand.lightGreen"
              fontWeight={"normal"}
              fontFamily={"Heading"}
              lineHeight="65px"
             
            >
              Workout
            </Text>
            <Text
              fontSize={"14px"}
              mt="2rem"
              fontWeight={"normal"}
              color="#3B3B3B"
              lineHeight="24px"
              
            >
              This is a template Figma file, turned into code{" "}
            </Text>
            <Text
              fontSize={"14px"}
              fontWeight={"normal"}
              color="#3B3B3B"
              lineHeight="24px"
            
            >
              using Anima. Learn more at AnimaApp.com
            </Text>
            <Box
              bg="brand.btnColor"
              w="120px"
              h="40px"
              color="#ffffff"
              display="flex"
              justifyContent="center"
              alignItems="center"
              borderRadius="10.5px"
              mt="3rem"
            >
              Get Started
            </Box>

            <Box>
              <Image src="/images/girl.png" />
            </Box>
          </Box>
        )}
      </Init>
    </>
  );
};
