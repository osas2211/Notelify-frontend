/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Icon } from "@aws-amplify/ui-react";
export default function Plus(props) {
  const { overrides, ...rest } = props;
  return (
    <Icon
      width="24px"
      height="24px"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      viewBox={{ minX: 0, minY: 0, width: 24, height: 24 }}
      paths={[
        {
          d: "M9 0C9 -0.552285 8.55229 -1 8 -1C7.44772 -1 7 -0.552285 7 0L9 0ZM7 16C7 16.5523 7.44772 17 8 17C8.55229 17 9 16.5523 9 16L7 16ZM16 9C16.5523 9 17 8.55229 17 8C17 7.44772 16.5523 7 16 7L16 9ZM2.98023e-08 7C-0.552285 7 -1 7.44771 -1 8C-1 8.55228 -0.552285 9 -2.98023e-08 9L2.98023e-08 7ZM7 0L7 16L9 16L9 0L7 0ZM16 7L2.98023e-08 7L-2.98023e-08 9L16 9L16 7Z",
          stroke: "rgba(26,26,26,1)",
          fillRule: "nonzero",
          strokeLinejoin: "round",
          strokeWidth: 2,
          style: { transform: "translate(16.67%, 16.67%)" },
        },
      ]}
      {...rest}
      {...getOverrideProps(overrides, "Plus")}
    ></Icon>
  );
}
