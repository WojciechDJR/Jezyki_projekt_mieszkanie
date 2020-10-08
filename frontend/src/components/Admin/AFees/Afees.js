import React, { Component } from 'react';
import AFee from './Afee/Afee'



class AFees extends Component {

   state = {
      fees : []
   }

   componentDidMount(){
       if(this.props.manageRoom === 1) {
           console.log('jeden')
           console.log(this.props.fees1)
           this.setState({fees:this.props.fees1})
           console.log(this.state.fees)
        }
        if(this.props.manageRoom===2){
            console.log('dwa')
            this.setState({fees:this.props.fees2})
            console.log(this.state.fees)
            console.log(this.props.fees2)
        }
   } 
   render() {
        const AFees = this.state.fees.map((fee, index) => {
            return (<AFee key={fee.id} ammount={fee.ammount} reason={fee.reason} payed={fee.payed} token={this.props.token} id={fee.id} deletePending={this.props.deletePending}/>
            );
        })
       



        return (
          <div>
               {AFees}
            </div >
       );
    }

 }

 export default AFees;