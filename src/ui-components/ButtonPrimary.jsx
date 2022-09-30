/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Text } from "@aws-amplify/ui-react";
export default function ButtonPrimary(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="0"
      direction="column"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "ButtonPrimary")}
    >
      <Flex
        gap="12px"
        direction="column"
        width="438px"
        height="58px"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        overflow="hidden"
        position="relative"
        borderRadius="8px"
        padding="0px 24px 0px 24px"
        backgroundColor="rgba(13,162,231,1)"
        {...getOverrideProps(overrides, "ButtonPrimary11915671")}
      >
        <Text
          fontFamily="Inter"
          fontSize="20px"
          fontWeight="400"
          color="rgba(255,255,255,1)"
          lineHeight="32px"
          textAlign="center"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Sign In"
          {...getOverrideProps(overrides, "Sign In")}
        ></Text>
      </Flex>
    </Flex>
  );
}
