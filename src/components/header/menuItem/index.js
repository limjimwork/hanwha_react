import React, {Component} from 'react';
import update from 'immutability-helper';

class MenuItem extends Component {
    constructor(props){
        super(props)
        this.state = {
            flag: false,
            subFlags: new Array(this.props.data.items.length).fill(false)
        }
    }

    render(){
        const menu = this.props.data;

        return (
            <li className={this.state.flag ? "on" : null} 
                onMouseOver={()=>{
                    this.setState({flag: true})
                }} onMouseOut={()=>{
                    this.setState({flag: false})
                }} onFocus={()=>{
                    this.setState({flag: true})
                }} onBlur={()=>{
                    this.setState({flag: false})
                }}
            >
                <a href="#">{menu.title}</a>
                <ul className="sub">
                    {
                        menu.items.map((submenu, idx)=>{
                            return (
                                <li key={idx} className={this.state.subFlags[idx] ? "on" : null}
                                    onMouseOver={()=>{
                                        this.setState({subFlags: update(this.state.subFlags, {[idx]: {$set: true}})})
                                    }} onMouseOut={()=>{
                                        this.setState({subFlags: update(this.state.subFlags, {[idx]: {$set: false}})})
                                    }} onFocus={()=>{
                                        this.setState({subFlags: update(this.state.subFlags, {[idx]: {$set: true}})})
                                    }} onBlur={()=>{
                                        this.setState({subFlags: update(this.state.subFlags, {[idx]: {$set: false}})})
                                    }}
                                >
                                    <a href="#">{submenu}</a>
                                </li>
                            )
                        })
                    }
                </ul>
            </li>
        )
    }
}

export default MenuItem;