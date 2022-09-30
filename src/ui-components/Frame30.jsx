/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, View } from "@aws-amplify/ui-react";
export default function Frame30(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="20px"
      width="fit-content"
      alignItems="center"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "Frame30")}
    >
      <View
        width="46px"
        height="46px"
        shrink="0"
        overflow="hidden"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "openmoji:tear-off-calendar")}
      ></View>
      <Flex
        gap="8px"
        direction="column"
        justifyContent="center"
        shrink="0"
        height="56px"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 27")}
      >
        <View
          width="158px"
          height="24px"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Plan your projects")}
        ></View>
        <View
          width="377px"
          height="24px"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(
            overrides,
            "Get the feel and comfort of stating a new project"
          )}
        ></View>
      </Flex>
    </Flex>
  );
}
