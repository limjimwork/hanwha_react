import styled from "styled-components";

export const FooterStyled = {
  Wrap: styled.footer`
    /* FOOTER */
    border-top: 1px solid #8a8a8a;

    > div {
      position: relative;
      padding: 30px 0;
    }

    .foot_logo {
      float: left;
      width: 20%;
    }

    .foot_menu {
      float: left;
      width: 65%;
      padding-top: 10px;
    }

    .foot_menu > li {
      float: left;
      padding-top: 7px;
      padding-right: 6px;
      padding-left: 10px;
      background: url("/images/main/bar_bot.png") no-repeat 0 100%;
    }

    .foot_menu > li:hover > a,
    .foot_menu > li:focus > a {
      text-decoration: underline;
      color: #f37321;
    }

    .foot_menu a {
      font-weight: 500;
      color: #636363;
    }

    .foot_menu > .privacy {
      background: none;
      padding-left: 0;
    }

    small {
      float: left;
      line-height: 5.5;
      font-size: 0.8em;
      color: #8a8a8a;
    }

    /* FOOTER END*/

    /*-----------------------------------------------------------------------------*/

    /* FAMILY SITE */

    form {
      float: left;
      margin-top: 10px;
    }

    #site > option {
      font-size: 1.1em;
      line-height: 30px;
      color: #636363;
    }

    /* 높이값 주기위해
1. i!mportant! :common안에 있는 우선순위의 높이값때문에 높이 적용되지 않아 준 속성 or 2.셀렉트에 아이디부여 */
    #site {
      important: true;
      width: 180px;
      height: 30px;
      border: 1px solid #636363;
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      background: url("/images/main/ico_arrow.png") no-repeat 95% 50%;
      padding: 0 40px;
      box-sizing: border-box;
    }

    /* 태블릿 */

    @media all and (max-width: 1024px) {
      .center {
        width: 100%;
      }

      /* footer */
      > div {
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
      /* footer */
      margin-top: 10px;

      > div {
        position: relative;
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

      form {
        float: none;
        position: absolute;
        top: 0;
        right: 0;
        margin-top: 0;
      }
    }
  `
};
