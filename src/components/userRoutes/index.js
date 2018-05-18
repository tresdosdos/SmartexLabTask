import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ModalWindow from '../../containers/modalWindow';

export default function UserRoutes(props){
  return (
    <Switch>
      <Route exact path='/' render={() => { return <div></div>}}/>
      <Route path={'/user' + 1} render={() => {return <ModalWindow userID={1} show={props.isOpen} onClose={props.toggleModal}/>}}/>
      <Route path={'/user' + 2} render={() => {return <ModalWindow userID={2} show={props.isOpen} onClose={props.toggleModal}/>}}/>
      <Route path={'/user' + 3} render={() => {return <ModalWindow userID={3} show={props.isOpen} onClose={props.toggleModal}/>}}/>
      <Route path={'/user' + 4} render={() => {return <ModalWindow userID={4} show={props.isOpen} onClose={props.toggleModal}/>}}/>
      <Route path={'/user' + 5} render={() => {return <ModalWindow userID={5} show={props.isOpen} onClose={props.toggleModal}/>}}/>
      <Route path={'/user' + 6} render={() => {return <ModalWindow userID={6} show={props.isOpen} onClose={props.toggleModal}/>}}/>
      <Route path={'/user' + 7} render={() => {return <ModalWindow userID={7} show={props.isOpen} onClose={props.toggleModal}/>}}/>
      <Route path={'/user' + 8} render={() => {return <ModalWindow userID={8} show={props.isOpen} onClose={props.toggleModal}/>}}/>
      <Route path={'/user' + 9} render={() => {return <ModalWindow userID={9} show={props.isOpen} onClose={props.toggleModal}/>}}/>
      <Route path={'/user' + 10} render={() => {return <ModalWindow userID={10} show={props.isOpen} onClose={props.toggleModal}/>}}/>
    </Switch>
  );
}