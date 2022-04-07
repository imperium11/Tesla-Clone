import React from "react";
import { ButtonGroup, ButtonWrapper, DownArrow, LeftButton, MainText, RightButton, Wrapper } from "../styles/Styles";

const Section = () => {

  return(
    <Wrapper>
      <MainText>
        <h1>Model 3</h1>
        <p>Order Online for Touchless Delivery</p>
      </MainText>
      <ButtonGroup>
        <ButtonWrapper>
          <LeftButton>
            CUSTOM ORDER
          </LeftButton>
          <RightButton>
            EXISTING INVENTORY
          </RightButton>
        </ButtonWrapper>
        <DownArrow src="/assets/down-arrow.svg"/>
      </ButtonGroup>
    </Wrapper>
  );

};

export default Section;