/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { ToastContainer } from 'react-toastify';
import styled from 'styled-components';
import GlobalStyle from '../../global-styles';
import 'react-toastify/dist/ReactToastify.css';
export default function App() {
  return (
    <div>
      <ToastContainer autoClose={5000} />
      hello
      {/* <Header />
      <StyledAppWrapper>
        <QuickUserEntry />
      </StyledAppWrapper> */}
      <GlobalStyle />
    </div>
  );
}

const StyledAppWrapper = styled.header`
  max-width: 90%;
  margin: auto;
`;
