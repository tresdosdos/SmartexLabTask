import React, { Component } from 'react';
import './main.css';
import UserCard from '../../containers/userCard';
import {getUsers} from '../../actions/getUsers';
import { connect } from "react-redux";

class Main extends Component{
  componentDidMount(){
    this.props.getUsers();
  }
  takeContent = () =>{
    const content = this.props.store.users.data;
    const cards = content.map((card) => {
      console.log(card);
      return <UserCard data={card}/>
    })
    const chunkCards = this.chunkArray(cards, 4);
    return chunkCards.map((chunkArr) => {
      return <div className='user__card__row'>
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
  render(){
    return (
      <main>
        {this.takeContent()}
      </main>
    );
  }
}

export default connect(
  state => ({store: state}),
  dispatch => ({
    getUsers: () => {dispatch(getUsers())}
  })
)(Main);