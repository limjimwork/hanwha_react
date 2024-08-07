import clsx from "clsx"

import { Langs } from "../constants/list"

import Gnb from "./gnb"
import MobileGnbItem from "./mobileGnb"

const Header = () => {
  return (
    <header className="center">
      <ul className="hidden justify-end py-5 mr-10 lg:flex">
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
        <h1
          className={clsx(
            "max-w-[177px]",
            "min-w-[150px]",
            "w-[35vw]",
            "h-full",
            "px-5 py-3",
            "lg:-mt-8",
            "lg:px-0 lg:py-0"
          )}
        >
          <a href="/">
            <img src="/images/main/logo.png" alt="The Space Creator 한화 LnC" />
          </a>
        </h1>

        <Gnb />
        <MobileGnbItem />
      </div>
    </header>
  )
}

export default Header
