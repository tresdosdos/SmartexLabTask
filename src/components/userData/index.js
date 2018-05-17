import React from 'react';
import './userData.css';

export default function UserData(props){
  return (
    <div className='user__card__data'>
      <h2>{props.data.username}</h2>
      <h3>{props.data.name}</h3>
      <h4>{props.data.phone}</h4>
      <a href={'http://' + props.data.website}>{props.data.website}</a>
      <a href={'mailto:' + props.data.email}>{props.data.email}</a>
    </div>
  );
}