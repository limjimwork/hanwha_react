import styled from "styled-components";

export const VisualStyled = {
  Wrap: styled.div`
    /*VISUAL*/
    position: relative;
    height: 580px;

    /*background-size를 cover로 할 경우 옆에 잘림을 방지할 수 있다.*/

    .ban {
      position: absolute;
      width: 100%;
      height: 580px;
      background: no-repeat center top;
      background-size: cover;
    }

    .ban > p {
      color: #fff;
      font-size: 25px;
      font-weight: 500;
      text-shadow: 2px 2px rgba(0, 0, 0, 0.4);
    }

    .ban span {
      color: #f37321;
      font-size: 32px;
      font-weight: bold;
    }

    .banner1 {
      display: block;
      background-image: url("/images/main/bg_main01.jpg");
    }

    .banner2 {
      background-image: url("/images/main/bg_main02.jpg");
    }

    .banner3 {
      background-image: url("/images/main/bg_main03.jpg");
    }

    .banner4 {
      background-image: url("/images/main/bg_main04.jpg");
    }

    .banner2 > p {
      margin-top: 290px;
      margin-left: 900px;
    }

    .banner3 > p {
      margin-top: 290px;
      margin-left: 900px;
    }

    .banner4 > p {
      margin-top: 290px;
      margin-left: 900px;
    }

    .btn_banner {
      position: absolute;
      left: 50%;
      margin-left: -50px;
      bottom: 10px;
    }

    .btn_banner > li {
      float: left;
      width: 15px;
      height: 15px;
      background-color: transparent;
      border: 1px solid #a5a5a5;
      margin: 0 5px;
      text-indent: -9999em;
      box-sizing: border-box;
    }

    .btn_banner > li.on {
      background: #f37321;
      border: none;
    }

    .btn_banner > li > a {
      display: block;
      width: 100%;
      height: 100%;
    }

    /* VISUAL END */

    /* 태블릿 */
    @media all and (max-width: 1024px) {
      height: 40vw;

      .ban {
        height: 40vw;
      }

      .ban > p,
      .ban span {
        margin: 20% 0;
        font-size: 3vw;
        text-align: center;
        text-shadow: 1px 1px rgba(0, 0, 0, 0.4);
      }

      .btn_banner > li {
        width: 14px;
        height: 14px;
        margin: 0 5px;
      }
    }

    /* 모바일 */

    @media all and (max-width: 767px) {
      .btn_banner {
        bottom: 5px;
      }

      .btn_banner > li {
        width: 12px;
        height: 12px;
        margin: 0 5px;
      }
    }
  `
};
