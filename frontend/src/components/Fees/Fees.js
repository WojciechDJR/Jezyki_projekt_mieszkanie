import React, { Component } from 'react';
import Fee from './Fee/Fee';


class Fees extends Component {

   state = {
      fees : []
   }

   componentDidMount(){
      this.setState({fees:this.props.fees})
      console.log(this.state.fees)
   }
   
    
   render() {
        const Fees = this.state.fees.map((fee,index)=>{
           return (<Fee key={fee.id} ammount={fee.ammount} reason={fee.reason} pending={fee.pending} token={this.props.token} id={fee.id} deleteNotPayed={this.props.deleteNotPayed}/>
            );
        })
       



        return (
          <div >
               {Fees}
            </div >
       );
    }

 }

 export default Fees;