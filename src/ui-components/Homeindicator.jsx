/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { View } from "@aws-amplify/ui-react";
export default function Homeindicator(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="375px"
      height="34px"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "Homeindicator")}
    >
      <View
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Container")}
      ></View>
      <View
        position="absolute"
        top="55.88%"
        bottom="29.41%"
        left="32.27%"
        right="32%"
        borderRadius="2.5px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(52,64,84,0.85)"
        {...getOverrideProps(overrides, "Indicator")}
      ></View>
    </View>
  );
}
