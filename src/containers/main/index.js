import React, { Component } from 'react';
import './main.css';
import UserCard from '../../components/userCard';

import {getUsers} from '../../actions/getUsers';
import { connect } from "react-redux";

class Main extends Component{
  constructor (props){
    super(props);
    this.state = {
      isOpen : false
    }
  }
  componentDidMount(){
    this.props.getUsers();
  }
  makeCard = (arr) => {
    return arr.map((card) => {
      return <UserCard data={card} toggleModal={this.props.toggleModal} key={card.username.toString()}/>
    })
  }
  sliceArr = (arr) => {
    return arr.map((chunkArr, index) => {
      return <div className='user__card__row' key={index}>
        {chunkArr}
      </div>
    })
  }
  chunkArray = (arr, chunk) => {
    let i, j, tmp = [];
    for (i = 0, j = arr.length; i < j; i += chunk) {
      tmp.push(arr.slice(i, i + chunk));
    }
    return tmp;
  }
  takeContent = () =>{
    const content = this.props.store.users.data;
    const cards = this.makeCard(content);
    const chunkCards = this.chunkArray(cards, 4);
    return this.sliceArr(chunkCards);
  }
  render(){
    return (
      <main>
        {this.takeContent()}
        {this.props.store.users.error}
      </main>);
  }
}

export default connect(
  state => ({store: state}),
  dispatch => ({
    getUsers: () => {dispatch(getUsers())}
  })
)(Main);