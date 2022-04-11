import styled from 'styled-components';
import { BiMenu, BiX } from "react-icons/bi";

//Section CSS
export const SectionContainer = styled.div`
  height: 100vh;
`;

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: ${props => `url(/assets/${props.bgImage})`};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const MainText = styled.div`
  padding-top: 15vh;
  text-align-center;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  margin-bottom: 30px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;
  margin: 8px;
`;

export const RightButton = styled(LeftButton)`
  background: white;
  opacity: 0.65;
  color: black;
`;

export const DownArrow = styled.img`
  height: 40px;
  overflow-x: hidden;
  animation: animateDown infinite 1.5s;
`;

export const ButtonGroup = styled.div`

`;

//Header CSS
export const HeaderContainer = styled.div`
  top: 0;
  left: 0;
  right: 0;
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  z-index: 1;
`;

export const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;

  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
  }

  @media(max-width: 1050px) {
    display: none;
  }
`;

export const RightPanel = styled.div`
  display: flex;
  align-items: center;

  a {
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 10px;
  }
`;

export const CustomMenu = styled(BiMenu)`
  cursor: pointer;
  font-size: 21px;
`;

export const RightNavigation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: white;
  width: 300px;
  z-index: 16;
  list-style: none;
  padding: 20px;
  transition: transform 0.2s;

  li {
    padding: 15px 0;

    a {
      font-weight: 600;
    }

  }

  transform:  ${props => props.show ? 'translateX(0)' : 'translateX(100%)'}
`;

export const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

export const CloseIcon = styled(BiX)`
  cursor: pointer;
  font-size: 23px;
`;

