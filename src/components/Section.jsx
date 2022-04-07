import React from "react";
import { ButtonGroup, ButtonWrapper, DownArrow, LeftButton, MainText, RightButton, Wrapper } from "../styles/Styles";

const Section = ({ title, description, backgroundImage, leftButtonText, rightButtonText }) => {

  return(
    <Wrapper bgImage={ backgroundImage }>
      <MainText>
        <h1>{ title }</h1>
        <p>{ description }</p>
      </MainText>
      <ButtonGroup>
        <ButtonWrapper>
          <LeftButton>
            { leftButtonText }
          </LeftButton>
          { rightButtonText &&
            <RightButton>
              { rightButtonText }
            </RightButton>
          }
        </ButtonWrapper>
        <DownArrow src="/assets/down-arrow.svg"/>
      </ButtonGroup>
    </Wrapper>
  );

};

export default Section;