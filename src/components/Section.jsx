import React from "react";
import { ButtonGroup, ButtonWrapper, DownArrow, LeftButton, MainText, RightButton, Wrapper } from "../styles/Styles";
import { Fade } from "react-reveal";

const Section = ({ title, description, backgroundImage, leftButtonText, rightButtonText }) => {

  return(
    <Wrapper bgImage={ backgroundImage }>
      <Fade bottom>
        <MainText>
          <h1>{ title }</h1>
          <p>{ description }</p>
        </MainText>
      </Fade>
      <ButtonGroup>
        <Fade bottom>
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
        </Fade>
        <DownArrow src="/assets/down-arrow.svg"/>
      </ButtonGroup>
    </Wrapper>
  );

};

export default Section;