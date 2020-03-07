import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  /* COMMON.CSS */
  /* Reset */
  html,
  body {
    width: 100%;
    height: 100%;
    word-spacing: normal;
  }

  html {
    overflow-y: scroll;
  }

  body {
    background-color: #fff;
    *word-break: break-all;
    -ms-word-break: break-all;
  }

  body,
  div,
  dl,
  dt,
  dd,
  ul,
  ol,
  li,
  h1,
  h2,
  h3,
  h4,
  h5,
  form,
  fieldset,
  p,
  button,
  input {
    margin: 0;
    padding: 0;
    word-spacing: normal;
  }

  body,
  h1,
  h2,
  h3,
  h4,
  input,
  button {
    font-family: "나눔고딕", "Nanum-Gothic", "Noto Sans", sans-serif;
    font-size: 14px;
    color: #000;
    word-spacing: normal;
  }

  img,
  fieldset,
  iframe {
    border: 0 none;
    padding: 0;
  }

  li {
    list-style: none;
  }

  input,
  select,
  button {
    vertical-align: middle;
  }

  img {
    vertical-align: top;
  }

  i,
  em,
  address {
    font-style: normal;
  }

  label,
  button {
    cursor: pointer;
  }

  button {
    margin: 0;
    padding: 0;
    border: none;
  }

  button * {
    position: relative;
  }

  a {
    color: #222;
    text-decoration: none;
    word-spacing: normal;
    &:hover {
      color: #000;
      text-decoration: none;
    }
  }

  html:first-child select {
    height: 20px;
    padding-right: 6px;
  }

  option {
    padding-right: 6px;
  }

  hr {
    display: none;
  }

  legend {
    *width: 0;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  article,
  aside,
  canvas,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  nav,
  menu,
  section,
  summary {
    display: block;
  }

  *,
  header,
  footer,
  section,
  article,
  aside,
  nav,
  hgroup,
  details,
  menu,
  figure,
  figcaption {
    margin: 0;
    padding: 0;
  }
  
  /* Skip */
  .skip a {
    position: absolute;
    top: -9999em;
    left: 0;
    z-index: 9999;
    display: block;
    width: 100%;
    padding: 5px 0px;
    color: #fff;
    text-transform: uppercase;
    text-decoration: none;
    line-height: 30px;
    text-align: center;
    font-size: 1.2em;
    background: rgba(243, 115, 33, 0.5);
  }
  
  .skip a:hover,
  .skip a:active,
  .skip a:focus {
    top: 0;
  }

  /* clearfix */
  .clearfix {
    *zoom: 1;
  }

  .clearfix:after {
    content: "";
    display: block;
    clear: both;
  }

  /* Hide */
  .blind {
    display: block;
    position: absolute;
    left: 0;
    top: -9999em;
  }

  /* Center */
  .center {
    width: 1200px;
    margin: 0 auto;
  }
  /* COMMON.CSS END */

  @media all and (max-width: 1024px) {
    /* header */
    header,
    .center {
      width: 100%;
    }
  }
`;

export default GlobalStyle;
