import Product from "./product"
import Shop from "./shop"

const Container = () => {
  return (
    <div>
      <article id="container">
        <h2 className="blind">메인메뉴</h2>
        <Product />
        <div className="px-5 md:px-0 mb-[50px] py-[50px] bg-[#fef4ed]">
          <div className="center lg:flex">
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
        </div>

        {/* 
        <div className="board">
          <div className="center clearfix">
            <section className="clip board_box">
              <h3 className="blind">동영상보기</h3>
              <img
                src="/images/main/con_05.jpg"
                alt="취향을 담다"
                onClick={() => setShowVideo(true)}
              />
            </section>
            <section className="co_info board_box clearfix">
              <div className="recruit">
                <h3>인재채용</h3>
                <p>
                  한화 L&amp;C가 찾고 있는 인재는
                  <br />
                  바로 여러분입니다.
                  <br />
                  한화 L&amp;C에서 여려분의
                  <br />
                  무한한 능력을 펼쳐보십시오.
                </p>
                <a href="#">바로가기</a>
              </div>
              <div className="contribution">
                <h3>사회공헌</h3>
                <p>
                  마음과 마음을 모아
                  <br />
                  따스한 사랑의 손길을 전하는
                  <br />
                  한화L&amp;C의 활동을
                  <br />
                  전달합니다.
                </p>
                <a href="#">바로가기</a>
              </div>
            </section>
            <section className="promote board_box clearfix">
              <div className="news clearfix">
                <div className="bg_icon"></div>
                <h3>뉴스</h3>
                <ul>
                  <li>
                    <a href="#">
                      한화L&amp;C&#44; &#39;칸스톤&#39; 제2 생산라인 이달부터
                      생산 돌입
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      한화L&amp;C&#44; 제 8회 디자인 트렌드세미나
                      &#39;인트렌드&#40;intrend&#41;&#39; 개최
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      한화L&amp;C&#44; 논현동에 토털 인테리어 전시장 오픈
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      한화L&amp;C&#44; 토털 인테리어 패키지 TV홈쇼핑 판매
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      한화L&amp;C&#44; 무지 실크벽지
                      &#39;큐브&#40;Q&#39;ube&#41;&#39; 출시로 Q벽지 라인업 확대
                    </a>
                  </li>
                </ul>
                <a href="#">
                  <p className="more">more</p>
                </a>
              </div>
              <div className="notice clearfix">
                <div className="bg_icon"></div>
                <h3>공지사항</h3>
                <ul>
                  <li>
                    <a href="#">
                      한화L&amp;C&#44; &#39;칸스톤&#39; 제2 생산라인 이달부터
                      생산 돌입
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      한화L&amp;C&#44; 제 8회 디자인 트렌드세미나
                      &#39;인트렌드&#40;intrend&#41;&#39; 개최
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      한화L&amp;C&#44; 논현동에 토털 인테리어 전시장 오픈
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      한화L&amp;C&#44; 토털 인테리어 패키지 TV홈쇼핑 판매
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      한화L&amp;C&#44; 무지 실크벽지
                      &#39;큐브&#40;Q&#39;ube&#41;&#39; 출시로 Q벽지 라인업 확대
                    </a>
                  </li>
                </ul>
                <a href="#">
                  <p className="more">more</p>
                </a>
              </div>
            </section>
          </div>
        </div> */}
      </article>
    </div>
  )
}

export default Container
