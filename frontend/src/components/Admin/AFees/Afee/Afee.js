import React, { Component } from 'react';
import axios from 'axios'



class Fee extends Component {


    state = {
        deleted: false
    }
    markAsPayed = () => {
        console.log('markAs')
        const config = {
            headers: {
                Authorization: "BEARER " + this.props.token
            }
        }
        const pushdata = {
            "payed": false,
            "verified": true
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
            <div>
                {this.state.deleted === false ?
                    <div>
                        <p>Rachuneczek {this.props.reason}</p>
                        <p>O tyle do zapłaty {this.props.ammount}</p>
                        {this.props.payed === true ? 
                        <div>
                            <button onClick={()=>{this.props.deletePending();this.markAsPayed();}}>Potwierdzony!</button></div> :
                            null}
                    </div>:null}
            </div>

        );
    }
}
export default Fee