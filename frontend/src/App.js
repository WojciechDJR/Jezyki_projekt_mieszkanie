import React, { Component } from 'react';
import axios from 'axios'
import Tenant from './components/Tenant/Tenant'
import Admin from './components/Admin/Admin'
import './styles/bootstrap/bootstrap.min.css'
import './styles/images/background/background.css'

class App extends Component {

  state = {
    login: null,
    name: null,
    surname: null,
    room: null,
    logged: false,
    token: null
  }
  //  handlers





  // logowanie
  loginUser = () => {
    const config = {
      headers: { 'content-type': 'application/json' }
    }



    console.log("console_log_login_admin");
    const login = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    console.log(login);
    console.log(password);
    this.setState({ login: login })
    const logindata = {
      "username": login,
      "password": password
    }
    axios.post('http://localhost:8080/api/login_check', logindata, config).then(response => {
      if (response.status === 200) {
        console.log("recived_token")
        console.log(response.data.token)
        const ResponseToken = response.data.token;
        this.setState({ token: ResponseToken })
        console.log("state_token")
        console.log(this.state.token)
        console.log(this.state.login)
        //pobranie danych
        const tokendata = this.state.token;
        const logindata = this.state.login;

        const config = {
          headers: {
            Authorization: "BEARER " + tokendata
          }
        }
        axios.get('http://localhost:8080/api/account/' + logindata, config).then(response => {

          console.log(response.data)
          const getName = response.data[0].Name;
          this.setState({ name: getName });
          console.log(this.state.name);
          const getSurname = response.data[0].Surname;
          this.setState({ surname: getSurname });
          console.log(this.state.surname);
          const getLocalNumber = response.data[0].LocalNumber;
          this.setState({ room: getLocalNumber });
          console.log(this.state.room);

        }
        )


      }
    });

  }
  render() {
    return (
      <div>
        <div className="bg image-fluid">

          {this.state.room === null ?

            <div name="main_container" className="container contain">
              
                <h2 className="text-center">Witaj w systemie organizacji płatności</h2>
                <h1 className="text-center">Strzelnicza No. 1</h1>
                <br>
                </br>
                <div name="ramka_formularz" className="row align-items-center ">
                  <div name="formularz_lewa" className="col-md-3"></div>
                  <div name="formularz" className="col-md-6 form-group">
                    <div name='logowanie_header' className="form-group">
                      <h5 className="text-center">Wprowadź swoje dane logowania</h5>
                    </div>
                    <div name="logowanie_login" className="form-group row">
                      <label for="Username" className="col-md-2 col-form-label">Login:</label>
                      <div className="col-md-10">
                        <input placeholder="Username" type="text" id="username" className="form-control" />
                      </div>
                    </div>
                    <div name="logowanie_password" className="form-group row">
                      <label for="Password" className="col-md-2 col-form-label ">Hasło:</label>
                      <div className="col-md-10">
                        <input placeholder="Password" type="password" id="password" className="form-control" />
                      </div>
                    </div>
                    <div name="logowanie_button">
                      <button className="btn btn-primary btn-lg btn-block" onClick={this.loginUser}>Zaloguj </button>
                    </div>
                  </div>
                  <div name="formularz_prawa" className="col-md-3"></div>
                </div>

              



            </div>
            :
            //zalogowanie
            <div name="main_container" className="container contain">
              {this.state.room === 0 ?
                <div>
                  <Admin token={this.state.token} />
                </div> :
                <div>
                  <Tenant name={this.state.name} room={this.state.room} token={this.state.token} />
                </div>
              }
            </div>
          }
        </div>
      </div>



    );
  }
}
export default App;
