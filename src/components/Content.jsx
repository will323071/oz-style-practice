import React from "react";
import { ContentContainer } from "../styles";

function Content({content}) {
  return (
    <ContentContainer>
      <img src={content.img} alt={content.title} />
      <span>{content.tag}</span>
      <div>{content.title}</div>
      <p>{content.desc}</p>
      </ContentContainer>
  );
}

export default Content;
