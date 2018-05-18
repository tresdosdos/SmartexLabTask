import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './modalWindow.css';

export default class ModalWindow extends Component{
  constructor(props){
    super(props);
    this.state={
      show: this.props.show,
      counter: 0,
      isReady: false
    }
  }
  componentDidMount(){
    this.setState({
      isReady: true
    });
  }
  render(){
    console.log(this.props.show);
     if (!this.props.show ) return null;
     let data;
     if (this.state.isReady) data = this.props.data
     else data = null;
    return (
      <div className="modal__window__backdrop">
        <div className="modal__window">
          {data}

          <div className="footer">
            <Link to='/' onClick={this.props.onClose}>Close</Link>
          </div>
        </div>
      </div>
    );
  }
}