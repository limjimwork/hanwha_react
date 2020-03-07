import React, { useState } from "react";
import { ContainerStyled } from "../styled/containerStyled";

const Container = () => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <ContainerStyled.Wrap>
      <article id="container" className="clearfix">
        <h2 className="blind">메인메뉴</h2>

        <div className="product">
          <div className="center clearfix">
            <section className="floor product_box product_top">
              <a href="#" className="clearfix">
                <div className="linetop">
                  <h3>Healthy&amp;Natural</h3>
                  <span>바닥재</span>
                  <p>
                    내추럴한 자연공간을
                    <br />
                    연출하는
                    <br />
                    아름다운 패턴의
                    <br />
                    바닥재입니다.
                  </p>
                </div>
                <div className="img">
                  <img src="/images/main/con_01on.jpg" alt="바닥재" />
                </div>
                <span className="mobile">바닥재</span>
              </a>
            </section>
            <section className="stone product_box product_top">
              <a href="#" className="clearfix">
                <div className="linetop">
                  <h3>Well&#45;being</h3>
                  <span>인테리어스톤</span>
                  <p>
                    자연소재에
                    <br />
                    첨단기술을 더한
                    <br />
                    친환경 인테리어
                    <br />
                    마감재입니다.
                  </p>
                </div>
                <div className="img">
                  <img src="/images/main/con_02on.jpg" alt="인테리어스톤" />
                </div>
                <span className="mobile">인테리어스톤</span>
              </a>
            </section>
            <section className="wallpaper product_box product_bot">
              <a href="#" className="clearfix">
                <div className="linebot">
                  <h3>Beauty&amp;Comfort</h3>
                  <span>벽지</span>
                  <p>
                    편안함과 아름다움을
                    <br />
                    추구하는
                    <br />
                    신개념 감성벽지입니다.
                  </p>
                </div>
                <div className="img">
                  <img src="/images/main/con_03on.jpg" alt="벽지" />
                </div>
                <span className="mobile">벽지</span>
              </a>
            </section>
            <section className="windows product_box product_bot">
              <a href="#" className="clearfix">
                <div className="linebot">
                  <h3>Scientific System</h3>
                  <span>창호재</span>
                  <p>
                    과학적 시스템으로
                    <br />
                    에너지를 지켜주는
                    <br />
                    기술의 창호입니다.
                  </p>
                </div>
                <div className="img">
                  <img src="/images/main/con_04on.jpg" alt="창호재" />
                </div>
                <span className="mobile">창호재</span>
              </a>
            </section>
          </div>
        </div>

        <div
          className={"bg_popup" + (showVideo ? " on" : "")}
          onClick={() => setShowVideo(!showVideo)}
        >
          <div className="video_area">
            <img src="/images/main/bg_pop.jpg" alt="동영상사진" />
          </div>
        </div>

        <div className="board">
          <div className="center clearfix">
            <section
              className="clip board_box"
              onClick={() => setShowVideo((showVideo = true))}
            >
              <h3 className="blind">동영상보기</h3>
              <img src="/images/main/con_05.jpg" alt="취향을 담다" />
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
            <section className="service board_box">
              <div className="onshop">
                <h3>
                  <img src="/images/main/ico_onshop.png" alt="cart" />
                </h3>
                <p>Online Shop</p>
                <p>
                  네이버 스토어팜
                  <br />
                  온라인 쇼핑몰입니다.
                </p>
                <a href="#">SHOP</a>
              </div>
              <div className="gallery">
                <h3>
                  <img src="/images/main/ico_gallery.png" alt="gallery" />
                </h3>
                <p>Gallery Q</p>
                <p>
                  한화L&amp;C의 토털 인테리어
                  <br />
                  솔루션 전시장입니다.
                </p>
                <a href="#">GALLERY</a>
              </div>
            </section>
          </div>
        </div>
      </article>
    </ContainerStyled.Wrap>
  );
};

export default Container;
