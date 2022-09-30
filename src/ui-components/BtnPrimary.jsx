/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Text } from "@aws-amplify/ui-react";
export default function BtnPrimary(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="10px"
      width="327px"
      justifyContent="center"
      alignItems="center"
      position="relative"
      borderRadius="8px"
      padding="12px 154px 12px 154px"
      backgroundColor="rgba(45,156,219,1)"
      {...rest}
      {...getOverrideProps(overrides, "BtnPrimary")}
    >
      <Text
        fontFamily="Inter"
        fontSize="16px"
        fontWeight="500"
        color="rgba(255,255,255,1)"
        lineHeight="20px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Sign in"
        {...getOverrideProps(overrides, "Sign in")}
      ></Text>
    </Flex>
  );
}
