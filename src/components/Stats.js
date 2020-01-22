/** @jsx jsx */

import React from "react";
import { css, jsx } from "@emotion/core";

import Title from "./Title";
import dot3 from "../utils/dot3.png";

const Stats = () => {
  return (
    <div>
      <Title title="Quelques chiffres de 2018" />
      <div
        css={css`
          display: grid;
          grid-template: 1fr / repeat(12, 1fr);
          justify-content: center;
          align-items: center;
        `}
      >
        <ul
          css={css`
            grid-row: 1;
            grid-column: 2 / 10;
            list-style: square;
          `}
        >
          <li
            css={css`
              font-size: 1.25rem;
              margin-bottom: 35px;
            `}
          >
            44 000 animaux recueillis dans nos 62 refuges et Maisons SPA
          </li>
          <li
            css={css`
              font-size: 1.25rem;
              margin-bottom: 35px;
            `}
          >
            11 000 enquêtes pour prévenir la maltraitance animale
          </li>
          <li
            css={css`
              font-size: 1.25rem;
              margin-bottom: 35px;
            `}
          >
            102 000 animaux soignés
          </li>
        </ul>
        <img
          src={dot3}
          alt="Decoration"
          css={css`
            grid-row: 1;
            width: 70%;
            grid-column: 8 / 13;
            align-self: start;
            z-index: -1;
          `}
        />
      </div>
    </div>
  );
};

export default Stats;
