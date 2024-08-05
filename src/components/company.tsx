import clsx from "clsx"

const Company = () => {
  const boxConfig = "w-full p-9 text-center text-white bg-black"
  const buttonConfig =
    "block w-full mt-5 py-2 border border-white transition-colors"

  return (
    <section className="md:flex lg:w-1/2 mt-5 lg:mt-0 lg:ml-5">
      <div className={clsx(boxConfig, "mr-5 bg-product-green")}>
        <h3 className="text-xl mb-4">인재채용</h3>
        <p>
          한화 L&amp;C가 찾고 있는 인재는
          <br />
          바로 여러분입니다.
          <br />
          한화 L&amp;C에서 여려분의
          <br />
          무한한 능력을 펼쳐보십시오.
        </p>
        <a
          href="#"
          className={clsx(
            buttonConfig,
            "hover:text-product-green hover:bg-white"
          )}
        >
          바로가기
        </a>
      </div>
      <div className={clsx(boxConfig, "mt-5 md:mt-0 bg-product-red")}>
        <h3 className="text-xl mb-4">사회공헌</h3>
        <p>
          마음과 마음을 모아
          <br />
          따스한 사랑의 손길을 전하는
          <br />
          한화L&amp;C의 활동을
          <br />
          전달합니다.
        </p>
        <a
          href="#"
          className={clsx(
            buttonConfig,
            "hover:text-product-red hover:bg-white"
          )}
        >
          바로가기
        </a>
      </div>
    </section>
  )
}

export default Company
