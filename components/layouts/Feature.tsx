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

export const Feature = () => {
  const [isMobile] = useMediaQuery("(max-width: 600px)");

  
  
  return (
   <> 
  {!isMobile?  
  <Box w="100%" h="80rem" display="flex" justifyContent="center">
      <Box w={{lg:"40%",md:"60%",sm:"80%"}}  h="60rem" mt="10rem">
        <Box w="100%" h="30rem" display="flex">
          <Box
            w="100%"
            h="30rem"
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
          >
            <Image src="./images/firstImage.png" />
            <Text
              fontSize="26px"
              fontWeight="normal"
              lineHeight="36px"
              textAlign="center"
            >
              Feature
            </Text>
            <Text mt="3rem">This is a template Figma file, turned</Text>
            <Text>into code using Anima. Learn more</Text>
            <Text>at AnimaApp.com</Text>
            <Box display="flex" py="2rem">
              <Text
                color="#FF6250"
                fontWeight="medium"
                fontSize="14px"
                lineHeight="24px"
              >
                Read More
              </Text>
              <Box mt="2" ml="3">
                  <svg  width="17" height="12" viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.019 2.16874C10.7363 1.88606 10.7363 1.42774 11.019 1.14506C11.3017 0.862374 11.76 0.862374 12.0427 1.14506L16.3858 5.48819C16.6685 5.77087 16.6685 6.22919 16.3858 6.51188L12.0427 10.855C11.76 11.1377 11.3017 11.1377 11.019 10.855C10.7363 10.5723 10.7363 10.114 11.019 9.83132L14.1265 6.72388H1.40469C1.00051 6.72388 0.672852 6.3998 0.672852 6.00002C0.672852 5.60025 1.00051 5.27617 1.40469 5.27617H14.1264L11.019 2.16874Z" fill="#FF6250"/>
                  </svg>
               </Box> 
            </Box>
          </Box>

          <Box
            w="100%"
            h="30rem"
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
          >
            <Image src="./images/secondImage.png" />
            <Text
              fontSize="26px"
              fontWeight="normal"
              lineHeight="36px"
              textAlign="center"
            >
              Feature
            </Text>
            <Text mt="3rem">This is a template Figma file, turned</Text>
            <Text>into code using Anima. Learn more</Text>
            <Text>at AnimaApp.com</Text>
            <Box display="flex" py="2rem">
              <Text
                color="#FF6250"
                fontWeight="medium"
                fontSize="14px"
                lineHeight="24px"
              >
                Read More
              </Text>
              <Box mt="2" ml="3">
                  <svg  width="17" height="12" viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.019 2.16874C10.7363 1.88606 10.7363 1.42774 11.019 1.14506C11.3017 0.862374 11.76 0.862374 12.0427 1.14506L16.3858 5.48819C16.6685 5.77087 16.6685 6.22919 16.3858 6.51188L12.0427 10.855C11.76 11.1377 11.3017 11.1377 11.019 10.855C10.7363 10.5723 10.7363 10.114 11.019 9.83132L14.1265 6.72388H1.40469C1.00051 6.72388 0.672852 6.3998 0.672852 6.00002C0.672852 5.60025 1.00051 5.27617 1.40469 5.27617H14.1264L11.019 2.16874Z" fill="#FF6250"/>
                  </svg>
               </Box> 
            </Box>
          </Box>
        </Box>

        <Box w="100%" h="30rem" display="flex" mt="10rem">
          <Box
            w="100%"
            h="30rem"
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
          >
            <Image src="./images/exerciseImage.png" />
            <Text
              fontSize="26px"
              fontWeight="normal"
              lineHeight="36px"
              textAlign="center"
            >
              Feature
            </Text>
            <Text mt="3rem">This is a template Figma file, turned</Text>
            <Text>into code using Anima. Learn more</Text>
            <Text>at AnimaApp.com</Text>
            <Box display="flex" py="2rem">
              <Text
                color="#FF6250"
                fontWeight="medium"
                fontSize="14px"
                lineHeight="24px"
              >
                Read More
              </Text>
              <Box mt="2" ml="3">
                  <svg  width="17" height="12" viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.019 2.16874C10.7363 1.88606 10.7363 1.42774 11.019 1.14506C11.3017 0.862374 11.76 0.862374 12.0427 1.14506L16.3858 5.48819C16.6685 5.77087 16.6685 6.22919 16.3858 6.51188L12.0427 10.855C11.76 11.1377 11.3017 11.1377 11.019 10.855C10.7363 10.5723 10.7363 10.114 11.019 9.83132L14.1265 6.72388H1.40469C1.00051 6.72388 0.672852 6.3998 0.672852 6.00002C0.672852 5.60025 1.00051 5.27617 1.40469 5.27617H14.1264L11.019 2.16874Z" fill="#FF6250"/>
                  </svg>
               </Box> 
            </Box>
          </Box>

          <Box
            w="100%"
            h="30rem"
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
          >
            <Image src="./images/cloudImage.png" />
            <Text
              fontSize="26px"
              fontWeight="normal"
              lineHeight="36px"
              textAlign="center"
            >
              Feature
            </Text>
            <Text mt="3rem">This is a template Figma file, turned</Text>
            <Text>into code using Anima. Learn more</Text>
            <Text>at AnimaApp.com</Text>
            <Box display="flex" py="2rem">
              <Text
                color="#FF6250"
                fontWeight="medium"
                fontSize="14px"
                lineHeight="24px"
              >
                Read More
              </Text>
              <Box mt="2" ml="3">
                  <svg  width="17" height="12" viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.019 2.16874C10.7363 1.88606 10.7363 1.42774 11.019 1.14506C11.3017 0.862374 11.76 0.862374 12.0427 1.14506L16.3858 5.48819C16.6685 5.77087 16.6685 6.22919 16.3858 6.51188L12.0427 10.855C11.76 11.1377 11.3017 11.1377 11.019 10.855C10.7363 10.5723 10.7363 10.114 11.019 9.83132L14.1265 6.72388H1.40469C1.00051 6.72388 0.672852 6.3998 0.672852 6.00002C0.672852 5.60025 1.00051 5.27617 1.40469 5.27617H14.1264L11.019 2.16874Z" fill="#FF6250"/>
                  </svg>
               </Box> 
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>:
      <Box w="100%" h="143rem" display="flex"  flexDirection="column">
           <Box
            w="100%"
            h="30rem"
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            pt="15rem"
          >
            <svg width="17" height="12" viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.019 2.16874C10.7363 1.88606 10.7363 1.42774 11.019 1.14506C11.3017 0.862374 11.76 0.862374 12.0427 1.14506L16.3858 5.48819C16.6685 5.77087 16.6685 6.22919 16.3858 6.51188L12.0427 10.855C11.76 11.1377 11.3017 11.1377 11.019 10.855C10.7363 10.5723 10.7363 10.114 11.019 9.83132L14.1265 6.72388H1.40469C1.00051 6.72388 0.672852 6.3998 0.672852 6.00002C0.672852 5.60025 1.00051 5.27617 1.40469 5.27617H14.1264L11.019 2.16874Z" fill="#FF6250"/>
            </svg>
            <Text
              fontSize="26px"
              fontWeight="normal"
              lineHeight="36px"
              textAlign="center"
            >
              Feature
            </Text>
            <Text mt="3rem">This is a template Figma file, turned</Text>
            <Text>into code using Anima. Learn more</Text>
            <Text>at AnimaApp.com</Text>
            <Box display="flex"  py="2rem">
              <Text
                color="#FF6250"
                fontWeight="medium"
                fontSize="14px"
                lineHeight="24px"
              >
                Read More
              </Text>
               <Box mt="2" ml="3">
                  <svg  width="17" height="12" viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.019 2.16874C10.7363 1.88606 10.7363 1.42774 11.019 1.14506C11.3017 0.862374 11.76 0.862374 12.0427 1.14506L16.3858 5.48819C16.6685 5.77087 16.6685 6.22919 16.3858 6.51188L12.0427 10.855C11.76 11.1377 11.3017 11.1377 11.019 10.855C10.7363 10.5723 10.7363 10.114 11.019 9.83132L14.1265 6.72388H1.40469C1.00051 6.72388 0.672852 6.3998 0.672852 6.00002C0.672852 5.60025 1.00051 5.27617 1.40469 5.27617H14.1264L11.019 2.16874Z" fill="#FF6250"/>
                  </svg>
               </Box> 
            </Box>
          </Box>

          <Box
            w="100%"
            h="30rem"
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            pt="15rem"
          
           
          >
            <Image src="./images/secondImage.png" />
            <Text
              fontSize="26px"
              fontWeight="normal"
              lineHeight="36px"
              textAlign="center"
            >
              Feature
            </Text>
            <Text mt="3rem">This is a template Figma file, turned</Text>
            <Text>into code using Anima. Learn more</Text>
            <Text>at AnimaApp.com</Text>
            <Box display="flex" py="2rem">
              <Text
                color="#FF6250"
                fontWeight="medium"
                fontSize="14px"
                lineHeight="24px"
              >
                Read More
              </Text>
              <Box mt="2" ml="3">
              <svg width="17" height="12" viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.019 2.16874C10.7363 1.88606 10.7363 1.42774 11.019 1.14506C11.3017 0.862374 11.76 0.862374 12.0427 1.14506L16.3858 5.48819C16.6685 5.77087 16.6685 6.22919 16.3858 6.51188L12.0427 10.855C11.76 11.1377 11.3017 11.1377 11.019 10.855C10.7363 10.5723 10.7363 10.114 11.019 9.83132L14.1265 6.72388H1.40469C1.00051 6.72388 0.672852 6.3998 0.672852 6.00002C0.672852 5.60025 1.00051 5.27617 1.40469 5.27617H14.1264L11.019 2.16874Z" fill="#FF6250"/>
              </svg>
              </Box>
            </Box>
          </Box>

          <Box
            w="100%"
            h="30rem"
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            pt="15rem"
            mt="6rem"
          >
            <Image src="./images/exerciseImage.png" />
            <Text
              fontSize="26px"
              fontWeight="normal"
              lineHeight="36px"
              textAlign="center"
            >
              Feature
            </Text>
            <Text mt="3rem">This is a template Figma file, turned</Text>
            <Text>into code using Anima. Learn more</Text>
            <Text>at AnimaApp.com</Text>
            <Box display="flex" py="2rem">
              <Text
                color="#FF6250"
                fontWeight="medium"
                fontSize="14px"
                lineHeight="24px"
              >
                Read More
              </Text>
              <Box mt="2" ml="3">
              <svg width="17" height="12" viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.019 2.16874C10.7363 1.88606 10.7363 1.42774 11.019 1.14506C11.3017 0.862374 11.76 0.862374 12.0427 1.14506L16.3858 5.48819C16.6685 5.77087 16.6685 6.22919 16.3858 6.51188L12.0427 10.855C11.76 11.1377 11.3017 11.1377 11.019 10.855C10.7363 10.5723 10.7363 10.114 11.019 9.83132L14.1265 6.72388H1.40469C1.00051 6.72388 0.672852 6.3998 0.672852 6.00002C0.672852 5.60025 1.00051 5.27617 1.40469 5.27617H14.1264L11.019 2.16874Z" fill="#FF6250"/>
              </svg>
              </Box>
            </Box>
          </Box>

          <Box
            w="100%"
            h="30rem"
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            pt="15rem"
            mt="6rem"
          >
            <Image src="./images/cloudImage.png" />
            <Text
              fontSize="26px"
              fontWeight="normal"
              lineHeight="36px"
              textAlign="center"
            >
              Feature
            </Text>
            <Text mt="3rem">This is a template Figma file, turned</Text>
            <Text>into code using Anima. Learn more</Text>
            <Text>at AnimaApp.com</Text>
            <Box display="flex" py="2rem">
              <Text
                color="#FF6250"
                fontWeight="medium"
                fontSize="14px"
                lineHeight="24px"
              >
                Read More
              </Text>
              <Box mt="2" ml="3">
              <svg width="17" height="12" viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.019 2.16874C10.7363 1.88606 10.7363 1.42774 11.019 1.14506C11.3017 0.862374 11.76 0.862374 12.0427 1.14506L16.3858 5.48819C16.6685 5.77087 16.6685 6.22919 16.3858 6.51188L12.0427 10.855C11.76 11.1377 11.3017 11.1377 11.019 10.855C10.7363 10.5723 10.7363 10.114 11.019 9.83132L14.1265 6.72388H1.40469C1.00051 6.72388 0.672852 6.3998 0.672852 6.00002C0.672852 5.60025 1.00051 5.27617 1.40469 5.27617H14.1264L11.019 2.16874Z" fill="#FF6250"/>
              </svg>
              </Box>
            </Box>
          </Box>
          
      </Box>}
    </>
  );
};
