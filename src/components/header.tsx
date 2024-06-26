import { useState } from "react"
import clsx from "clsx"

import { Langs, Menus } from "../constants/list"

import GnbItems from "./gnb"
import MobileGnbItem from "./mobileGnb"

const Header = () => {
  const [clickedMicon, setClickedMicon] = useState(false)

  return (
    <header className={clsx("center", "flex", "justify-between")}>
      <h1>
        <a href="/">
          <img src="/images/main/logo.png" alt="The Space Creator 한화 LnC" />
        </a>
      </h1>

      <div>
        <ul className={clsx("flex", "py-2.5")}>
          {Langs.map((lang, idx) => {
            return (
              <li key={idx} className="text-sm text-secondary-gray">
                {idx !== 0 && <span className="relative -top-px">|</span>}
                <a
                  href="/"
                  className={clsx(
                    "hover:text-primary-orange active:text-primary-orange focus:text-primary-orange",
                    "uppercase",
                    "p-1"
                  )}
                >
                  {lang}
                </a>
              </li>
            )
          })}
        </ul>

        <nav className="flex">
          <h2 className="blind">메인메뉴</h2>
          <ul id="gnb" className="clearfix">
            {Menus.map((menu, idx) => {
              return <GnbItems key={idx} menu={menu} />
            })}
          </ul>
          <div className="bg_sub"></div>
        </nav>

        <div className={"m_gnb_wrap" + (clickedMicon ? " on" : "")}>
          <ul id="m_gnb" className="clearfix">
            {Menus.map((menu, idx) => {
              return <MobileGnbItem key={idx} menu={menu} />
            })}
          </ul>

          <p
            className="btn_close"
            onClick={() => setClickedMicon(!clickedMicon)}
          >
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
      </div>
    </header>
  )
}

export default Header
