/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Icon, Text } from "@aws-amplify/ui-react";
export default function Invitation(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="640px"
      width="1315px"
      justifyContent="space-between"
      alignItems="flex-start"
      position="relative"
      borderRadius="8px"
      padding="20px 30px 20px 30px"
      backgroundColor="rgba(244,244,245,0.5)"
      {...rest}
      {...getOverrideProps(overrides, "Invitation")}
    >
      <Flex
        gap="23px"
        width="fit-content"
        alignItems="center"
        shrink="0"
        height="62px"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 89")}
      >
        <Icon
          width="62px"
          height="62px"
          viewBox={{ minX: 0, minY: 0, width: 62, height: 62 }}
          paths={[
            {
              d: "M62 31C62 48.1208 48.1208 62 31 62C13.8792 62 0 48.1208 0 31C0 13.8792 13.8792 0 31 0C48.1208 0 62 13.8792 62 31Z",
              fillRule: "nonzero",
            },
          ]}
          shrink="0"
          position="relative"
          {...getOverrideProps(overrides, "Ellipse 2")}
        ></Icon>
        <Text
          fontFamily="Inter"
          fontSize="18px"
          fontWeight="500"
          color="rgba(39,39,42,1)"
          lineHeight="32px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          letterSpacing="0.12px"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Victor Aigbe invited you to join Cash flow retaliation"
          {...getOverrideProps(
            overrides,
            "Victor Aigbe invited you to join Cash flow retaliation"
          )}
        ></Text>
      </Flex>
      <Text
        fontFamily="Inter"
        fontSize="16px"
        fontWeight="400"
        color="rgba(39,39,42,1)"
        lineHeight="32px"
        textAlign="right"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="54mins ago"
        {...getOverrideProps(overrides, "54mins ago")}
      ></Text>
    </Flex>
  );
}
