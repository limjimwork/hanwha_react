import React, { Component } from 'react';
import './visual.css';

class Visual extends Component{

    constructor(props){
        super(props)
        this.state = {
            index: 0
        }
        this.indexInterval = null;
    }

    componentDidMount(){
        this.indexInterval = setInterval(this.incrementIndex, 3000);
    }

    componentWillUnmount(){
        clearInterval(this.indexInterval);
    }

    incrementIndex = () => {
        let nextIndex = (this.state.index + 1) % 4;
        this.setState({index: nextIndex});
    }

    render() {
        const index = this.state.index

        const bannerText = [
            <p className="blind">온라인몰 할인</p>,
            <p>한화 L&amp;C가 만들어가는 <span>&#91;행복한공간&#93;</span> 입니다.</p>,
            <p>자연을 닮은 <span>&#91;친환경공간&#93;</span> 입니다.</p>,
            <p>삶의 여유를 느낄 수 있는 <span>&#91;하나된공간&#93;</span> 입니다.</p>
        ]
        const banner = (
            <div className={"ban banner" + (index+1)}>
                {bannerText[index]}
            </div>
        )

        const content = [0, 1, 2, 3].map((number, idx)=>{
            return (
                <li key={idx} className={index === number ? "on" : null} onClick={(e)=>{
                    e.preventDefault();
                    this.setState({index: number})
                    return false
                }}>
                    <a href="#">{number+1}</a>
                </li>
            )
        })

        return(
            <div id="visual" 
                onMouseOver={()=>{
                    clearInterval(this.indexInterval);
                }} 
                onMouseOut={()=>{
                    this.indexInterval = setInterval(this.incrementIndex, 3000);
                }}
            >
                {banner}
                <ul className="btn_banner clearfix">
                    {content}
                </ul>
            </div>
        );
    }
}

export default Visual;