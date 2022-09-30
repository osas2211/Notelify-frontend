/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import {
  getOverrideProps,
  getOverridesFromVariants,
  mergeVariantsAndOverrides,
} from "@aws-amplify/ui-react/internal";
import { Flex, Text, View } from "@aws-amplify/ui-react";
import Documentreport from "./Documentreport";
export default function Sidemenuitems(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        "Rectangle 1": {},
        "document-report": {},
        "All Notes": {},
        "Frame 25": {},
        Sidemenuitems: {},
      },
      variantValues: { property1: "active" },
    },
    {
      overrides: {
        "Rectangle 1": {},
        "document-report": {},
        "All Notes": { fontWeight: "500", color: "rgba(82,82,91,1)" },
        "Frame 25": {},
        Sidemenuitems: {},
      },
      variantValues: { property1: "default" },
    },
    {
      overrides: {
        "Rectangle 1": { backgroundColor: "rgba(212,212,216,1)" },
        "document-report": {},
        "All Notes": { fontWeight: "500", color: "rgba(82,82,91,1)" },
        "Frame 25": {},
        Sidemenuitems: { backgroundColor: "rgba(244,244,245,1)" },
      },
      variantValues: { property1: "Hover" },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <Flex
      gap="27px"
      width="319px"
      alignItems="center"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "Sidemenuitems")}
    >
      <View
        width="8px"
        height="40px"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(13,162,231,1)"
        {...getOverrideProps(overrides, "Rectangle 1")}
      ></View>
      <Flex
        gap="20px"
        width="fit-content"
        alignItems="center"
        shrink="0"
        height="32px"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 25")}
      >
        <Documentreport
          width="24px"
          height="24px"
          shrink="0"
          overflow="hidden"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "document-report")}
        ></Documentreport>
        <Text
          fontFamily="Inter"
          fontSize="18px"
          fontWeight="700"
          color="rgba(39,39,42,1)"
          lineHeight="32px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          letterSpacing="0.03px"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="All Notes"
          {...getOverrideProps(overrides, "All Notes")}
        ></Text>
      </Flex>
    </Flex>
  );
}
