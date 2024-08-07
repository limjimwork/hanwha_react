import clsx from "clsx"

const Terms = ["개인정보처리방침", "이용약관", "사이트맵"]
const FamilySites = [
  "FAMILY SITE",
  "(주)한화",
  "한화테크윈",
  "한화건설",
  "한화케미칼",
  "한화에너지",
  "한화생명",
  "한화갤러리아",
  "한화63시티",
  "한화역사",
  "한화이글스",
]

const Footer = () => {
  return (
    <footer className="center lg:flex lg:justify-between py-[50px]">
      <h2
        className={clsx(
          "max-w-[177px]",
          "min-w-[150px]",
          "w-[35vw]",
          "h-full",
          "px-5 py-3",
          "lg:px-0 lg:py-0"
        )}
      >
        <a href="#">
          <img src="/images/main/foot_logo.png" alt="footlogo" />
        </a>
      </h2>

      <div className="mt-4 lg:mt-3.5 px-5 lg:px-0">
        <ul className="flex">
          {Terms.map((term, idx) => (
            <li
              className={clsx(
                "pl-2 mr-2",
                "relative before:absolute before:top-1/2 before:-translate-y-1/2 before:left-0",
                "before:w-px before:h-1/2",
                "before:content-[''] before:bg-secondary-gray",
                {
                  "pl-0 before:hidden": idx === 0,
                }
              )}
              key={term + idx}
            >
              <a href="#">{term}</a>
            </li>
          ))}
        </ul>
        <small className="block mt-5">
          본 사이트는 포트폴리오 용도로 제작된 가상 사이트입니다. 모든 콘텐츠의
          저작권은 한화L&amp;C 및 해당사에 있음을 밝힙니다.
          <br />
          designed by 임정임
        </small>
      </div>

      <form
        name="familysites"
        className="inline-block mt-8 lg:mt-3.5 mx-5 lg:mx-0"
      >
        <h3 className="blind">FAMILY SITE</h3>
        <label htmlFor="site"></label>
        <select
          id="site"
          className="px-2.5 py-1.5 border border-black rounded-sm cursor-pointer"
        >
          {FamilySites.map((site) => (
            <option value={site}>{site}</option>
          ))}
        </select>
      </form>
    </footer>
  )
}

export default Footer
