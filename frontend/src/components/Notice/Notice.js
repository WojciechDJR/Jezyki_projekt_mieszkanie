import React, { Component } from 'react';
import axios from 'axios'


class Notice extends Component {

    state ={
        notice: null
    }
  

   componentDidMount(){
      if (this.state.notice === null){
         console.log('pobranienotatki')
    axios.get('http://localhost:8080/api/notices/1').then(response => {
        //this.setState({notice: response.notice})
        console.log(response.data.notice)
        this.setState({notice:response.data.notice})
   });}
}
   
    
   render() {
        return (
          <div>
               <p>{this.state.notice}</p>
            </div >
       );
    }

 } 

 export default Notice;