import { useState, useEffect, useRef } from "react"
import clsx from "clsx"

const useInterval = (callback: any, delay: number) => {
  const savedCallback = useRef<any>()

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current?.()
    }
    if (delay !== null) {
      let id = setInterval(tick, delay)
      return () => clearInterval(id)
    }
  }, [delay])
}

const Visual = () => {
  const [index, setIndex] = useState(0)
  const [mouseOver, setMouseOver] = useState(false)

  const textConfig =
    "md:text-2xl text-white font-semibold lg:mt-[290px] lg:ml-[900px] drop-shadow-[2px_2px_rgba(0,0,0,0.4)] text-lg text-center mt-[21%] md:mt-[19%]"
  const textStrongConfig = "md:text-3xl text-primary-orange font-bold text-xl"

  const bannerText = [
    <p className="blind translate-1/2">온라인몰 할인</p>,
    <p className={textConfig}>
      한화 L&amp;C가 만들어가는{" "}
      <span className={textStrongConfig}>&#91;행복한공간&#93;</span> 입니다.
    </p>,
    <p className={textConfig}>
      자연을 닮은 <span className={textStrongConfig}>&#91;친환경공간&#93;</span>{" "}
      입니다.
    </p>,
    <p className={textConfig}>
      삶의 여유를 느낄 수 있는{" "}
      <span className={textStrongConfig}>&#91;하나된공간&#93;</span> 입니다.
    </p>,
  ]

  const banner = (
    <div
      className={clsx(
        "absolute inset-0 w-full h-[50vw] md:h-[40vw] lg:h-[580px]",
        "bg-no-repeat bg-center bg-cover",
        {
          "bg-[url('/public/images/main/bg_main01.jpg')]": index === 0,
          "bg-[url('/public/images/main/bg_main02.jpg')]": index === 1,
          "bg-[url('/public/images/main/bg_main03.jpg')]": index === 2,
          "bg-[url('/public/images/main/bg_main04.jpg')]": index === 3,
        }
      )}
    >
      {bannerText[index]}
    </div>
  )

  const content = [0, 1, 2, 3].map((number, idx) => {
    return (
      <li
        key={idx}
        className={clsx(
          "w-3.5 h-3.5 lg:w-4 lg:h-4",
          "mx-1.5",
          "-indent-[9999em]",
          "border",
          {
            "border-secondary-gray bg-transparent": index !== number,
            "border-primary-orange bg-primary-orange": index === number,
          }
        )}
        onClick={() => setIndex(number)}
      >
        <a href="#" className="block w-full h-full cursor-pointer">
          {number + 1}
        </a>
      </li>
    )
  })

  useInterval(() => {
    if (!mouseOver) {
      setIndex((index + 1) % 4)
    }
  }, 3000)

  return (
    <div
      className="relative h-[50vw] md:h-[40vw] lg:h-[580px]"
      onMouseOver={() => setMouseOver(true)}
      onMouseOut={() => setMouseOver(false)}
    >
      {banner}
      <ul className="absolute left-1/2 -translate-x-1/2 bottom-2.5 md:flex hidden">
        {content}
      </ul>
    </div>
  )
}

export default Visual
