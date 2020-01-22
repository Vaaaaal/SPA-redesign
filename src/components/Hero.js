/** @jsx jsx */

import React from "react";
import { css, jsx } from "@emotion/core";

import { colors } from "../utils/colors";
import dot from "../utils/dot.png";
import play from "../utils/play.png";
import Title from "./Title";

const Hero = () => {
  return (
    <div
      css={css`
        margin-top: 115px;
        display: grid;
        grid-template-columns: repeat(12, 1fr);
      `}
    >
      <div
        css={css`
          background: white;
          box-shadow: 3px 5px 20px rgba(0, 0, 0, 0.3);
          grid-column: 2 / 8;
          grid-row: 1;
        `}
      >
        <div
          css={css`
            margin: 50px;
          `}
        >
          {/* Extraire le H2 pour en faire un composant réutilisable */}
          <Title title="Notre mission" />

          <p
            css={css`
              line-height: 2;
              margin-top: -20px;
              width: 80%;
              color: ${colors.darkgrey};
            `}
          >
            La Société Protectrice des Animaux (SPA) est la première association
            de protection animale en France. Créée en 1845, elle a été reconnue
            d'utilité publique en 1860.
          </p>
          <button
            css={css`
              background: ${colors.orange};
              font-weight: 900;
              color: white;
              border: none;
              height: 60px;
              padding: 0 50px;
              outline: none;
              cursor: pointer;
            `}
          >
            En savoir plus
          </button>
        </div>
      </div>

      <div
        css={css`
          height: 85%;
          grid-column: 7 / 12;
          grid-row: 1;
          align-self: center;
          position: relative;
        `}
      >
        <div
          css={css`
            width: 100%;
            height: 100%;
            background: url("https://images.unsplash.com/photo-1544568100-847a948585b9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80")
              no-repeat 50% 50%;
            background-size: cover;
            position: absolute;
          `}
        />
        <div
          css={css`
            position: absolute;
            width: 100%;
            height: 100%;
            background-image: linear-gradient(
              -135deg,
              rgba(235, 100, 26, 0.5),
              rgba(0, 0, 0, 0)
            );
          `}
        />
        <div
          css={css`
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            cursor: pointer;
            display: flex;
            justify-content: center;
            align-content: center;
          `}
        >
          <img
            src={play}
            alt="Play button"
            css={css`
              width: 65%;
              height: 65%;
            `}
          />
        </div>
      </div>
      <div
        css={css`
          grid-row: 1;
          grid-column: 11 / 13;
          align-self: center;
          height: 40%;
          z-index: 2;
        `}
      >
        <img
          src={dot}
          alt="dog"
          css={css`
            width: 100%;
          `}
        />
      </div>
    </div>
  );
};

export default Hero;
