/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import Trash from "./Trash";
import { Text, View } from "@aws-amplify/ui-react";
export default function QuicknoteCard(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="321px"
      height="110px"
      position="relative"
      boxShadow="0px 2px 4px rgba(0, 0, 0, 0.25)"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "QuicknoteCard")}
    >
      <Trash
        width="24px"
        height="24px"
        position="absolute"
        top="7px"
        left="286px"
        overflow="hidden"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "trash")}
      ></Trash>
      <Text
        fontFamily="Inter"
        fontSize="16px"
        fontWeight="700"
        color="rgba(0,0,0,1)"
        lineHeight="24px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="center"
        letterSpacing="0.01px"
        width="231px"
        height="24px"
        position="absolute"
        top="10px"
        left="17px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Take Youtoube Tutorials"
        {...getOverrideProps(overrides, "Take Youtoube Tutorials")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="16px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="24px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="center"
        letterSpacing="0.01px"
        width="269px"
        height="48px"
        position="absolute"
        top="37px"
        left="17px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Learn about aws amplify and redis by 10pm today."
        {...getOverrideProps(
          overrides,
          "Learn about aws amplify and redis by 10pm today."
        )}
      ></Text>
    </View>
  );
}
