/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Text, View } from "@aws-amplify/ui-react";
export default function AwsPowered(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="24px"
      direction="column"
      justifyContent="flex-end"
      alignItems="center"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "AwsPowered")}
    >
      
      <Flex
        gap="8px"
        direction="column"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 63")}
      >
        <Text
          fontFamily="Inter"
          fontSize="24px"
          fontWeight="700"
          color="rgba(39,39,42,1)"
          lineHeight="40px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Powered by AWS Amplify"
          {...getOverrideProps(overrides, "Powered by AWS Amplify")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="18px"
          fontWeight="400"
          color="rgba(39,39,42,1)"
          lineHeight="32px"
          textAlign="center"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          width="357px"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Hosted on the AWS Amplify platform, so you won’t have to worry about downtimes."
          {...getOverrideProps(
            overrides,
            "Hosted on the AWS Amplify platform, so you won\u2019t have to worry about downtimes."
          )}
        ></Text>
      </Flex>
    </Flex>
  );
}
