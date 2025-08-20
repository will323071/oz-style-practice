import React from "react";
import { HeaderContainer } from "../styles";

function Header() {
  return (
    <HeaderContainer>
      <h1 style={{color: "white"}}>로고</h1>
      <ul>
        <li>홈</li>
        <li>소개</li>
        <li>연락처</li>
      </ul>
    </HeaderContainer>
  );
}

export default Header;
