/** @jsx jsx */

import React from "react";
import { css, jsx } from "@emotion/core";

import { colors } from "../utils/colors";

const News = props => {
  return (
    <div
      css={css`
        height: 80vh;
        display: grid;
        grid-template: 55% 30% 15% / 1fr;
        margin: 20px;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.3), -2px 0 20px rgba(0, 0, 0, 0.2);
        outline: none;
      `}
    >
      <div
        css={css`
          position: relative;
        `}
      >
        <div
          css={css`
            position: absolute;
            width: 100%;
            height: 100%;
            background-image: linear-gradient(
              135deg,
              rgba(235, 100, 26, 0.5),
              rgba(0, 0, 0, 0)
            );
          `}
        />
        <img
          src={props.image}
          alt="Cover"
          css={css`
            height: 100%;
            width: 100%;
            object-fit: cover;
          `}
        />
      </div>

      <div
        css={css`
          padding: 0 25px;
        `}
      >
        <h3
          css={css`
            font-size: 1.5rem;
            margin: 15px 0 0;
            font-family: "Poppins";
            color: ${colors.darkgrey};
          `}
        >
          {props.title}
        </h3>
        <p
          css={css`
            font-size: 0.95rem;
            margin: 15px 0 0;
          `}
        >
          {props.excerpt}
        </p>
      </div>

      <button
        css={css`
          border: none;
          background: ${colors.brown};
          color: white;
          letter-spacing: 2px;
          font-size: 1.05rem;
          outline: none;
          cursor: pointer;
        `}
      >
        Lire l'article
      </button>
    </div>
  );
};

export default News;
