import { useState } from "react"
import clsx from "clsx"

import { Menus } from "../constants/list"

const MobileGnbItem = () => {
  const [visible, setVisible] = useState(false)
  const [clickedMenuIndex, setClickedmenuIndex] = useState<null | number>(null)

  const initializeMenu = () => {
    setVisible(!visible)
    setClickedmenuIndex(null)
    return
  }

  return (
    <>
      <ul
        id="m_gnb"
        className={clsx(
          "fixed",
          "inset-y-0",
          "z-50",
          "w-9/12",
          "h-full",
          "text-white",
          "pt-10",
          "transition-all",
          "bg-black/85",
          "overflow-y-auto",
          {
            "right-0": visible,
            "-right-full": !visible,
          }
        )}
      >
        {Menus.map((menu, idx) => (
          <li key={idx}>
            <button
              className="block w-full text-left pl-4 py-3"
              onClick={() => setClickedmenuIndex(idx)}
            >
              {menu.title}
            </button>
            <ul
              className={clsx("static", "bg-white/30", {
                "hidden h-0": clickedMenuIndex !== idx,
                "block h-full": clickedMenuIndex === idx,
              })}
            >
              {menu.items.map((submenu, subMenuIdx) => (
                <li key={`${idx}` + `${subMenuIdx}}`}>
                  <a
                    href="#"
                    className="block text-sm pl-6 py-2 border-b-white border-b"
                    onClick={initializeMenu}
                  >
                    {submenu}
                  </a>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>

      <button
        className={clsx(
          "relative",
          "z-50",
          "lg:hidden",
          "p-5",
          "before:block",
          "before:content-['']",
          "afbeforeter:w-4",
          "before:h-0.5",
          "before:mt-1",
          "before:bg-black",
          "after:block",
          "after:content-['']",
          "after:w-4",
          "after:h-0.5",
          "after:mt-1",
          "after:bg-black",
          "before:transition-all",
          "after:transition-all",
          {
            "before:rotate-45 after:-rotate-45": visible,
            "after:-translate-y-1.5": visible,
            "before:bg-white after:bg-white": visible,
          }
        )}
        onClick={initializeMenu}
        aria-label={visible ? "메뉴 닫기" : "메뉴 열기"}
      />
    </>
  )
}

export default MobileGnbItem
