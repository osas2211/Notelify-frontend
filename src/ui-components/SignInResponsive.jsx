/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Icon, Text, View } from "@aws-amplify/ui-react";
import XIcon from "./XIcon";
import HideIcon from "./HideIcon";
import Homeindicator from "./Homeindicator";
export default function SignInResponsive(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="375px"
      height="812px"
      overflow="hidden"
      position="relative"
      borderRadius="32px"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(252,253,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "SignInResponsive")}
    >
      <Icon
        width="328px"
        height="328px"
        viewBox={{ minX: 0, minY: 0, width: 328, height: 328 }}
        paths={[
          {
            d: "M328 164C328 254.575 254.575 328 164 328C73.4253 328 0 254.575 0 164C0 73.4253 73.4253 0 164 0C254.575 0 328 73.4253 328 164Z",
            fill: "rgba(194,99,249,0.06)",
            fillRule: "nonzero",
          },
        ]}
        position="absolute"
        top="242px"
        left="24px"
        {...getOverrideProps(overrides, "Ellipse 1")}
      ></Icon>
      <Flex
        gap="42px"
        position="absolute"
        top="207px"
        left="24px"
        direction="column"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 1")}
      >
        <Flex
          gap="8px"
          direction="column"
          justifyContent="center"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Headline")}
        >
          <Text
            fontFamily="Inter"
            fontSize="32px"
            fontWeight="700"
            color="rgba(52,64,84,1)"
            textTransform="capitalize"
            lineHeight="37.5px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            letterSpacing="0.17px"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Welcome Back"
            {...getOverrideProps(overrides, "Welcome Back")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="14px"
            fontWeight="400"
            color="rgba(102,112,133,1)"
            lineHeight="24px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Please fill your detail to access your account."
            {...getOverrideProps(
              overrides,
              "Please fill your detail to access your account."
            )}
          ></Text>
        </Flex>
        <Flex
          gap="8px"
          direction="column"
          justifyContent="center"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Email101597")}
        >
          <Text
            fontFamily="Inter"
            fontSize="14px"
            fontWeight="500"
            color="rgba(52,64,84,1)"
            lineHeight="20px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Email"
            {...getOverrideProps(overrides, "Email101598")}
          ></Text>
          <View
            width="327px"
            height="44px"
            shrink="0"
            overflow="hidden"
            position="relative"
            border="1px SOLID rgba(208,213,221,1)"
            borderRadius="8px"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame 3101599")}
          >
            <Flex
              gap="82px"
              position="absolute"
              top="10px"
              left="14px"
              alignItems="center"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Frame 4101600")}
            >
              <Text
                fontFamily="Inter"
                fontSize="16px"
                fontWeight="400"
                color="rgba(102,112,133,1)"
                lineHeight="24px"
                textAlign="left"
                display="flex"
                direction="column"
                justifyContent="flex-start"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="debra.holt@example.com"
                {...getOverrideProps(overrides, "debra.holt@example.com")}
              ></Text>
              <XIcon
                width="24px"
                height="24px"
                shrink="0"
                overflow="hidden"
                position="relative"
                padding="0px 0px 0px 0px"
                {...getOverrideProps(overrides, "X Icon")}
              ></XIcon>
            </Flex>
          </View>
        </Flex>
        <Flex
          gap="8px"
          direction="column"
          justifyContent="center"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Password101591")}
        >
          <Text
            fontFamily="Inter"
            fontSize="14px"
            fontWeight="500"
            color="rgba(52,64,84,1)"
            lineHeight="20px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Password"
            {...getOverrideProps(overrides, "Password101592")}
          ></Text>
          <View
            width="327px"
            height="44px"
            shrink="0"
            overflow="hidden"
            position="relative"
            border="1px SOLID rgba(208,213,221,1)"
            borderRadius="8px"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame 3101593")}
          >
            <Flex
              gap="203px"
              position="absolute"
              top="10px"
              left="14px"
              alignItems="center"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Frame 4101594")}
            >
              <Text
                fontFamily="Inter"
                fontSize="16px"
                fontWeight="400"
                color="rgba(102,112,133,1)"
                lineHeight="24px"
                textAlign="left"
                display="flex"
                direction="column"
                justifyContent="flex-start"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="••••••••"
                {...getOverrideProps(
                  overrides,
                  "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"
                )}
              ></Text>
              <HideIcon
                width="24px"
                height="24px"
                shrink="0"
                overflow="hidden"
                position="relative"
                padding="0px 0px 0px 0px"
                {...getOverrideProps(overrides, "Hide Icon")}
              ></HideIcon>
            </Flex>
          </View>
        </Flex>
        <Flex
          gap="81px"
          width="fit-content"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Remember me101586")}
        >
          <Flex
            gap="8px"
            width="fit-content"
            alignItems="center"
            shrink="0"
            height="20px"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame 8")}
          >
            <View
              width="16px"
              height="16px"
              shrink="0"
              overflow="hidden"
              position="relative"
              border="1px SOLID rgba(208,213,221,1)"
              borderRadius="4px"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Frame 7")}
            ></View>
            <Text
              fontFamily="Inter"
              fontSize="14px"
              fontWeight="500"
              color="rgba(52,64,84,1)"
              lineHeight="20px"
              textAlign="left"
              display="flex"
              direction="column"
              justifyContent="flex-start"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Remember me"
              {...getOverrideProps(overrides, "Remember me101589")}
            ></Text>
          </Flex>
          <Text
            fontFamily="Inter"
            fontSize="14px"
            fontWeight="500"
            color="rgba(84,41,255,1)"
            lineHeight="20px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Forgot Password?"
            {...getOverrideProps(overrides, "Forgot Password?")}
          ></Text>
        </Flex>
        <Flex
          gap="10px"
          width="327px"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          position="relative"
          borderRadius="8px"
          padding="12px 154px 12px 154px"
          backgroundColor="rgba(84,41,255,1)"
          {...getOverrideProps(overrides, "Sign in101584")}
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
            {...getOverrideProps(overrides, "Sign in101585")}
          ></Text>
        </Flex>
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="500"
          color="rgba(0,0,0,1)"
          lineHeight="20px"
          textAlign="center"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          width="327px"
          height="21px"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Don’t have an account? Sign up"
          {...getOverrideProps(
            overrides,
            "Don\u2019t have an account? Sign up"
          )}
        ></Text>
      </Flex>
      <View
        width="136px"
        height="50px"
        position="absolute"
        top="79px"
        left="120px"
        overflow="hidden"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "notelify-logo 3")}
      >
        <View
          padding="0px 0px 0px 0px"
          position="absolute"
          top="0%"
          bottom="0%"
          left="0%"
          right="66.67%"
          {...getOverrideProps(overrides, "SvgjsG1188")}
        >
          <Icon
            width="45.33331298828125px"
            height="50px"
            viewBox={{ minX: 0, minY: 0, width: 45.33331298828125, height: 50 }}
            paths={[
              {
                d: "M42.0364 0L3.29697 0C1.4761 0 0 1.49238 0 3.33333L0 46.6667C0 48.5076 1.4761 50 3.29697 50L42.0364 50C43.8572 50 45.3333 48.5076 45.3333 46.6667L45.3333 3.33333C45.3333 1.49238 43.8572 0 42.0364 0Z",
                fill: "rgba(255,255,255,1)",
                fillRule: "nonzero",
              },
            ]}
            position="absolute"
            top="0%"
            bottom="0%"
            left="0%"
            right="0%"
            {...getOverrideProps(overrides, "Vector20242")}
          ></Icon>
        </View>
        <View
          padding="0px 0px 0px 0px"
          position="absolute"
          top="12.5%"
          bottom="12.45%"
          left="6.06%"
          right="72.73%"
          {...getOverrideProps(overrides, "SvgjsG1189")}
        >
          <View
            padding="0px 0px 0px 0px"
            position="absolute"
            top="0%"
            bottom="0%"
            left="0%"
            right="0%"
            {...getOverrideProps(overrides, "Group20244")}
          >
            <Icon
              width="20.72998046875px"
              height="35.298370361328125px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 20.72998046875,
                height: 35.298370361328125,
              }}
              paths={[
                {
                  d: "M1.22215 27.0583C0.11599 30.0471 -0.724549 17.9195 1.69654 15.5397C1.74449 16.7925 2.16166 17.0263 2.47367 18.1302C3.10427 16.0248 3.15917 13.6716 4.00126 11.6159C4.80197 9.65984 5.79562 8.17091 7.3897 6.88721C7.682 7.38326 7.86178 7.91644 8.14634 8.39842C9.89856 2.2414 16.3642 2.77967 20.708 0C20.8519 1.10076 20.2468 2.33053 20.132 3.42543C20.004 4.64033 19.9769 5.8056 19.5365 6.92004C18.4331 9.71339 16.3623 10.3826 14.2389 12.0513C15.2252 11.9521 16.1009 11.8066 17.1069 11.7742C15.4529 12.1733 15.3567 13.8573 14.7446 14.9901C13.8356 16.6721 12.6924 16.8805 11.1853 17.7064C12.1031 17.5157 13.3806 17.9793 14.0208 18.5606C11.8325 20.0546 11.4602 22.7596 9.54595 24.406C7.98357 25.7507 4.06737 26.8437 3.5806 28.951L0 35.2984C0 35.2984 6.57662 13.0833 14.1388 7.60138C14.1388 7.60099 8.50205 7.38365 1.22215 27.0583Z",
                  fill: "rgba(0,0,0,1)",
                  fillRule: "nonzero",
                },
              ]}
              position="absolute"
              top="0%"
              bottom="5.94%"
              left="3.2%"
              right="24.95%"
              {...getOverrideProps(overrides, "Vector20245")}
            ></Icon>
            <View
              padding="0px 0px 0px 0px"
              position="absolute"
              top="79.73%"
              bottom="0%"
              left="0%"
              right="0%"
              {...getOverrideProps(overrides, "Group20246")}
            >
              <Icon
                width="28.8485107421875px"
                height="7.605377197265625px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 28.8485107421875,
                  height: 7.605377197265625,
                }}
                paths={[
                  {
                    d: "M2.50812 7.60537C1.71049 7.60537 0.902045 7.33604 0.189095 6.49209C-0.0939196 6.15709 -0.0548697 5.65323 0.276861 5.3667C0.608591 5.07978 1.10696 5.11965 1.39036 5.45543C2.06658 6.2556 2.75981 6.1141 4.29668 5.57349C4.59632 5.46755 4.90678 5.35849 5.2215 5.26702C6.10612 5.00942 6.99228 4.72133 7.84906 4.44301C10.3502 3.62995 12.9364 2.78913 15.7348 2.62573C16.5096 2.58508 17.163 2.84698 17.741 3.08152C18.065 3.21325 18.3716 3.33716 18.6732 3.39932C19.7009 3.6104 20.49 3.66826 21.0858 3.57483C21.8382 3.45678 22.5763 2.89819 23.29 2.35719C23.539 2.16838 23.7833 1.98349 24.0265 1.8154C24.1475 1.73253 24.2744 1.64263 24.4058 1.54803C25.4489 0.806889 26.7476 -0.122662 28.1314 0.0133704C28.5656 0.0540236 28.885 0.442966 28.8451 0.882334C28.8053 1.3217 28.4198 1.64341 27.9856 1.60393C27.1768 1.52458 26.1453 2.26376 25.3148 2.8548C25.1768 2.95291 25.0434 3.0479 24.9166 3.13546C24.6919 3.29026 24.4665 3.46147 24.2372 3.63464C23.4087 4.26203 22.4699 4.97385 21.3271 5.15288C20.5434 5.27523 19.5721 5.21347 18.3581 4.96447C17.915 4.87339 17.5272 4.71547 17.1518 4.56341C16.6662 4.36601 16.2456 4.19596 15.8249 4.2202C13.2275 4.37187 10.8497 5.14506 8.33235 5.9636C7.46397 6.24583 6.56621 6.53744 5.6584 6.80207C5.37809 6.88377 5.09662 6.98384 4.81476 7.08274C4.13507 7.32079 3.32739 7.60537 2.50812 7.60537Z",
                    fill: "rgba(0,0,0,1)",
                    fillRule: "nonzero",
                  },
                ]}
                position="absolute"
                top="0%"
                bottom="0%"
                left="0%"
                right="0%"
                {...getOverrideProps(overrides, "Vector20247")}
              ></Icon>
            </View>
          </View>
        </View>
        <View
          padding="0px 0px 0px 0px"
          position="absolute"
          top="30.83%"
          bottom="30.43%"
          left="39.39%"
          right="0%"
          {...getOverrideProps(overrides, "SvgjsG1190")}
        >
          <Icon
            width="82.42425537109375px"
            height="19.368316650390625px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 82.42425537109375,
              height: 19.368316650390625,
            }}
            paths={[
              {
                d: "M0 14.6717L0 2.02516C0 1.29266 0.57535 0.689417 1.32117 0.689417L1.59819 0.689417C2.23747 0.689417 2.59973 1.01258 2.96199 1.46501L10.4202 11.2246L10.4202 1.96053C10.4202 1.24957 10.9956 0.667873 11.6988 0.667873C12.4233 0.667873 12.9987 1.24957 12.9987 1.96053L12.9987 14.6286C12.9987 15.3611 12.4446 15.9428 11.7201 15.9428L11.6135 15.9428C10.9956 15.9428 10.612 15.6196 10.2498 15.1456L2.57842 5.106L2.57842 14.6717C2.57842 15.3826 2.00307 15.9643 1.29987 15.9643C0.57535 15.9643 0 15.3826 0 14.6717L0 14.6717ZM21.8846 16.1151C18.4538 16.1151 15.918 13.4652 15.918 10.2335L15.918 10.1905C15.918 6.93726 18.4751 4.24423 21.9272 4.24423C25.3793 4.24423 27.9151 6.89417 27.9151 10.1474L27.9151 10.1905C27.9151 13.4221 25.358 16.1151 21.8846 16.1151L21.8846 16.1151ZM21.9272 13.8314C24.0155 13.8314 25.3367 12.1941 25.3367 10.2335L25.3367 10.1905C25.3367 8.18683 23.909 6.52792 21.8846 6.52792C19.8176 6.52792 18.4964 8.16529 18.4964 10.1474L18.4964 10.1905C18.4964 12.1725 19.9242 13.8314 21.9272 13.8314ZM34.3079 16.0505C32.4114 16.0505 31.0689 15.2103 31.0689 12.7111L31.0689 6.72182L30.6427 6.72182C30.0248 6.72182 29.5346 6.2263 29.5346 5.60152C29.5346 4.97673 30.0248 4.48121 30.6427 4.48121L31.0689 4.48121L31.0689 2.54223C31.0689 1.83126 31.6443 1.24957 32.3688 1.24957C33.072 1.24957 33.6473 1.83126 33.6473 2.54223L33.6473 4.48121L35.6717 4.48121C36.2897 4.48121 36.8011 4.97673 36.8011 5.60152C36.8011 6.2263 36.2897 6.72182 35.6717 6.72182L33.6473 6.72182L33.6473 12.3018C33.6473 13.3144 34.1588 13.7237 35.0324 13.7237C35.3308 13.7237 35.5865 13.6591 35.6717 13.6591C36.2471 13.6591 36.7585 14.1331 36.7585 14.7363C36.7585 15.2103 36.4388 15.5981 36.0766 15.7489C35.5225 15.9428 34.9898 16.0505 34.3079 16.0505L34.3079 16.0505ZM41.2334 9.37177L47.0082 9.37177C46.8378 7.69131 45.8575 6.37711 44.1528 6.37711C42.5759 6.37711 41.4678 7.60513 41.2334 9.37177ZM48.4999 14.607C47.477 15.5334 46.1985 16.1151 44.4511 16.1151C41.1908 16.1151 38.6763 13.7237 38.6763 10.212L38.6763 10.1689C38.6763 6.91572 40.9564 4.24423 44.1741 4.24423C47.7541 4.24423 49.5227 7.21734 49.5227 9.84574C49.5227 10.5782 48.9687 11.0953 48.3081 11.0953L41.2547 11.0953C41.5318 12.9481 42.8316 13.9822 44.4938 13.9822C45.5805 13.9822 46.4329 13.5944 47.1574 12.9912C47.3492 12.8404 47.5197 12.7542 47.818 12.7542C48.3933 12.7542 48.8408 13.2067 48.8408 13.8099C48.8408 14.1331 48.6917 14.4131 48.4999 14.607L48.4999 14.607ZM52.3143 14.6717L52.3143 1.3142C52.3143 0.60324 52.8683 0.0215443 53.5928 0.0215443C54.3173 0.0215443 54.8927 0.60324 54.8927 1.3142L54.8927 14.6717C54.8927 15.4042 54.3173 15.9643 53.5928 15.9643C52.8896 15.9643 52.3143 15.4042 52.3143 14.6717ZM58.2169 1.55119L58.2169 1.42192C58.2169 0.646328 58.8562 0.15081 59.6873 0.15081C60.5183 0.15081 61.1576 0.646328 61.1576 1.42192L61.1576 1.55119C61.1576 2.32678 60.5183 2.84385 59.6873 2.84385C58.8562 2.84385 58.2169 2.32678 58.2169 1.55119ZM58.4087 14.6717L58.4087 5.66615C58.4087 4.93364 58.9627 4.35195 59.6873 4.35195C60.4118 4.35195 60.9871 4.93364 60.9871 5.66615L60.9871 14.6717C60.9871 15.4042 60.4118 15.9643 59.6873 15.9643C58.9841 15.9643 58.4087 15.4042 58.4087 14.6717ZM64.9293 14.6717L64.9293 6.72182L64.4818 6.72182C63.8852 6.72182 63.3951 6.24785 63.3951 5.64461C63.3951 5.04137 63.8852 4.54585 64.4818 4.54585L64.9293 4.54585L64.9293 3.70562C64.9293 2.45605 65.249 1.5081 65.8456 0.90486C66.4423 0.30162 67.2734 0 68.3814 0C68.8929 0 69.319 0.0430885 69.6813 0.107721C70.1501 0.172354 70.5763 0.60324 70.5763 1.18494C70.5763 1.78818 70.0862 2.28369 69.4895 2.26215C69.3403 2.24061 69.1273 2.21906 68.9568 2.21906C67.9766 2.21906 67.4651 2.75767 67.4651 3.94261L67.4651 4.56739L69.4682 4.56739C70.0862 4.56739 70.555 5.04137 70.555 5.64461C70.555 6.24785 70.0649 6.72182 69.4682 6.72182L67.5078 6.72182L67.5078 14.6717C67.5078 15.3826 66.9324 15.9643 66.2079 15.9643C65.5047 15.9643 64.9293 15.3826 64.9293 14.6717L64.9293 14.6717ZM74.412 19.3683C73.6874 19.3683 73.1547 19.2606 72.622 19.0452C72.2384 18.9159 71.8122 18.5927 71.8122 17.9679C71.8122 17.3216 72.3023 16.8907 72.8564 16.8907C73.0695 16.8907 73.1973 16.9338 73.3252 16.9769C73.6235 17.0631 73.8579 17.1277 74.2202 17.1277C74.9873 17.1277 75.3922 16.8045 75.8184 15.9212L75.9036 15.6842L71.727 6.24785C71.6418 6.05395 71.5778 5.79541 71.5778 5.62306C71.5778 4.89055 72.1319 4.35195 72.8564 4.35195C73.517 4.35195 73.8792 4.73974 74.1136 5.34298L77.1395 12.905L79.9524 5.34298C80.1655 4.80438 80.5277 4.35195 81.1883 4.35195C81.8702 4.35195 82.4242 4.89055 82.4242 5.57997C82.4242 5.79541 82.3603 6.07549 82.3177 6.20476L78.205 16.1798C77.2461 18.5065 76.2232 19.3683 74.412 19.3683Z",
                fill: "rgba(0,0,0,1)",
                fillRule: "nonzero",
              },
            ]}
            position="absolute"
            top="0%"
            bottom="0%"
            left="0%"
            right="0%"
            {...getOverrideProps(overrides, "Vector20249")}
          ></Icon>
        </View>
      </View>
      <Homeindicator
        width="375px"
        height="34px"
        position="absolute"
        top="778px"
        left="0px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Home-indicator")}
      ></Homeindicator>
    </View>
  );
}
