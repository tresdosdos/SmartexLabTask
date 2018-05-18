import React, { Component } from 'react';
import './userCompany.css';


export default class UserCompany extends Component{
  constructor(props){
    super(props);
    this.state = {
      isOpen: false
    }
  }
  toggleMenu = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
  render(){
    let symbol;
    if (this.state.isOpen) symbol = '▲';
    else symbol = '▼'
    return (
      <div className='user__company__container'>
        <button onClick={this.toggleMenu} className='user__company__menu__button'>{this.props.data.company.name + symbol}</button>
        {this.state.isOpen ? (
          <div className='user__company__info__container'>
            <p>Catch phrase of the company: {this.props.data.company.catchPhrase}</p>
            <p>BS: {this.props.data.company.bs}</p>
            <p className='sorry'>sorry, i'm tried to use map and lat&lng, but i'm done</p>
          </div>
        ) : (null)}
      </div>
    );
  }
}