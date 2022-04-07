import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
`;

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url('/assets/model-s.jpg');
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

`;

export const DownArrow = styled.img`
  height: 40px;
  overflow-x: hidden;
  animation: animateDown infinite 1.5s;
`;

export const ButtonGroup = styled.div`

`;