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
  Input,
} from "@chakra-ui/react";

export const Footer = () => {
  const [isMobile] = useMediaQuery("(max-width: 600px)");

  const MainSection = chakra("div", {
    baseStyle: {
      w: {lg:"60%",md:"80%"},
      h: "20rem",
      display: "flex",
      justifyContent: "center",
    },
  });

  const LeftSection = chakra("div", {
    baseStyle: {
      w: "50%",
    },
  });

  const RightSection = chakra("div", {
    baseStyle: {
      w: "50%",
      display: "flex",
      alignItems: "center",
    },
  });

  const SubscribeText = chakra("div", {
    baseStyle: {
      fontFamily: "Lato",
      fontWeight: "normal",
      fontSize: "14px",
      lineHeight: "24px",
      color: "#A4A4A4",
      ml: "2.3rem",
      mt: "4rem",
    },
  });

  const SubscribeTextMobile = chakra("div", {
    baseStyle: {
      fontFamily: "Lato",
      fontWeight: "normal",
      fontSize: "14px",
      lineHeight: "24px",
      color: "#A4A4A4",
      ml: "2.3rem",
      mt: "2rem",
    },
  });

  const TextFieldWrapper = chakra("div", {
    baseStyle: {
      bg: "#F3F3F3",
      borderRadius: "12px",
      w: "230px",
      h: "40px",
      ml: "2rem",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-around",
    },
  });

  const SendText = chakra("div", {
    baseStyle: {
      fontFamily: "lato",
      fontWeight: "normal",
      fontSize: "14px",
      lineHeight: "24px",
      color: "#FF6250",
    },
  });

  const FooterText = chakra("div", {
    baseStyle: {
      fontFamily: "lato",
      fontWeight: "600",
      fontSize: "14px",
      lineHeight: "24px",
      color: "#2d2d2d",
      ml: "1rem",
      mt: "3rem",
    },
  });

  const FooterTextMobileWrapper = chakra("div", {
    baseStyle: {
       display:"flex",
       ml:'1rem'
    },
  });

  const Initialize = chakra('div',{
        baseStyle: {
            w:"100%",
            display:"flex",
             justifyContent:"center"
        },
  })

  const Wrapper = chakra('div',{
    baseStyle: {
        w:"90%",
        py:"2.5rem",
        borderTop:"2px solid #E5E7EB",
        borderBottom:"2px solid #E5E7EB",
        display:"flex",
        justifyContent:"center"
        
    },
})

const MobileWrapper = chakra('div',{
    baseStyle: {
        w:"90%",
        h:"25rem",
        borderTop:"2px solid #E5E7EB",
        borderBottom:"2px solid #E5E7EB",
        pt:"3rem"
    },
})

  return (
    <>
      {!isMobile ? (
        <Initialize >
          <Wrapper>
            <MainSection>
              <LeftSection>
                <Image w="90.99px" h="18px" mx="2rem" src="/images/Logo.png" />
                <SubscribeText>Subscribe to our newsletter</SubscribeText>
                <TextFieldWrapper>
                  <Input
                    w="70%"
                    placeholder="Enter your Email"
                    color="#2d2d2d"
                  />
                  <SendText> Send</SendText>
                </TextFieldWrapper>
              </LeftSection>

              <RightSection>
                <FooterText>Privacy policy</FooterText>
                <FooterText>Coockies policy</FooterText>
                <FooterText>© Trainers 2022</FooterText>
              </RightSection>
            </MainSection>
          </Wrapper>
        </Initialize>
      ) : (
        <Initialize>
              <MobileWrapper>
                 <Image w="90.99px" h="18px" mx="2rem" src="/images/Logo.png" />
                 <SubscribeTextMobile>Subscribe to our newsletter</SubscribeTextMobile>
                 <TextFieldWrapper>
                  <Input
                    w="70%"
                    placeholder="Enter your Email"
                    color="#2d2d2d"
                  />
                    <SendText> Send</SendText>
                </TextFieldWrapper>
                <FooterTextMobileWrapper>
                <FooterText>Privacy policy</FooterText>
                <FooterText>Coockies policy</FooterText>
                <FooterText>© Trainers 2022</FooterText>
                </FooterTextMobileWrapper>
              </MobileWrapper>
        </Initialize>
      )}
    </>
  );
};
