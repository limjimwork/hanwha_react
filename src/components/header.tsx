// import { useState } from "react"
import clsx from "clsx"

import { Langs, Menus } from "../constants/list"

import Gnb from "./gnb"
// import MobileGnbItem from "./mobileGnb"

const Header = () => {
  // const [clickedMicon, setClickedMicon] = useState(false)

  return (
    <header className="center">
      <ul className="flex justify-end py-5 mr-10">
        {Langs.map((lang, idx) => {
          return (
            <li key={idx} className="text-sm text-secondary-gray">
              {idx !== 0 && (
                <span className="relative -top-px text-tertiary-gray">|</span>
              )}
              <a
                href="/"
                className={clsx(
                  "uppercase",
                  "p-1",
                  "hover:text-primary-orange",
                  "active:text-primary-orange",
                  "focus:text-primary-orange"
                )}
              >
                {lang}
              </a>
            </li>
          )
        })}
      </ul>

      <div className="flex justify-between items-center">
        <h1 className="h-full -mt-8">
          <a href="/">
            <img src="/images/main/logo.png" alt="The Space Creator 한화 LnC" />
          </a>
        </h1>

        <Gnb menus={Menus} />

        {/* <div className={"m_gnb_wrap" + (clickedMicon ? " on" : "")}>
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
        </p> */}
      </div>
    </header>
  )
}

export default Header
