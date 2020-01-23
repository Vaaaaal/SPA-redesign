/** @jsx jsx */

import React from "react";
import { css, jsx } from "@emotion/core";

import { colors } from "../utils/colors";

let prevScrollPos = window.pageXOffset;
window.onscroll = function() {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollPos > currentScrollPos) {
    this.document.getElementById("navbar").style.top = "0";
  } else {
    this.document.getElementById("navbar").style.top = "-70px";
  }
  prevScrollPos = currentScrollPos;
};

const Navbar = () => {
  return (
    <div
      id="navbar"
      css={css`
        height: 70px;
        width: 100vw;
        background: #ebebeb;
        position: fixed;
        top: 0;
        left: 0;
        display: grid;
        grid-template: 1fr / 15% repeat(2, 1fr);
        z-index: 10;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
        transition: top 0.4s ease-out;
      `}
    >
      <div
        css={css`
          display: flex;
          justify-content: center;
          align-items: center;
          grid-column: 1 / 2;
          grid-row: 1;
        `}
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/fr/0/00/Logo_de_la_SPA_%28France%29.png"
          alt="logo"
          css={css`
            height: 55px;
          `}
        />
      </div>
      <div
        css={css`
          grid-column: 2 / 3;
        `}
      >
        <ul
          css={css`
            margin: 0;
            padding: 0;
            display: flex;
            height: 100%;
            justify-content: space-between;
            align-items: center;
          `}
        >
          {/* <ul
          css={css`
            margin: 0;
            padding: 0;
            display: grid;
            height: 100%;
            grid-template: 1fr / repeat(5, 1fr);
            justify-items: stretch;
            text-align: center;
            align-items: center;
          `}
        > */}
          <li
            css={css`
              cursor: pointer;
              transition: all 0.2s ease-in-out;
              &:hover {
                color: #333;
                transform: scale(1.1);
                text-shadow: 0 5px 8px rgba(0, 0, 0, 0.3);
              }
            `}
          >
            L'association
          </li>
          <li
            css={css`
              cursor: pointer;
              transition: all 0.2s ease-in-out;
              &:hover {
                color: #333;
                transform: scale(1.1);
                text-shadow: 0 5px 8px rgba(0, 0, 0, 0.3);
              }
            `}
          >
            Actualités
          </li>
          <li
            css={css`
              cursor: pointer;
              transition: all 0.2s ease-in-out;
              &:hover {
                color: #333;
                transform: scale(1.1);
                text-shadow: 0 5px 8px rgba(0, 0, 0, 0.3);
              }
            `}
          >
            Adopter
          </li>
          <li
            css={css`
              cursor: pointer;
              transition: all 0.2s ease-in-out;
              &:hover {
                color: #333;
                transform: scale(1.1);
                text-shadow: 0 5px 8px rgba(0, 0, 0, 0.3);
              }
            `}
          >
            Agir
          </li>
          <li
            css={css`
              cursor: pointer;
              transition: all 0.2s ease-in-out;
              &:hover {
                color: #333;
                transform: scale(1.1);
                text-shadow: 0 5px 8px rgba(0, 0, 0, 0.3);
              }
            `}
          >
            Nos combats
          </li>
        </ul>
      </div>

      <div
        css={css`
          grid-column: 3 / 4;
          display: flex;
          justify-content: center;
          align-items: stretch;
        `}
      >
        <input
          css={css`
            width: 47%;
            margin-left: 10%;
            padding-left: 40px;
            font-style: italic;
            font-size: 0.8rem;
            border: none;
            background: ${colors.lightgrey};
            outline: none;
          `}
          placeholder="Refuge de Bordeaux..."
        />
        <button
          css={css`
            width: 53%;
            background: black;
            border: none;
            color: white;
            font-weight: 800;
            cursor: pointer;
            outline: none;
          `}
        >
          Rechercher sur le site
        </button>
      </div>
    </div>
  );
};

export default Navbar;
