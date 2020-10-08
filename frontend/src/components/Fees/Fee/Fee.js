import React, { Component } from 'react';
import axios from 'axios'
import '../../../styles/images/background/background.css'


class Fee extends Component {


    state = {
        deleted: false
    }
    markAsPayed = () => {
        console.log('markAsPayed')
        const config = {
            headers: {
                Authorization: "BEARER " + this.props.token
            }
        }
        const pushdata = {
            "pending": false,
            "payed": true
        }
        axios.put('http://localhost:8080/api/fees/' + this.props.id, pushdata, config).then(response => {
            if (response.status === 200) {
                console.log('powinno zmienic o tego')
                console.log(this.props.id)
                this.setState({ deleted: true })


            }
        }
        )
    }


    render() {
        return (
            <div >
                {this.state.deleted === false ?
                    <div className="row bg-secondary text-white d-flex rounded ">
                        <div className="col-md-5">
                            <p >Treść rachunku: {this.props.reason}</p>
                            
                        </div>
                        <div className="col-md-4">
                            
                            <p>Kwota: {this.props.ammount} </p>
                        </div>
                        {this.props.pending === true ?
                        <div className="col-md-3">
                            <button  className="btn btn-outline-danger"onClick={()=>{this.markAsPayed();this.props.deleteNotPayed();}}>Rachunek został opłacony</button>
                        </div>:null}
                    </div>: null}    
                        <br></br>
            </div>

        );
    }
}
export default Fee

{/* <div className="d-block bg-secondary rounded flex-wrap text-white ">
                {this.state.deleted === false ?
                    <div>
                        <p className="mx-md-10">Treść rachunku : {this.props.reason}<br></br> Kwota do zapłaty : {this.props.ammount} złotych.  {this.props.pending === true ? 
                        <div>
                            <button  className="btn btn-outline-danger"onClick={()=>{this.markAsPayed();this.props.deleteNotPayed();}}>Rachunek został opłacony</button></div> :
                            null}</p>
                        
                    </div>:null}
            </div> */}