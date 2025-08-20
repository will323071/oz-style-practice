import styled from "styled-components";

// 공동 유틸 (SCSS 믹스인 대체)
const flex = ({
    direction = "row",
    justify = "flex-start",
    align = "stretch",
    gap = "0",
    wrap = "nowrap",
} = {}) => `
 display: flex;
 flex-direction: ${direction};
 justify-content: ${justify};
 align-items: ${align};
 gap: ${gap};
 flex-wrap: ${wrap};
 `;

 const font = ({size, weight = 400}) => `
  font-size: ${size};
  font-weight: ${weight};
  `;

  // 색상 변수
  const colors = {
    tag: "#d7fa00",
    gray: "rgb(160, 160, 160)",
    black: "black",
    white: "white"
  };

  // Header
  export const HeaderContainer = styled.header`
  ${flex({justify: "space-between", align: "center"})};
  padding: 20px 20px;
  background-color: ${colors.black};

  ul {
  ${flex({justify: "center", align: "center", gap: "20px"})};
  li {
  ${font({size: "16px", weight: 400})};
  list-style: none;
  color: ${colors.white};
  }
  }
  `;

  // Section
  export const Section = styled.section`
  ${flex({justify: "center", align: "center", wrap: "wrap", gap: "20px" })};
  padding: 20px 40px;
  `;

  // Content
  export const ContentContainer = styled.div`
  ${flex({direction: "column", align: "flex-start", gap: "5px"})};

  img {
  width: 300px;
  border-radius: 10px;
  margin-bottom: 3px;
  min-height: 225px;
  }

  span {
  ${font({size: "12px"})};
  color: ${colors.tag};
  border: 1px solid ${colors.tag};
  padding: 4px 5px;
  border-radius: 3px;
  }

  div {
  ${font({size: "18px", weight: 600})};
  }

  p {
  ${font({size: "12px"})};
  color: ${colors.gray};
  }
  `;
  