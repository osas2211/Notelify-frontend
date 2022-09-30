/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Icon } from "@aws-amplify/ui-react";
export default function Search(props) {
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
          d: "M17.2929 18.7071C17.6834 19.0976 18.3166 19.0976 18.7071 18.7071C19.0976 18.3166 19.0976 17.6834 18.7071 17.2929L17.2929 18.7071ZM12.7071 11.2929C12.3166 10.9024 11.6834 10.9024 11.2929 11.2929C10.9024 11.6834 10.9024 12.3166 11.2929 12.7071L12.7071 11.2929ZM13 7C13 10.3137 10.3137 13 7 13L7 15C11.4183 15 15 11.4183 15 7L13 7ZM7 13C3.68629 13 1 10.3137 1 7L-1 7C-1 11.4183 2.58172 15 7 15L7 13ZM1 7C1 3.68629 3.68629 1 7 1L7 -1C2.58172 -1 -1 2.58172 -1 7L1 7ZM7 1C10.3137 1 13 3.68629 13 7L15 7C15 2.58172 11.4183 -1 7 -1L7 1ZM18.7071 17.2929L12.7071 11.2929L11.2929 12.7071L17.2929 18.7071L18.7071 17.2929Z",
          stroke: "rgba(26,26,26,1)",
          fillRule: "nonzero",
          strokeLinejoin: "round",
          strokeWidth: 2,
          style: { transform: "translate(12.5%, 12.5%)" },
        },
      ]}
      {...rest}
      {...getOverrideProps(overrides, "Search")}
    ></Icon>
  );
}
