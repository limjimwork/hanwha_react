import clsx from "clsx"

const Gnb = ({ menus }) => {
  return (
    <nav className="relative group w-full ml-5">
      <h2 className="blind">메인메뉴</h2>
      <ul id="gnb" className="flex justify-between text-center">
        {menus.map((menu, idx) => (
          <li
            key={idx}
            className={clsx(
              "relative",
              "w-full",
              "border-b-[3px] border-transparent",
              "hover:text-primary-orange",
              "active:text-primary-orange",
              "focus:text-primary-orange",
              "hover:border-primary-orange"
            )}
          >
            <a href="/" className="block text-lg pb-5">
              {menu.title}
            </a>
            <ul
              className={clsx(
                "absolute",
                "top-[50px]",
                "left-0",
                "hidden",
                "w-full",
                "pt-2",
                "z-50",
                "group-hover:block",
                "group-action:block",
                "group-focus:block"
              )}
            >
              {menu.items.map((submenu, idx) => {
                return (
                  <li
                    key={idx}
                    className={clsx(
                      "text-secondary-gray",
                      "hover:text-primary-orange",
                      "active:text-primary-orange",
                      "focus:text-primary-orange"
                    )}
                  >
                    <a href="/" className="block py-2">
                      {submenu}
                    </a>
                  </li>
                )
              })}
            </ul>
          </li>
        ))}
      </ul>
      <div
        className={clsx(
          "absolute",
          "top-[50px]",
          "left-0",
          "hidden",
          "w-full",
          "h-64",
          "bg-white/80",
          "z-40",
          "group-hover:block",
          "group-action:block",
          "group-focus:block"
        )}
      />
    </nav>
  )
}

export default Gnb
