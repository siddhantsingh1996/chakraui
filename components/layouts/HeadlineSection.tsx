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

export const HeadlineSection = () => {
  const [isMobile] = useMediaQuery("(max-width: 600px)");

  return (
    <>
      {!isMobile ? (
        <Box
          w="100%"
          h={{lg:"40rem",md:"80rem"}}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Box w={{lg:"50%",md:"60%"}} h={{lg:"35rem",md:"40rem"}} pl="4rem" display="flex">
            <Image src="/images/Image placeholder.png" />
            <Box
              w={{lg:"60%",md:"100%"}}
              display="flex"
              pl="3rem"
              pt="3rem"
              flexDirection="column"
            >
              <Text
                fontSize="30px"
                color="#2D2D2D"
                fontWeight="normal"
                lineHeight="40px"
              >
                Headline{" "}
              </Text>
              <Text
                fontSize="14px"
                color="#3B3B3B"
                fontWeight="normal"
                lineHeight="24px"
                pt="4rem"
              >
                This is a template Figma file,{" "}
              </Text>
              <Text
                fontSize="14px"
                color="#3B3B3B"
                fontWeight="normal"
                lineHeight="24px"
              >
                turned into code using Anima.{" "}
              </Text>
              <Text
                fontSize="14px"
                color="#3B3B3B"
                fontWeight="normal"
                lineHeight="24px"
              >
                Learn more at AnimaApp.com{" "}
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
                Try Free
              </Box>
            </Box>
          </Box>
        </Box>
      ) : (
        <>
          <Box
            w="100%"
            h="67rem"
            display="flex"
            alignItems="center"
            flexDirection="column"
            pt="6rem"
          >
            <Text
              fontSize="30px"
              color="#2D2D2D"
              fontWeight="normal"
              lineHeight="40px"
            >
              Headline{" "}
            </Text>
            <Text
              fontSize="14px"
              color="#3B3B3B"
              fontWeight="normal"
              lineHeight="24px"
              pt="4rem"
            >
              This is a template Figma file,{" "}
            </Text>
            <Text
              fontSize="14px"
              color="#3B3B3B"
              fontWeight="normal"
              lineHeight="24px"
            >
              turned into code using Anima.{" "}
            </Text>
            <Text
              fontSize="14px"
              color="#3B3B3B"
              fontWeight="normal"
              lineHeight="24px"
            >
              Learn more at AnimaApp.com{" "}
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
              Try Free
            </Box>
            <Image pt="5rem" src="/images/Image placeholder.png" />
          </Box>
        </>
      )}
    </>
  );
};
