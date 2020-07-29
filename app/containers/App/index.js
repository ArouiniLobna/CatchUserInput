/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import Header from 'components/layouts/atoms/Header';
import QuickUserEntry from 'containers/QuickUserEntry';
import styled from 'styled-components';
import GlobalStyle from '../../global-styles';
import 'react-toastify/dist/ReactToastify.css';
export default function App() {
  return (
    <div>
      <Header />
      <StyledAppWrapper>
        <QuickUserEntry />
      </StyledAppWrapper>
      <GlobalStyle />
    </div>
  );
}

const StyledAppWrapper = styled.header`
  max-width: 90%;
  margin: auto;
`;
