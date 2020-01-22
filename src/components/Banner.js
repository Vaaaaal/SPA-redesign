/** @jsx jsx */

import React from "react";
import { css, jsx } from "@emotion/core";

import { colors } from "../utils/colors";
import arrowRight from "../utils/arrow-right.png";

const Banner = () => {
  return (
    <div
      css={css`
        background: black;
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        display: grid;
        grid-template: 60px / 60% repeat(2, 20%);
        z-index: 10;
      `}
    >
      <div
        css={css`
          color: white;
          padding: 0 0 0 60px;
          box-sizing: border-box;
          height: 100%;
          margin: 0;
          display: flex;
          align-items: center;
          justify-content: space-between;
        `}
      >
        <p>
          Vous souhaitez participez aux projets de la SPA ou faire un don a
          notre association
        </p>
        <img
          src={arrowRight}
          alt="Arrow right"
          css={css`
            width: 5%;
            margin-right: 40px;
          `}
        />
      </div>
      <button
        css={css`
          background: ${colors.grey};
          font-weight: 900;
          color: white;
          text-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
          font-size: 0.9rem;
          border: none;
          outline: none;
          cursor: pointer;
        `}
      >
        J'adopte un animal
      </button>
      <button
        css={css`
          background: ${colors.orange};
          font-weight: 900;
          color: white;
          text-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
          font-size: 0.9rem;
          border: none;
          outline: none;
          cursor: pointer;
        `}
      >
        Faire un don
      </button>
    </div>
  );
};

export default Banner;
