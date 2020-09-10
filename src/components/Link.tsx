import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';

interface ILink {
  title: string,
  to: string,
}
const Link: React.FC<ILink> = ({ title, to }) => {
  let location = useLocation();

  return (
    <StyleNavLink to={to}>
      <Button
        style={{fontSize: 18}}
        variant="contained"
        color={location.pathname === to ? 'primary' : 'default'}>
        {title}
      </Button>
    </StyleNavLink>

    )
};
const StyleNavLink = styled(NavLink)`
  text-decoration: none;
  
  &:focus, &:hover, &:visited, &:link, &:active {
    text-decoration: none;
  }
`;

export default Link;