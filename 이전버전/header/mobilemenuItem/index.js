import React, { Component } from 'react';
import update from 'immutability-helper';

class MobileMenuItem extends Component{

    constructor(props){
        super(props)
        this.state = {
            visible: false
        };
    }

    toggleMenu=()=>{
        this.setState({
            visible: !this.state.visible
        });
    }

    render(){
        const menu = this.props.data;

        return (
            <li>
                <a href="#" onClick={this.toggleMenu}>{menu.title}</a>
                <ul className={"m_sub"+ (this.state.visible ? " on" : "")}>
                    {
                        menu.items.map((submenu, idx)=>{
                            return (
                                <li>
                                    <a href="#">{submenu}</a>
                                </li>
                            );
                        })
                    }
                </ul>
            </li>
        )
    }
}

export default MobileMenuItem;