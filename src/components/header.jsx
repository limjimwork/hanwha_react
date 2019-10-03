import React, { Component } from "react";

import { Lang, Menus } from "../constants/list";
import { HeaderStyled } from "../styled/headerStyled";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mIconClicked: false
    };
  }

  toggle = () => {
    this.setState({
      mIconClicked: !this.state.mIconClicked
    });
  };

  render() {
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
              return (
                <li key={idx}>
                  <a href="/">{menu.title}</a>
                  <ul>
                    {menu.items.map((submenu, idx) => {
                      return (
                        <li key={idx}>
                          <a href="/">{submenu}</a>
                        </li>
                      );
                    })}
                  </ul>
                </li>
              );
            })}
          </ul>
          <div className="bg_sub"></div>
        </nav>

        <div className={"m_gnb_wrap" + (this.state.mIconClicked ? " on" : "")}>
          <ul id="m_gnb" className="clearfix">
            {Menus.map((menu, idx) => {
              return (
                <li key={idx}>
                  <a href="/">{menu.title}</a>
                  <ul>
                    {menu.items.map((submenu, idx) => {
                      return (
                        <li key={idx}>
                          <a href="/">{submenu}</a>
                        </li>
                      );
                    })}
                  </ul>
                </li>
              );
            })}
          </ul>

          <p className="btn_close" onClick={this.toggle}>
            <a href="/">
              <img src="/images/mobile/btn_m_close.png" alt="close button" />
            </a>
          </p>
        </div>

        <p
          className={"m_icon" + (this.state.mIconClicked ? " on" : "")}
          onClick={this.toggle}
        >
          <a href="/" className="m_block">
            <img src="/images/mobile/btn_m_menu.png" alt="mobile menu button" />
          </a>
        </p>
      </HeaderStyled.Wrap>
    );
  }
}

export default Header;
