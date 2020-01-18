import React, { Component } from 'react';
import MenuItem from './menuItem';
import MobileMenuItem from './mobilemenuItem';
import './header.css';
import './mobile.css';

const menus = [
    {
        title: '회사소개', 
        items: [
            '한화L&C소개',
            '네트워크',
            '연혁',
            '윤리경영',
            '환경/안전경영',
            '동반성장'
        ]
    },
    {
        title: '제품정보',
        items: [
            '바닥재',
            '벽지',
            '창호재',
            '데코마감재/필름',
            '인테리어스톤',
            '가구'
        ]
    },
    {
        title: '전시/매장',
        items: [
            '인테리어 전시장',
            '직영점찾기',
            '대리점찾기',
            '온라인공식몰',
            '고객의소리',
            'FAQ'
        ]
    },
    {
        title: '채용정보',
        items: [
            '인사제도',
            'JOB in L&C',
            '인재채용'
        ]
    },
    {
        title: '홍보센터',
        items: [
            '한화L&C뉴스',
            '인쇄광고',
            '사회공헌',
            '제품협찬',
            '소비자패널'            
        ]
    },
    {
        title: 'L&C in TV',
        items: [
            '취향을 담다',
            '내집이 나타났다',
            'LET美HOME'
        ]
    }
]

class Header extends Component{

    constructor(props){
        super(props);
        this.state = {
            mIconClicked: false
        }
    }

    toggle = () => {
        this.setState({
            mIconClicked : !this.state.mIconClicked
        });
    }

    render() {

        return (
            <header className="main center clearfix">
                <h1 className="logo"><a href="index.html"><img src="/images/main/logo.png" alt="The Space Creator 한화LnC" /></a></h1>
        
                <ul className="topmenu clearfix">
                    <li><a href="#" className="kor">KOR</a></li>
                    <li><a href="#">ENG</a></li>
                    <li><a href="#">CHI</a></li>
                </ul>
        
                <nav className="clearfix">
                    <h2 className="blind">메인메뉴</h2>
                    <ul id="gnb" className="clearfix">
                        {
                            menus.map((menu, idx)=>{
                                return (
                                    <MenuItem key={idx} data={menu} />
                                );
                            })
                        }
                    </ul>
                    <div className="bg_sub"></div>
                </nav>
                <div className={"m_gnb_wrap" + (this.state.mIconClicked ? " on" : "")}>
                    <ul id="m_gnb" className="clearfix">
                        {
                            menus.map((menu, idx)=>{
                                return(
                                    <MobileMenuItem key={idx} data={menu} />
                                );
                            })
                        }
                    </ul>
                    <p className="btn_close" onClick={this.toggle}><a href="#"><img src="/images/mobile/btn_m_close.png" alt="close button" /></a></p>
                </div>                
                <p className={"m_icon" + (this.state.mIconClicked ? " on" : "")} onClick={this.toggle}><a href="#" className="m_block"><img src="/images/mobile/btn_m_menu.png" alt="mobile menu button" /></a></p>
            </header>
        );
    }
}

export default Header;