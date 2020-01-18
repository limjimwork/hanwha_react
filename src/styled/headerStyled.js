import styled from "styled-components";

export const HeaderStyled = {
  Wrap: styled.header`
    /* HEADER */
    .main {
      position: relative;
    }

    .logo {
      float: left;
      width: 177px;
      height: 53px;
      margin: 23px 0px 20px 0px;
    }

    .logo > a {
      display: block;
    }

    .logo img {
      width: 100%;
      height: 100%;
    }

    /* TOP MENU -------------------- */

    .topmenu {
      position: absolute;
      top: 10px;
      right: 35px;
    }

    .topmenu li {
      float: left;
    }

    .topmenu a {
      color: #636363;
      font-size: 0.8em;
      padding-left: 9px;
      padding-right: 4px;
      background: url("/images/main/bar_top.png") no-repeat 0 50%;
    }

    .topmenu a:hover,
    .topmenu a:focus {
      color: #f37321;
    }

    .topmenu .KOR {
      background: none;
    }

    /* MAIN MENU -------------------- */

    nav {
      position: relative;
      float: left;
      width: calc(100% - 177px);
      margin-top: 45px;
    }

    #gnb > li {
      position: relative;
      float: left;
      width: 16.66%;
      padding-bottom: 32px;
      text-align: center;
    }

    #gnb > li > a {
      display: block;
      font-size: 1.2em;
      font-weight: 500;
    }

    #gnb > li.on > a,
    #gnb > li > a:focus {
      color: #f37321;
    }

    /* 2DEPTH -------------------- */

    /* sub의 너비를 주기 위해서는 부모인 li에 position relative를 준다. 너비는 부모의 값을 따라가고 높이는 자식의 값을 따라간다. */

    .sub {
      position: absolute;
      top: 55px;
      left: 0;
      display: none;
      height: 193px;
      width: 100%;
      padding-top: 22px;
      z-index: 1000;
    }

    .sub,
    .sub:before {
      margin-top: -14px;
      margin-bottom: 11px;
    }

    #gnb:hover .sub,
    #gnb:focus .sub,
    #gnb > li:hover .sub:before,
    #gnb > li:focus .sub:before {
      display: block;
    }

    /* sub li의 패딩 탑값을 줄인 만큼 비포에 마진 바텀 주기 */

    .sub:before {
      content: "";
      display: none;
      width: 100%;
      height: 3px;
      text-align: right;
      background: #f37321;
    }

    .sub > li {
      padding-top: 7px;
      padding-bottom: 10px;
    }

    .sub > li > a {
      display: block;
      color: #8a8a8a;
      height: 14px;
      font-weight: 500;
    }

    .sub > li.on > a,
    .sub > li > a:hover,
    .sub > li > a:focus {
      color: #f37321;
    }

    /*배경에 투명도를 넣고싶으면 rgba로 색을 정하면 된다.*/

    .bg_sub {
      position: absolute;
      display: none;
      width: 960px;
      height: 200px;
      background-color: rgb(255, 255, 255);
      background-color: rgba(255, 255, 255, 0.8);
      margin-top: 3px;
      top: 55px;
      left: 0;
      z-index: 100;
    }

    #gnb:hover ~ .bg_sub,
    #gnb:focus ~ .bg_sub {
      display: block;
    }

    /* HEADER END */

    /*mobile*/
    #m_gnb,
    .m_icon,
    .btn_close {
      display: none;
    }

    @media all and (max-width: 1024px) {
      /* header */
      header,
      .center {
        width: 100%;
      }

      .logo {
        width: 141.6px;
        height: 42.4px;
        margin-left: 30px;
      }

      .topmenu,
      nav {
        display: none;
      }

      .m_icon,
      .m_icon > a,
      #m_gnb,
      #m_gnb a,
      .m_sub a,
      .btn_close {
        display: block;
      }

      .m_icon {
        position: absolute;
        top: 35px;
        right: 30px;
        width: 25px;
        height: 25px;
      }

      .m_icon > button {
        width: 100%;
        height: 100%;
      }

      .m_icon img {
        width: 100%;
        height: 100%;
      }

      .m_icon.on {
        display: none;
      }

      .m_gnb_wrap.on #m_gnb {
        right: 0%;
      }

      .m_gnb_wrap.on .btn_close {
        right: 50%;
        z-index: 10000;
      }

      .btn_close {
        position: fixed;
        top: 0;
        right: -100%;
        transition: 0.5s;
      }

      #m_gnb {
        position: fixed;
        top: 0;
        right: -100%;
        z-index: 9999;
        background-color: rgba(78, 78, 78, 0.9);
        width: 50%;
        height: 100%;
        overflow-y: scroll;
        transition: 0.5s;
      }

      #m_gnb > li > a {
        color: #fff;
        font-size: 14px;
        text-transform: uppercase;
        line-height: 2.5;
        text-indent: 40px;
      }

      .m_sub {
        opacity: 0;
        height: 0px;
        position: static;
        background-color: rgba(255, 255, 255, 0.2);
        transition: 0.5s;
      }

      .m_sub.on {
        opacity: 1;
        height: 100%;
      }

      .m_sub > li {
        border-bottom: 1px solid #dadada;
      }

      .m_sub > li > a {
        color: #fff;
        font-size: 12px;
        line-height: 2.5;
        text-indent: 40px;
      }
    }

    @media all and (max-width: 767px) {
    }
  `
};
