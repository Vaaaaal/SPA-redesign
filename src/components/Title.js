/** @jsx jsx */

import React from "react";
import { css, jsx } from "@emotion/core";

import { colors } from "../utils/colors";

const Title = props => {
  return (
    <h2
      css={css`
        font-size: 2.75rem;
        width: 70%;
        font-family: "Poppins";
        line-height: 1.2;
        color: ${colors.darkgrey};
      `}
    >
      {props.title}
    </h2>
  );
};

export default Title;
