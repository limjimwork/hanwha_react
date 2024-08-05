import clsx from "clsx"
import { Boards } from "../constants/list"

const Board = () => {
  return (
    <section className="md:flex border border-light-gray">
      {["뉴스", "공지사항"].map((item, idx) => (
        <div
          className={clsx("relative md:w-1/2 p-8 bg-white", {
            "border-t md:border-l border-light-gray border-dashed": idx === 1,
          })}
          key={item}
        >
          <div
            className={clsx(
              "inline-block w-9 h-9",
              "align-middle",
              "mr-2.5 mb-3.5",
              "bg-cover bg-no-repeat",
              {
                "bg-[url('/public/images/main/ico_news.png')]": item === "뉴스",
                "bg-[url('/public/images/main/ico_notice.png')]":
                  item === "공지사항",
              }
            )}
          ></div>
          <h3 className="inline-block text-xl">{item}</h3>
          <ul>
            {Boards.map((board, idx) => (
              <li
                key={item + idx}
                className="overflow-hidden whitespace-nowrap text-ellipsis"
              >
                <a className="transition-colors hover:text-primary-orange cursor-pointer">
                  {board}
                </a>
              </li>
            ))}
          </ul>
          <a href="#" className="inline-block mt-4">
            <p className="more">{"더보기 >"}</p>
          </a>
        </div>
      ))}
    </section>
  )
}

export default Board
