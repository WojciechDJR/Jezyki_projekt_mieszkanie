import React, { Component } from 'react';


class NewFee extends Component {

    
  
    
   render() {
        return (
          <div>
              <p>wprowadz powód :</p>
              <input  type="text" id="reason" />
              <p>wprowadz kwote :</p>
              <input type="number" id="ammount"/>
              <button onClick={()=>{this.props.sendFee();this.props.deletePending();}}> Prześlij</button>
            </div >
       );
    }

 } 

 export default NewFee;

