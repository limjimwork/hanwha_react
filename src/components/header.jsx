import React, { useState } from "react";

import { Lang, Menus } from "../constants/list";

import GnbItems from "./gnb";
import MobileGnbItem from "./mobileGnb";

import { HeaderStyled } from "../styled/headerStyled";

const Header = () => {
  const [clickedMicon, setClickedMicon] = useState(false);

  return (
    <HeaderStyled.Wrap className="main center clearfix">
      <h1 className="logo">
        <a href="index.html">
          <img src="/images/main/logo.png" alt="The Space Creator 한화LnC" />
        </a>
      </h1>

      <ul className="topmenu clearfix">
        {Lang.map((lang, idx) => {
          return (
            <li key={idx}>
              <a href="/" className={lang}>
                {lang}
              </a>
            </li>
          );
        })}
      </ul>

      <nav className="clearfix">
        <h2 className="blind">메인메뉴</h2>
        <ul id="gnb" className="clearfix">
          {Menus.map((menu, idx) => {
            return <GnbItems key={idx} menu={menu} />;
          })}
        </ul>
        <div className="bg_sub"></div>
      </nav>

      <div className={"m_gnb_wrap" + (clickedMicon ? " on" : "")}>
        <ul id="m_gnb" className="clearfix">
          {Menus.map((menu, idx) => {
            return <MobileGnbItem key={idx} menu={menu} />;
          })}
        </ul>

        <p className="btn_close" onClick={() => setClickedMicon(!clickedMicon)}>
          <button>
            <img src="/images/mobile/btn_m_close.png" alt="close button" />
          </button>
        </p>
      </div>

      <p
        className={"m_icon" + (clickedMicon ? " on" : "")}
        onClick={() => setClickedMicon(!clickedMicon)}
      >
        <button className="m_block">
          <img src="/images/mobile/btn_m_menu.png" alt="mobile menu button" />
        </button>
      </p>
    </HeaderStyled.Wrap>
  );
};

export default Header;
