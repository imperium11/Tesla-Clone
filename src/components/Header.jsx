import React, { useState } from "react";
import { CloseIcon, CloseWrapper, CustomMenu, HeaderContainer, Menu, RightNavigation, RightPanel } from "../styles/Styles";

const Header = () => {

  const [rightNav, setRightNav] = useState(false);

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
        <CustomMenu onClick={() => { setRightNav(true); }}></CustomMenu>
      </RightPanel>
      <RightNavigation show={rightNav}>
        <CloseWrapper>
          <CloseIcon></CloseIcon>
        </CloseWrapper>
        <li><a href="#">Model S</a></li>
        <li><a href="#">Model 3</a></li>
        <li><a href="#">Model X</a></li>
        <li><a href="#">Model Y</a></li>
        <li><a href="#">Solar Roof</a></li>
        <li><a href="#">Solar Panels</a></li>
        <li><a href="#">Existing Inventory</a></li>
        <li><a href="#">Used Inventory</a></li>
      </RightNavigation>
    </HeaderContainer>
  );

};

export default Header;