/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Image, View } from "@aws-amplify/ui-react";
export default function DRIP20(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="736px"
      height="865px"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "DRIP20")}
    >
      <Image
        position="absolute"
        top="0%"
        bottom="0%"
        height="100%"
        left="0%"
        right="0%"
        width="100%"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "DRIP_20")}
      ></Image>
    </View>
  );
}
