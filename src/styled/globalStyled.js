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
    font-size: 10px;
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
    & a:hover,
    & a:active,
    & a:focus {
      top: 0;
    }
  }

  /* Center */
  .center {
    width: 1200px;
    margin: 0 auto;
  }
  /* COMMON.CSS END */

  /* 태블릿 */

  @media all and (min-width: 768px) and (max-width: 1024px) {
    /* container bottom */

    .board > div {
      display: flex;
      flex-wrap: wrap;
    }

    .board_box {
      margin: 20px auto 0;
      float: none;
      justify-content: center;
      width: 600px;
    }

    .clip {
      margin-top: 0;
    }

    .co_info,
    .service {
      padding-left: 0;
    }

    /* footer */

    .tail > div {
      padding: 2% 0 7%;
    }

    .foot_logo {
      width: 30%;
      margin-left: 30px;
    }

    .foot_menu {
      width: 35%;
    }

    form {
      width: 24%;
    }

    small {
      position: absolute;
      bottom: 0;
      left: 40px;
      line-height: 1.5;
    }
  }

  /* 모바일 */

  @media all and (max-width: 767px) {

    /* container */

    /* container top */
    .product {
      margin: 10px 0 0;
    }

    .product_box {
      width: 50%;
    }

    .product_box > div {
      margin: 5% auto;
    }

    .product_box > a > .img {
      width: 100%;
      background-image: none;
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      background-color: #3c3c3c;
    }

    .img > img {
      width: 100%;
      height: auto;
      opacity: 0.5;
    }

    .product_top .linetop,
    .product_bot .linebot,
    .product_box:after {
      display: none;
    }

    .product_box > a > .mobile {
      display: block;
      position: absolute;
      top: 3.5vw;
      left: 3.5vw;
      width: 80%;
      color: #fff;
      font-size: 4vw;
      border: 2px solid #dadada;
      text-align: center;
      padding: 15.5vw 1vw 17vw;
    }

    /* container bottom */
    .board {
      margin: 0;
      padding: 0;
      background-color: #fff;
    }

    .board > div {
      margin: 0 auto;
    }

    .board_box {
      width: 100%;
      margin-top: 10px;
    }

    .clip {
      height: 50vw;
    }

    .clip > img {
      height: 100%;
    }

    .co_info {
      padding-left: 0%;
    }

    .co_info > div {
      width: 50%;
      height: 15vw;
      padding: 0;
      margin: 0;
      border-radius: 15vw;
      background-color: transparent;
      border: 1px solid #8a8a8a;
      cursor: pointer;
    }

    .co_info > div > h3 {
      font-size: 4vw;
      padding: 0;
      line-height: 15vw;
      color: #8a8a8a;
    }

    .co_info > div > p {
      display: none;
    }

    .co_info > div > a {
      display: none;
    }

    .promote > div {
      width: 100%;
    }

    .news {
      width: 100%;
      padding-bottom: 10%;
      border-right: 0 none;
      border-bottom: 1px dashed #e8ded7;
    }

    .service {
      padding-left: 0;
    }

    .service > div {
      width: 100%;
      height: 50vw;
      margin: 0;
      padding: 5vw;
      background-position: center;
      cursor: pointer;
    }

    .service a {
      display: none;
    }

    .service h3 > img {
      width: 20%;
      height: 20%;
    }

    .service p:nth-child(2) {
      font-size: 5vw;
    }

    .service p:nth-child(3) {
      font-size: 3vw;
    }

    /* footer */

    .tail {
      margin-top: 10px;
    }

    .tail > div {
      padding: 0;
    }

    .foot_logo {
      float: none;
      width: 30%;
      margin: 10px 0;
    }

    .foot_logo img {
      width: 100%;
      height: 100%;
    }

    .foot_menu {
      display: none;
    }

    small {
      line-height: 1.5;
    }

    .tail > div {
      position: relative;
    }

    form {
      float: none;
      position: absolute;
      top: 0;
      right: 0;
      margin-top: 0;
    }
  }
`;

export default GlobalStyle;
