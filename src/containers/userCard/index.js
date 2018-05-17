import React, { Component } from 'react';
import './userCard.css';
import UserData from '../../components/userData';

export default class UserCard extends Component{
  render(){
    return (<section className='user__card__container'>
      <div className='user__card__avatar'></div>
      <UserData data={this.props.data}/>
    </section>)
  }
}