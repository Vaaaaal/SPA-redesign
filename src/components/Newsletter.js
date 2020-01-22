/** @jsx jsx */

import React from "react";
import { css, jsx } from "@emotion/core";

import send from "../utils/send.png";
import { colors } from "../utils/colors";
import dog from "../utils/dog-transparent.png";

const Newsletter = () => {
  return (
    <div
      css={css`
        margin-top: 150px;
        margin-bottom: 230px;
        display: grid;
        justify-content: center;
        align-items: center;
        grid-template: 1fr / repeat(12, 1fr);
        position: relative;
      `}
    >
      <img
        src={dog}
        alt="Dog transparent"
        css={css`
          position: absolute;
          width: 55%;
          left: -23%;
        `}
      />
      <div
        css={css`
          grid-row: 1;
          grid-column: 4 / 8;
          height: 280px;
          color: white;
          padding: 5px 0 0 20px;
          flex-direction: column;
          box-shadow: 3px 15px 25px rgba(0, 0, 0, 0.3);
          background-image: linear-gradient(145deg, ${colors.orange}, #dea67b);
        `}
      >
        <h1
          css={css`
            font-size: 2.15rem;
            margin: 30px 0;
          `}
        >
          Newsletter
        </h1>
        <p
          css={css`
            width: 70%;
            font-size: 1.25rem;
          `}
        >
          N'hésitez pas à vous inscrire à notre newsletter pour rester informés
          de notre actualité
        </p>
      </div>

      <div
        css={css`
          grid-column: 7 / 12;
          width: 100%;
          height: 60px;
          grid-row: 1;
          display: flex;
          box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
        `}
      >
        <input
          css={css`
            width: 75%;
            padding-left: 40px;
            font-style: italic;
            font-size: 1.05rem;
            letter-spacing: 0.5px;
            border: none;
            outline: none;
          `}
          placeholder="exemple@mail.com"
        />
        <button
          css={css`
            width: 25%;
            border: none;
            background: black;
            outline: none;
            cursor: pointer;
            outline: none;
          `}
        >
          <img
            src={send}
            alt="Send message"
            css={css`
              width: 50%;
              transform: rotate(19deg);
            `}
          />
        </button>
      </div>
    </div>
  );
};

export default Newsletter;
