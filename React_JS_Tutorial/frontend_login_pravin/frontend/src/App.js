import React from 'react';
import { observer } from 'mobx-react';
import LoginForm from './components/LoginForm';
import SubmitButton from './components/SubmitButton';
import UserStore from './stores/UserStore';
import BasketballLogo from './images/basketball.png';
import './App.css';


class App extends React.Component {
  
  async componentDidMount() {
    try {
        let res = await fetch('isLoggedIn', {
          method: 'post',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        });

        let result = await res.json();

        if (result && result.success) {
          UserStore.loading = false;
          UserStore.isLoggedIn = true;
          UserStore.username = result.username;
        }
        else {
          UserStore.loading = false;
          UserStore.isLoggedIn = false;
        }
    }

    catch(e){
        UserStore.loading = false;
        UserStore.isLoggedIn = false;
    }
  }

  async doLogout() {
    try {
        let res = await fetch('/logout', {
          method: 'post',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        });

        let result = await res.json();

        if (result && result.success) {
          UserStore.isLoggedIn = false;
          UserStore.username = ''; // resetting username that is stored 
        }
    }

    catch(e){
        console.log(e);
    }
  }


  render() {

    if (UserStore.loading){
      return(
            <div className="app">
                <div className="container">
                    Loading, please wait..
                </div>
            </div>
      );
    }

    else {
      
      if (UserStore.isLoggedIn) {

        return(
          <div className="app">
              <div className="container">
                  Welcome {UserStore.username}
                  
                  <SubmitButton
                      text={'Log out'}
                      disabled={false}
                      onClick={ () => this.doLogout() }
                  />
              </div>
          </div>
    );

      }
      
     
    }
    return (
          <div className="app">
              <div className="container">
                  <div className="container2">
                      <div className="logoContainer">
                        <img className="BasketballLogo" src={BasketballLogo} alt="First Dash Logo"/>
                      </div>
                      <div className="container3">
                        <LoginForm/>
                      </div>
                  </div>
              </div>
          </div>
    );

  }
}

export default observer(App);
