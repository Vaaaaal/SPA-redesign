/** @jsx jsx */

import React from "react";
import { css, jsx } from "@emotion/core";

import { colors } from "../utils/colors";
import { articles } from "../utils/article";
import dot2 from "../utils/dot2.png";
import Title from "./Title";
import Post from "./Post";
import Slider from "react-slick";

const News = () => {
  const settings = {
    autoplay: true,
    autoplaySpeed: 2500,
    slidesToShow: 3,
    swipeToSlide: true
  }

  return (
    <div
      css={css`
        position: relative;
        margin: 150px 10%;
      `}
    >
      <Title title="Nos actualités" />
      <img
        src={dot2}
        alt="Decoration"
        css={css`
          height: 9vw;
          position: absolute;
          top: -7%;
          z-index: -1;
          left: 23%;
        `}
      />
      <Slider {...settings} css={
        css`
          margin-top: 50px;
          margin-left: -5%;
          margin-right: -5%;
          height: 80vh;
          cursor: grab;
          &:active {
            cursor: grabbing;
          }
        `}
      >
        {articles.map((item, index) => (
          <Post
            key={index}
            title={item.title}
            excerpt={item.excerpt}
            image={item.image}
          />
        ))}
      </Slider>
    </div>
  );
};

export default News;
