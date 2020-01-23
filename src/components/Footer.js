/** @jsx jsx */

import React from "react";
import { css, jsx } from "@emotion/core";

import { colors } from "../utils/colors";
import Container from "./Container";

const Footer = () => {
  return (
    <div
      css={css`
        margin-bottom: 60px;
        background: ${colors.footer};
        color: ${colors.darkgrey};
      `}
    >
      <Container>
        <div
          css={css`
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 15px 0;
          `}
        >
          <ul>
            <li className="list">Ou nous trouvez ?</li>
            <li className="list">Comment nous aider ?</li>
            <li className="list">Contact</li>
          </ul>

          <ul>
            <li className="list">L'association</li>
            <li className="list">Actualités</li>
            <li className="list">Adopter</li>
            <li className="list">Agir</li>
            <li className="list">Nos combats</li>
          </ul>

          <div>
            <p>Pour nous suivre sur les réseaux sociaux, c'est par ici</p>
            <ul
              css={css`
                display: flex;
                margin: 0;
                padding: 0;
                justify-content: space-between;
                align-items: center;
              `}
            >
              <li>Facebook</li>
              <li>Instagram</li>
              <li>YouTube</li>
            </ul>
          </div>
        </div>
      </Container>

      <div
        css={css`
          background: #777;
          color: white;
          height: 30px;
          display: flex;
          justify-content: center;
          align-items: center;
        `}
      >
        <p>&copy; Valentin Cassus 2020</p>
      </div>
    </div>
  );
};

export default Footer;
