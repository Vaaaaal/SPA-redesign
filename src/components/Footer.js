/** @jsx jsx */

import React from "react";
import { css, jsx } from "@emotion/core";

import { colors } from "../utils/colors";

const Footer = () => {
  return (
    <div
      css={css`
        margin-bottom: 60px;
      `}
    >
      <h1>Footer works</h1>
    </div>
  );
};

export default Footer;
