import React from "react";
import { CustomMenu, HeaderContainer, Menu, RightPanel } from "../styles/Styles";

const Header = () => {

  return(
    <HeaderContainer>
      <a>
        <img src="/assets/logo.svg" alt=""/>
      </a>
      <Menu>
        <a href="#">Model 3</a>
        <a href="#">Model Y</a>
        <a href="#">Model S</a>
        <a href="#">Model X</a>
        <a href="#">Solar Roof</a>
        <a href="#">Solar Panels</a>
      </Menu>
      <RightPanel>
        <a href="#">Shop</a>
        <a href="#">Account</a>
        <CustomMenu></CustomMenu>
      </RightPanel>
    </HeaderContainer>
  );

};

export default Header;