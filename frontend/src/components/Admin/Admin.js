import React, { Component } from 'react';
import axios from 'axios'
import News from './News/News'
import AFees from './AFees/Afees';
import NewFee from './NewFee/NewFee'



class Admin extends Component {

    state = {
    
        manageRoom: 1,
        mainMenu:true,
        notPayed: false,
        waitConfirm: false,
        payed: false,
        newFee:false,
        editNews:false,
        arrayNotPayed1: [],
        arrayPending1: [],
        arrayConfirmed1: [], 
        arrayNotPayed2: [],
        arrayPending2: [],
        arrayConfirmed2: [],
        news:null,
        token: null

    }
    componentDidMount() {
        const token = (this.props.token)
        this.setState({ token: token })
        const config = {
            headers: {
                Authorization: "BEARER " + token
            }
        }
        axios.get('http://localhost:8080/api/feeslocal/1', config).then(response => {

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
            })
            this.setState({arrayNotPayed1:niezaplacone})
            this.setState({arrayPending1: oczekujace})
            this.setState({arrayConfirmed1:zaplacone})
            console.log(this.state.arrayNotPayed1);
            console.log(this.state.arrayPending1);
            console.log(this.state.arrayConfirmed1);

        })
        axios.get('http://localhost:8080/api/feeslocal/2', config).then(response => {

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
            })
            this.setState({arrayNotPayed2:niezaplacone})
            this.setState({arrayPending2: oczekujace})
            this.setState({arrayConfirmed2:zaplacone})

        })
        axios.get('http://localhost:8080/api/notices/1').then(response => {
        //this.setState({notice: response.notice})
        console.log(response.data.notice)
        this.setState({news:response.data.notice})
   });
    }
    roomchange= ()=> {
        const no = false;
        const yes = true;
        this.setState({ notPayed: no });
        this.setState({ waitConfirm: no });
        this.setState({ payed: no })
        this.setState({newFee:no});
        this.setState({editNews:no});
        this.setState({mainMenu:yes})
        const changeRoom = this.state.manageRoom
        changeRoom === 1 ? 
            this.setState({manageRoom :2}):
            this.setState({manageRoom: 1})
        

    }
    
    notPayed = () => {

        const yes = true;
        const no = false;
        this.setState({ notPayed: yes });
        this.setState({ waitConfirm: no });
        this.setState({ payed: no });
        this.setState({newFee:no});
        this.setState({editNews:no});
        this.setState({mainMenu:no})
        
    }
    waitConfirm = () => {

        const yes = true;
        const no = false;
        this.setState({ notPayed: no });
        this.setState({ waitConfirm: yes });
        this.setState({ payed: no })
        this.setState({newFee:no});
        this.setState({editNews:no});
        this.setState({mainMenu:no})
        
    }
    payed = () => {

        const yes = true;
        const no = false;
        this.setState({ notPayed: no });
        this.setState({ waitConfirm: no });
        this.setState({ payed: yes })
        this.setState({newFee:no});
        this.setState({editNews:no});
        this.setState({mainMenu:no})
    }
    resetMain = () => {
        const no = false;
        const yes = true;
        this.setState({ notPayed: no });
        this.setState({ waitConfirm: no });
        this.setState({ payed: no })
        this.setState({newFee:no});
        this.setState({editNews:no});
        this.setState({mainMenu:yes})
    }
    editNews = () => {
        const no = false;
        const yes = true;
        this.setState({ notPayed: no });
        this.setState({ waitConfirm: no });
        this.setState({ payed: no })
        this.setState({newFee:no});
        this.setState({editNews:yes});
        this.setState({mainMenu:no})
    }
    newFee = () => {
        const no = false;
        const yes = true;
        this.setState({ notPayed: no });
        this.setState({ waitConfirm: no });
        this.setState({ payed: no })
        this.setState({newFee:yes});
        this.setState({editNews:no});
        this.setState({mainMenu:no})
    }
    sendNote=()=>{
        const notatka = document.getElementById("notatka").value;
        const noteToSend = {
            "notice": notatka
          }
          axios.put('http://localhost:8080/api/notices/1', noteToSend).then(response => {
            if (response.status === 200) {
                console.log('odpalilo');
                this.setState({news:notatka})
            }})
       }
       sendFee=()=>{
        const config = {
            headers: {
                Authorization: "BEARER " + this.state.token
            }}
        const reason = document.getElementById("reason").value;
        const ammount = parseInt(document.getElementById("ammount").value,10)
        
        const feeToSend = {
            "localNumber": this.state.manageRoom,
            "ammount": ammount,
            "reason": reason,
            "pending": true,
            "payed": false,
            "verified": false
          }
          axios.post('http://localhost:8080/api/fees', feeToSend,config).then(response => {
            if (response.status === 200) {
                console.log('odpalilo');
            }})
       }
       
    deletePending=()=>{
        console.log('odpalilo')
        const token = (this.props.token)
        this.setState({ token: token })
        const config = {
            headers: {
                Authorization: "BEARER " + token
            }
        }
        axios.get('http://localhost:8080/api/feeslocal/1', config).then(response => {

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
            })
            this.setState({arrayNotPayed1:niezaplacone})
            this.setState({arrayPending1: oczekujace})
            this.setState({arrayConfirmed1:zaplacone})
            console.log(this.state.arrayNotPayed1);
            console.log(this.state.arrayPending1);
            console.log(this.state.arrayConfirmed1);

        })
        axios.get('http://localhost:8080/api/feeslocal/2', config).then(response => {

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
            })
            this.setState({arrayNotPayed2:niezaplacone})
            this.setState({arrayPending2: oczekujace})
            this.setState({arrayConfirmed2:zaplacone})

        })
    }   


    render() {

        return (
            <div>
                <div>
                    <button onClick={this.roomchange}>aktywny pokój to : {this.state.manageRoom}</button>
                    <button onClick={this.notPayed}>Wysłane do najemców</button>
                    <button onClick={this.waitConfirm}>Do akceptacji</button>
                    <button onClick={this.payed}>Opłacone</button>
                    <button onClick={this.resetMain}>Reset</button>
                    <button onClick={this.newFee}>Nowy rachunek</button>
                    <button onClick={this.editNews}>Edytuj informacje</button>
                    {this.state.mainMenu===true?
                    <div><p>Witaj adminie! </p></div>:null}
                    {this.state.notPayed === true ?
                    <div><AFees fees1={this.state.arrayNotPayed1} fees2={this.state.arrayNotPayed2} manageRoom={this.state.manageRoom}/></div> :null}
                    {this.state.waitConfirm === true ?
                    <div><AFees fees1={this.state.arrayPending1} fees2={this.state.arrayPending2} manageRoom={this.state.manageRoom} deletePending={this.deletePending} token={this.state.token}/></div> :null}
                    {this.state.payed === true ?
                    <div><AFees fees1={this.state.arrayConfirmed1} fees2={this.state.arrayConfirmed2} manageRoom={this.state.manageRoom}/></div> :null}
                    {this.state.newFee === true ?
                    <div><NewFee sendFee={this.sendFee} deletePending={this.deletePending}/> </div> :null}
                    {this.state.editNews=== true ?
                    <div><News sendNote={this.sendNote} news={this.state.news}/></div>: null}
                    
                </div>
            </div>
        );

    }
}


    export default Admin;