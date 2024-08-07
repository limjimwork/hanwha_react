import Board from "./board"
import Company from "./company"
import Product from "./product"
import Shop from "./shop"

const Container = () => {
  return (
    <div>
      <article id="container">
        <h2 className="blind">메인메뉴</h2>
        <Product />
        <div className="px-5 md:px-0 py-5 md:py-12 bg-light-orange">
          <div className="center lg:flex !mb-5">
            <section className="w-full lg:mr-5 lg:mb-0 mb-5">
              <h3 className="blind">동영상보기</h3>
              <img
                className="w-full h-full mx-auto cursor-pointer"
                src="/images/main/con_05.jpg"
                alt="취향을 담다 네이버 TV 동영상"
              />
            </section>
            <Shop />
          </div>
          <div className="center lg:flex">
            <Board />
            <Company />
          </div>
        </div>
      </article>
    </div>
  )
}

export default Container
