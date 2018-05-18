import React from 'react';
import './userData.css';

export default function UserData(props){
  /*Need to accept external links in gmail to mailto start works*/
  if (props.className === 'user__card__data'){
    return (
      <div className={props.className}>
        <h2>{props.data.username}</h2>
        <h3>{props.data.name}</h3>
        <h4>{props.data.phone}</h4>
        <a href={'http://' + props.data.website}>{props.data.website}</a>
        <a href={'mailto:' + props.data.email}>{props.data.email}</a>
      </div>
    );
  }
  else if (props.className === 'modal__window__data'){
    return (
      <div className={props.className}>
        <h2>User name: {props.data.username}</h2>
        <h3>First and Last names: {props.data.name}</h3>
        <h4>Phone: {props.data.phone}</h4>
        <a href={'http://' + props.data.website}>Website: {props.data.website}</a>
        <a href={'mailto:' + props.data.email}>Email: {props.data.email}</a>
      </div>
    );
  }
}