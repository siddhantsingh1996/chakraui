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

export const Client = () => {
  const [isMobile] = useMediaQuery("(max-width: 600px)");

  const ContentWrapper = chakra("div", {
    // attach style props
    baseStyle: {
      w: "100%",
      h: "50rem",
    },
  });

  const ContentMobileWrapper = chakra("div", {
    baseStyle: {
      w: "100%",
      h: "120rem",
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
    },
  });

  const TextDiv = chakra("div", {
    // attach style props
    baseStyle: {
      textAlign: "center",
      fontWeight: "400",
      fontSize: "30px",
      lineHeight: "40px",
    },
  });

  const CardWrapper = chakra("div", {
    baseStyle: {
      w: "100%",
      display: "flex",
      justifyContent: "center",
      pt: "4rem",
    },
  });

  const Card = chakra("div", {
    baseStyle: {
      w: {lg:"13%",md:"19%"},
      h: {lg:"32rem",md:"35rem"},
      ml: "2rem",
      bg: "brand.cyan",
    },
  });

  const CardMobile = chakra("div", {
    baseStyle: {
      w: "315px",
      h: "372px",
      bg: "brand.cyan",
      mt:"2rem"
    },
  });

  const CardText = chakra("div", {
    baseStyle: {
      w: "70%",
      ml: "3rem",
      mt: "2rem",
      fontSize: "11.71px",
      fontWeight: "bold",
    },
    sizes:{
      fontSize: "20.15px",
    }
  });


  const CardMobileText = chakra("div",{
    baseStyle: {
      w: "70%",
      fontSize: "20.15px",
      fontWeight: "bold",
      mt:"3rem",
      ml:"4rem"
    }
  })

  const CardProfile = chakra("div", {
    baseStyle: {
      w: "100%",
      h: "25%",
      display: "flex",
      pl: "3rem",
      pt: "17rem",
      alignItems: "center",
    },
  });

  const CardMobileProfile = chakra("div", {
    baseStyle: {
      w: "100%",
      h: "25%",
      display: "flex",
      pl: "3rem",
      pt: "12rem",
      alignItems: "center",
    },
  });

  return (
    <>
      {!isMobile ? (
        <ContentWrapper>
          <TextDiv>Clients</TextDiv>

          <CardWrapper>
            <Card>
              <CardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor.
              </CardText>
              <CardProfile>
                <Image src="./images/Client comment.png" />
              </CardProfile>
            </Card>
            <Card>
              <CardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor.
              </CardText>
              <CardProfile>
                <Image src="./images/Client comment Two.png" />
              </CardProfile>
            </Card>
            <Card>
              <CardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor.
              </CardText>
              <CardProfile>
                <Image src="./images/Client comment Three.png" />
              </CardProfile>
            </Card>
          </CardWrapper>
        </ContentWrapper>
      ) : (
        <>
          <ContentMobileWrapper>
            <TextDiv>Clients</TextDiv>
            <CardMobile>
              <CardMobileText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor.
              </CardMobileText>
              <CardMobileProfile>
                <Image src="./images/girlCommentmobile.png" />
              </CardMobileProfile>
            </CardMobile>

            <CardMobile>
              <CardMobileText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor.
              </CardMobileText>
              <CardMobileProfile>
                <Image src="./images/mencommentmobile.png" />
              </CardMobileProfile>
            </CardMobile>

            <CardMobile>
              <CardMobileText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor.
              </CardMobileText>
              <CardMobileProfile>
                <Image src="./images/girlCommentmob.png" />
              </CardMobileProfile>
            </CardMobile>
          </ContentMobileWrapper>
        </>
      )}
    </>
  );
};
