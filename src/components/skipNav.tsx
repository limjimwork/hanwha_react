import clsx from "clsx"

const menus = [
  {
    name: "본문 바로가기",
    href: "#container",
  },
  {
    name: "메뉴 바로가기",
    href: "#gnb",
  },
]

const SkipNav = () => {
  return (
    <ul>
      {menus.map((menu) => (
        <li key={menu.name}>
          <a
            className={clsx(
              "absolute",
              "-top-full",
              "left-0",
              "z-50",
              "block",
              "w-full",
              "py-2",
              "text-xl",
              "text-white",
              "text-center",
              "uppercase",
              "leading-6",
              "bg-[rgba(243,_115,_33,_0.5)]",
              "hover:top-0",
              "active:top-0",
              "focus:top-0"
            )}
            href={menu.href}
          >
            {menu.name}
          </a>
        </li>
      ))}
    </ul>
  )
}

export default SkipNav
