/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import Frame67 from "./Frame67";
import { View } from "@aws-amplify/ui-react";
export default function LandingInfo(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="381px"
      height="206px"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "LandingInfo")}
    >
      <Frame67
        display="flex"
        gap="24px"
        position="absolute"
        top="12px"
        left="12px"
        direction="column"
        alignItems="center"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 67")}
      ></Frame67>
    </View>
  );
}
