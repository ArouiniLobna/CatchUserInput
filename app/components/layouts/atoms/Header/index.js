/**
 *
 * Header
 *
 */

import React from 'react';
import styled from 'styled-components';

function Header() {
  return <StyledHeader>Quick form test</StyledHeader>;
}

Header.propTypes = {};
const StyledHeader = styled.header`
  background: #fff;
  padding: 20px 30px;
  margin-bottom: 30px;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;
export default Header;
