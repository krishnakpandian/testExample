import React, {Component} from 'react';
import './ClassExample.css';

export default class ClassExample extends Component {
    constructor(props){
      super(props);
    }
    state = {
        data: null
    }
  
    async componentDidMount(){
        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        const url = "https://randomuser.me/api/";
        await fetch(proxyurl + url).then( response => this.setState({data: response.json() }))
        console.log(this.state.data)
    }
    render () {
    return (
      <>
        <div class="class-container">
            This is the class container
            {this.props.value}
        </div>
      </>
    );
    }
  }
  