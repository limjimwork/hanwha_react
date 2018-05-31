import React, { Component } from 'react';
import './footer.css';

class Footer extends Component {
    render() {
        return(
            <footer className="tail">
                <div className="center clearfix">
                    <h2 className="foot_logo"><a href="#"><img src="/images/main/foot_logo.png" alt="footlogo" /></a></h2>

                    <ul className="foot_menu clearfix">
                        <li className="privacy"><a href="#">개인정보처리방침</a></li>
                        <li><a href="#">이용약관</a></li>
                        <li><a href="#">사이트맵</a></li>
                    </ul>

                    <form name="select">
                        <h3 className="blind">FAMILY SITE</h3>
                        <label htmlFor="site"></label>
                        <select id="site">
                    <option value="family site">FAMILY SITE</option>
                    <option value="한화">&#40;주&#41;한화</option>
                    <option value="한화테크윈">한화테크윈</option>
                    <option value="한화건설">한화건설</option>
                    <option value="한화케미칼">한화케미칼</option>
                    <option value="한화에너지">한화에너지</option>
                    <option value="한화생명">한화생명</option>
                    <option value="한화갤러리아">한화갤러리아</option>
                    <option value="한화63시티">한화63시티</option>
                    <option value="한화역사">한화역사</option>
                    <option value="한화이글스">한화이글스</option>
                    </select>
                    </form>

                    <small>본 사이트는 포트폴리오 용도로 제작된 가상 사이트입니다. 모든 콘텐츠의 저작권은 한화L&amp;C 및 해당사에 있음을 밝힙니다. designed by 임정임 </small>
                </div>
            </footer>
        );
    }
}

export default Footer;