import styled from 'styled-components';

export const HomeWrapper = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  background-color: rgba(66, 75, 92, 0.5);
  /* background-image: url('../../image/bgHome.jpg'); */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const HomeText = styled.p`
  display: flex;
  gap: 5px;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  text-align: center;
  margin-top: 150px;
  color: #6c6874;
  font-size: 32px;
  font-weight: 700;
  width: 650px;
`;
