import styled from "styled-components";

export const HeaderStyled = {
  Wrap: styled.header`
    /* HEADER */
    .main {
      position: relative;
    }

    .logo {
      float: left;
      width: 20%;
      margin: 23px 0px 20px 0px;
    }

    .logo > a {
      display: block;
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
      background: url(/images/main/bar_top.png) no-repeat 0 50%;
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
      float: left;
      width: 80%;
      margin-top: 45px;
    }

    #gnb > li {
      float: left;
      position: relative;
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
      display: none;
      position: absolute;
      height: 193px;
      top: 50px;
      left: 0;
      width: 100%;
      padding-top: 22px;
      z-index: 1000;
    }

    .sub,
    .sub:before {
      margin-top: -12px;
      margin-bottom: 9px;
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
      background: #f37321;
      width: 100%;
      height: 3px;
      text-align: right;
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
      top: 100px;
      right: 0;
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
  `
};
