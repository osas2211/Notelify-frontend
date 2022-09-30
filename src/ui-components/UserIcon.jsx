/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Icon, Text } from "@aws-amplify/ui-react";
export default function UserIcon(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="8px"
      width="fit-content"
      alignItems="center"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "UserIcon")}
    >
      <Icon
        width="45px"
        height="45px"
        viewBox={{ minX: 0, minY: 0, width: 45, height: 45 }}
        paths={[
          {
            d: "M45 22.5C45 34.9264 34.9264 45 22.5 45C10.0736 45 0 34.9264 0 22.5C0 10.0736 10.0736 0 22.5 0C34.9264 0 45 10.0736 45 22.5Z",
            fillRule: "nonzero",
          },
        ]}
        shrink="0"
        position="relative"
        {...getOverrideProps(overrides, "Ellipse 1")}
      ></Icon>
      <Text
        fontFamily="Inter"
        fontSize="14px"
        fontWeight="500"
        color="rgba(24,24,27,1)"
        lineHeight="24px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Adam Kelani"
        {...getOverrideProps(overrides, "Adam Kelani")}
      ></Text>
    </Flex>
  );
}
