import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const LinkActive = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-size: 20px;
  font-weight: 700;

  &.active {
    color: white;
    background-color: #1f75fe;
  }
`;