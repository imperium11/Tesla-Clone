import React, { useState } from "react";
import { CloseIcon, CloseWrapper, CustomMenu, HeaderContainer, Menu, RightNavigation, RightPanel } from "../styles/Styles";
import { selectCars } from "../features/car/carSlice";
import { useSelector } from "react-redux";

const Header = () => {

  const [rightNav, setRightNav] = useState(false);
  const products = useSelector(selectCars);

  const hrefCreator = (string) => {
    return `#${string.split(' ').join('').toLowerCase()}`;
  };

  return(
    <HeaderContainer>
      <a>
        <img src="/assets/logo.svg" alt=""/>
      </a>
      <Menu>
        { products && products.map((product, index) => {
          return <a href={hrefCreator(product)} key={index}>{product}</a>
        }) }
      </Menu>
      <RightPanel>
        <a href="#">Shop</a>
        <a href="#">Account</a>
        <CustomMenu onClick={() => { setRightNav(true); }}></CustomMenu>
      </RightPanel>
      <RightNavigation show={rightNav}>
        <CloseWrapper>
          <CloseIcon onClick={() => { setRightNav(false); }}></CloseIcon>
        </CloseWrapper>
        { products && products.map((product, index) => {
          return <li key={index}><a href={hrefCreator(product)}>{product}</a></li>
        }) }
      </RightNavigation>
    </HeaderContainer>
  );

};

export default Header;