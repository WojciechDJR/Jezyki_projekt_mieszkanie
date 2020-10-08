import React, { Component } from 'react';
import axios from 'axios'
import Fees from '../Fees/Fees'
import Notice from '../Notice/Notice'


class Tenant extends Component {

    state = {
        notPayed: false,
        waitConfirm: false,
        payed: false,
        notice: true,
        arrayNotPayed: [],
        arrayPending: [],
        arrayConfirmed: [],
        token: null
    }

    componentDidMount() {
        const room = (this.props.room)
        const token = (this.props.token)
        this.setState({ token: token })
        const config = {
            headers: {
                Authorization: "BEARER " + token
            }
        }
        axios.get('http://localhost:8080/api/feeslocal/' + room, config).then(response => {

            console.log(response.data)
            const feesMount = response.data
            console.log('tutaj ze state')
            const zaplacone = [];
            const oczekujace = [];
            const niezaplacone = [];
            feesMount.forEach(function (i) {
                if (i.pending === true) {
                    niezaplacone.push(i);
                }
                if (i.payed === true) {
                    oczekujace.push(i)
                }
                if (i.verified === true) {
                    zaplacone.push(i)
                }
            });
            console.log('zaplacone')
            console.log(zaplacone)
            console.log('oczekujace')
            console.log(oczekujace)
            console.log('niezaplacone')
            console.log(niezaplacone)
            this.setState({ arrayNotPayed: niezaplacone })
            this.setState({ arrayPending: oczekujace })
            this.setState({ arrayConfirmed: zaplacone })
        })

    }
    notPayed = () => {

        const yes = true;
        const no = false;
        this.setState({ notPayed: yes });
        this.setState({ waitConfirm: no });
        this.setState({ payed: no })
        this.setState({ notice: no })
    }
    waitConfirm = () => {

        const yes = true;
        const no = false;
        this.setState({ notPayed: no });
        this.setState({ waitConfirm: yes });
        this.setState({ payed: no })
        this.setState({ notice: no })
    }
    payed = () => {

        const yes = true;
        const no = false;
        this.setState({ notPayed: no });
        this.setState({ waitConfirm: no });
        this.setState({ payed: yes })
        this.setState({ notice: no })
    }
    resetMain = () => {
        const no = false;
        this.setState({ notPayed: no });
        this.setState({ waitConfirm: no });
        this.setState({ payed: no })
        this.setState({ notice: true })
    }
    deleteNotPayed = () => {
        console.log('deleteNotPayed')
        const room = (this.props.room)
        const token = (this.props.token)
        this.setState({ token: token })
        const config = {
            headers: {
                Authorization: "BEARER " + token
            }
        }
        axios.get('http://localhost:8080/api/feeslocal/' + room, config).then(response => {

            console.log(response.data)
            const feesMount = response.data
            console.log('tutaj ze state')
            const zaplacone = [];
            const oczekujace = [];
            const niezaplacone = [];
            feesMount.forEach(function (i) {
                if (i.pending === true) {
                    niezaplacone.push(i);
                }
                if (i.payed === true) {
                    oczekujace.push(i)
                }
                if (i.verified === true) {
                    zaplacone.push(i)
                }
            });
            console.log('zaplacone')
            console.log(zaplacone)
            console.log('oczekujace')
            console.log(oczekujace)
            console.log('niezaplacone')
            console.log(niezaplacone)
            this.setState({ arrayNotPayed: niezaplacone })
            this.setState({ arrayPending: oczekujace })
            this.setState({ arrayConfirmed: zaplacone })
        })
    }

    render() {

        return (
            <div>

                <div name="tenat" className="container">
                    <div name="top" className="top  fixed top ">

                        <div class="btn-group btn-group-md flex-wrap d-flex justify-content-center">
                            <button className="btn btn-primary" onClick={this.notPayed}>Do zapłaty</button>
                            <button className="btn btn-primary" onClick={this.waitConfirm}>Oczekujące</button>
                            <button className="btn btn-primary" onClick={this.payed}>Zapłacone</button>
                            <button className="btn btn-primary" onClick={this.resetMain}>Reset</button>
                        </div>

                    </div>
                    <div name="header">
                        <h1 className="text-center">Witaj {this.props.name}</h1>
                        <h2 className="text-center">Twój pokój to: {this.props.room}</h2>
                    </div>




                    <div >
                        {this.state.notPayed === true ?
                            <div>
                                <p>Rachunki niezaplacone</p>
                                <Fees fees={this.state.arrayNotPayed} token={this.state.token} deleteNotPayed={this.deleteNotPayed} />
                            </div> : null}

                        {this.state.waitConfirm === true ?
                            <div>
                                <p>Rachunki oczekujące na akceptację</p>
                                <Fees fees={this.state.arrayPending} />
                            </div> : null}
                        {this.state.payed === true ?
                            <div>
                                <p>Rachunki zapłacone</p>
                                <Fees fees={this.state.arrayConfirmed} />
                            </div> : null}
                        {this.state.notice === true ?
                            <div>
                                <p>Informacja od właściciela: {<Notice/>}</p>
                                
                            </div> : null}
                    </div>







                </div>

            </div >
        );
    }

}

export default Tenant;