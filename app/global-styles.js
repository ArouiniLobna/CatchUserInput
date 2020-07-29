import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Roboto', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Roboto', 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    background-color: #f3f4f7;
    min-height: 100%;
    min-width: 100%;
    position: relative;
  }

  p,
  label {
    font-family: 'Roboto', Georgia, Times, 'Times New Roman', serif;
    /* line-height: 1.5em; */
  }
  form{
    background: #fff;
    box-shadow: 0px 3px 3px -2px rgba(0,0,0,0.2), 0px 3px 4px 0px rgba(0,0,0,0.14), 0px 1px 8px 0px rgba(0,0,0,0.12);
    max-width: 500px;
    margin: auto;
  }

input{
  background: none;
 color: #222;
 font-size: 14px;
 padding: 20px 10px 10px 16px;
  display: block;
 width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.42);
  height: 100%;
  &:focus {
    outline: none;
  }
  &:focus ~ label{
    transform: translate(-12px,-23px) scale(0.75);
    color: #2196f3;
  }
  &:focus ~ label ~ .bar:before{
    width: 100%;
    /* background: #2196f3; */
  }
}

input[type='date'] + label, .floating-label {
  transform: translate(-12px,-23px) scale(0.75);
  color: #2196f3;
}
label{
  color: rgba(0, 0, 0, 0.6);
  font-size: 16px;
  font-weight: normal;
  position: absolute;
  transition: 300ms ease all;
  left: 16px;
  right: initial;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
}
.required-label{
  color: rgba(0, 0, 0, 0.54);
  font-size: 10px;
}
.label-error{
  color: #b00020;
}
.bar{
  position: relative;
  display: block;
  width: 100%;
  height: 1px;
  &:before {
    content: '';
    height: 2px;
    width: 0;
    bottom: 0px;
    position: absolute;
    background: #2196f3;
    transition: 300ms ease all;
    left: 0%;
  }
}
.error-bar:before{
  background:#b00020;
  width: 100%;
}

  .error-message{
    color: red;
    font-size: 12px;
  }
  .input-warning{
    font-size: 12px;
    color: orange;
  }
  button{
    color: #fff;
    background-color: #1976d2;
    box-shadow: 0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0);
    padding: 6px 16px;
    font-size: 0.875rem;
    min-width: 64px;
    box-sizing: border-box;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    font-weight: 500;
    line-height: 1.75;
    border-radius: 4px;
    letter-spacing: 0.02857em;
    text-transform: uppercase;
    border: 0;
    cursor: pointer;
  }
  button:disabled{
    cursor: none;
    color: rgba(0, 0, 0, 0.26);
    box-shadow: none;
    background-color: rgba(0, 0, 0, 0.12);
    cursor: default;
    pointer-events: none;
  }
  button:hover{
    background-color: rgb(17, 82, 147);
    box-shadow: 0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0);
  }
`;

export default GlobalStyle;
