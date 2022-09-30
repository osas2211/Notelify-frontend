/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Icon, Text, View } from "@aws-amplify/ui-react";
import NotelifyLogo from "./NotelifyLogo";
export default function SignIn(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="1440px"
      height="960px"
      overflow="hidden"
      position="relative"
      borderRadius="44px"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(252,253,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "SignIn")}
    >
      <Icon
        width="500px"
        height="500px"
        viewBox={{ minX: 0, minY: 0, width: 500, height: 500 }}
        paths={[
          {
            d: "M500 250C500 388.071 388.071 500 250 500C111.929 500 0 388.071 0 250C0 111.929 111.929 0 250 0C388.071 0 500 111.929 500 250Z",
            fill: "rgba(194,99,249,0.06)",
            fillRule: "nonzero",
          },
        ]}
        position="absolute"
        top="230px"
        left="70px"
        {...getOverrideProps(overrides, "Ellipse 1")}
      ></Icon>
      <Flex
        gap="42px"
        position="absolute"
        top="211px"
        left="192px"
        direction="column"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Group 1")}
      ></Flex>
      <Text
        fontFamily="Inter"
        fontSize="16px"
        fontWeight="400"
        color="rgba(102,112,133,1)"
        fontStyle="italic"
        lineHeight="20px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        position="absolute"
        top="900px"
        left="40px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="POWERED BY AWS AMPLIFY"
        {...getOverrideProps(overrides, "POWERED BY AWS AMPLIFY")}
      ></Text>
      <NotelifyLogo
        width="136px"
        height="50px"
        position="absolute"
        top="32px"
        left="40px"
        overflow="hidden"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "NotelifyLogo")}
      ></NotelifyLogo>
      <Flex
        gap="10px"
        position="absolute"
        top="0px"
        left="725px"
        direction="column"
        width="745px"
        height="960px"
        padding="10px 10px 10px 0px"
        {...getOverrideProps(overrides, "img")}
      ></Flex>
    </View>
  );
}
