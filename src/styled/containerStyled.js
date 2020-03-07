import styled from "styled-components";

export const ContainerStyled = {
  Wrap: styled.div`
    /* CONTAINER TOP */

    .product {
      margin: 50px 0;
    }

    .product_box {
      position: relative;
      float: left;
      width: 600px;
    }

    .product_box > a {
      display: block;
    }

    .product_box > a > .mobile {
      display: none;
    }

    .product_top > a > div {
      position: relative;
      float: left;
    }

    .product_bot > a > div {
      position: relative;
      float: right;
    }

    /*linetop은 right 0, linebot는 left 0*/

    .product .linetop,
    .product .linebot {
      position: absolute;
      top: 0;
      right: 0;
      width: 310px;
      height: 280px;
      z-index: 1000;
    }

    .product .linebot {
      position: absolute;
      top: 0;
      left: 0;
      width: 310px;
      height: 280px;
      z-index: 1000;
    }

    .img > img {
      opacity: 0;
      transition: 1s;
    }

    .linetop,
    .linebot {
      box-sizing: border-box;
      background-repeat: no-repeat;
    }

    .linetop {
      padding: 40px 40px 40px 50px;
    }

    .linebot {
      padding: 40px 50px 40px 40px;
    }

    .floor .linetop {
      background-image: url("/images/main/con_line01.png");
    }

    .stone .linetop {
      background-image: url("/images/main/con_line02.png");
    }

    .wallpaper .linebot {
      background-image: url("/images/main/con_line03.png");
    }

    .windows .linebot {
      background-image: url("/images/main/con_line04.png");
    }

    .floor > a > .img {
      background-image: url("/images/main/con_01.jpg");
    }

    .stone > a > .img {
      background-image: url("/images/main/con_02.jpg");
    }

    .wallpaper > a > .img {
      background-image: url("/images/main/con_03.jpg");
    }

    .windows > a > .img {
      background-image: url("/images/main/con_04.jpg");
    }

    .product_box > a:hover > .img > img {
      opacity: 1;
    }

    .product_top:after {
      content: "";
      position: absolute;
      bottom: 41px;
      right: 300px;
      border-style: solid;
      border-width: 22px 21px 22px 0;
      border-color: transparent;
      border-right-color: #fff;
    }

    .product_bot:after {
      content: "";
      position: absolute;
      top: 41px;
      left: 300px;
      border-style: solid;
      border-width: 22px 0 22px 21px;
      border-color: transparent;
      border-left-color: #fff;
    }

    /*글자*/

    .product h3 {
      font-size: 1.3em;
      border-radius: 50px;
      padding: 3px;
      text-align: center;
      font-weight: normal;
    }

    .product span {
      display: block;
      font-size: 1.5em;
      font-weight: 500;
      text-align: center;
      padding: 3px;
      font-weight: 600;
    }

    .product p {
      font-size: 1.2em;
      color: #636363;
      line-height: 1.5;
      text-align: center;
      margin-top: 20px;
      border-radius: 15px;
      background-color: #f2f2f2;
    }

    .product_top p {
      padding: 10px 0;
    }

    .product_bot p {
      padding: 20px 0;
    }

    .floor h3,
    .floor span {
      color: #00acb2;
    }

    .stone h3,
    .stone span {
      color: #b24600;
    }

    .wallpaper h3,
    .wallpaper span {
      color: #f37321;
    }

    .windows h3,
    .windows span {
      color: #8a8a8a;
    }

    /* CONTAINER TOP END */

    /*----------------------------------------------------------------------------*/

    /* POP UP */

    .bg_popup {
      display: none;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(138, 138, 138, 0.5);
      z-index: 9999;
      cursor: pointer;
    }

    .bg_popup.on {
      display: block;
    }

    .video_area {
      position: absolute;
      top: 50%;
      left: 50%;
      margin-top: -300px;
      margin-left: -450px;
    }

    .video_area > img {
      width: 900px;
      height: 600px;
    }

    /* CONTAINER BOTTOM */

    .board {
      background: #fef4ed;
      padding: 50px 0;
      margin-bottom: 50px;
    }

    .board_box {
      float: left;
    }

    .clip {
      width: 50%;
      box-sizing: border-box;
    }

    .clip > img {
      width: 100%;
      height: 280px;
      cursor: pointer;
    }

    .co_info {
      width: 50%;
      padding-left: 2%;
      box-sizing: border-box;
    }

    .co_info > div {
      float: left;
      width: 48%;
      height: 280px;
      padding: 40px;
      box-sizing: border-box;
      text-align: center;
      color: #fff;
    }

    .co_info h3 {
      font-size: 1.5em;
      color: #fff;
      font-weight: 500;
      padding-bottom: 15px;
    }

    .co_info a {
      display: block;
      width: 100%;
      margin-top: 23px;
      border: 1px solid #fff;
      text-align: center;
      color: #fff;
      line-height: 40px;
      transition: 0.2s;
      box-sizing: border-box;
    }

    .recruit a:hover {
      color: #01797d;
      border: 1px solid #01797d;
    }

    .contribution a:hover {
      color: #6c2b00;
      border: 1px solid #6c2b00;
    }

    .recruit {
      line-height: 1.5;
      background: #00acb2;
    }

    .contribution {
      margin-left: 4%;
      line-height: 1.5;
      background: #b24600;
    }

    .promote {
      width: 50%;
      background: #fff;
      border: 1px solid #e8ded7;
      margin-top: 20px;
      box-sizing: border-box;
    }

    .promote > div {
      position: relative;
      float: left;
      width: 50%;
      height: 280px;
      padding: 35px;
      box-sizing: border-box;
    }

    .promote h3 {
      font-size: 1.2em;
      color: #8a8a8a;
      font-weight: 500;
      line-height: 2.5;
    }

    .promote ul {
      margin-top: 15px;
    }

    .promote li {
      line-height: 2;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    .promote li a {
      font-size: 1.1em;
      color: #8a8a8a;
      transition: 0.2s;
    }

    .promote li a:hover {
      color: #fca060;
    }

    .bg_icon {
      float: left;
      width: 45px;
      height: 45px;
      padding-right: 10px;
      background-repeat: no-repeat;
    }

    .news > .bg_icon {
      background-image: url("/images/main/ico_news.png");
    }

    .notice > .bg_icon {
      background-image: url("/images/main/ico_notice.png");
    }

    .news {
      border-right: 1px dashed #e8ded7;
      box-sizing: border-box;
    }

    .more {
      position: absolute;
      top: 35px;
      right: 35px;
      width: 15px;
      height: 15px;
      text-indent: -9999px;
      background-image: url("/images/main/ico_more.png");
    }

    .more:hover {
      background-position: -24px 0;
    }

    .service {
      width: 50%;
      margin-top: 20px;
      padding-left: 2%;
      box-sizing: border-box;
    }

    .service > div {
      float: left;
      width: 48%;
      height: 280px;
      padding: 35px;
      box-sizing: border-box;
      background-repeat: no-repeat;
      background-size: cover;
    }

    .service h3 {
      text-align: center;
    }

    .service p {
      text-align: center;
      color: #fff;
      line-height: 2;
    }

    .service p:nth-child(2) {
      font-size: 1.5em;
      font-weight: 500;
    }

    .service p:nth-child(3) {
      line-height: 1.5;
    }

    .service a {
      display: block;
      width: 100%;
      margin-top: 20px;
      border: 1px solid #fff;
      text-align: center;
      color: #fff;
      line-height: 40px;
      transition: 0.2s;
      box-sizing: border-box;
    }

    .onshop a:hover {
      background-color: #01797d;
      border-color: #01797d;
    }

    .gallery a:hover {
      background-color: #b24600;
      border-color: #b24600;
    }

    .onshop {
      background-image: url("/images/main/con_agency.jpg");
    }

    .gallery {
      background-image: url("/images/main/con_gallery.jpg");
      margin-left: 4%;
    }

    /* CONTAINER BOTTOM END */

    /* 태블릿 */

    @media all and (min-width: 768px) and (max-width: 1024px) {
      /* container top */
      .center {
        width: 100%;
      }

      .product > div {
        display: flex;
        flex-wrap: wrap;
      }

      .product_box {
        margin: 1.5% auto 0%;
        float: none;
      }

      .product_top {
        justify-content: flex-start;
      }

      .product_bot {
        justify-content: flex-end;
      }

      .floor {
        order: 1;
        margin-top: 0;
      }
      .stone {
        order: 3;
      }

      .wallpaper {
        order: 2;
      }

      .windows {
        order: 4;
      }

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
    }

    /* 모바일 */

    @media all and (max-width: 767px) {
      /* container */
      .center {
        width: 100%;
      }

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
    }
  `
};
