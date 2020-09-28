import React from 'react';
import InputField from './InputFile';
import SubmitButton from './components/SubmitButton';


class ForgotPassword extends React.Component {
    
    render() {
        return (
          <div className="forgotPassword">
              Log in
              <InputField 
                type='email'
                placeholder='Email Address'
                value={this.state.username ? this.state.username: ''}
                onChange={(val) => this.setInputValue('username', val) }
              />
              <SubmitButton
                      text={'Submit'}
                      disabled={false}
                      onClick={ () => this.doLogout() }
              />
          </div>
        );
    
      }
}


export default ForgotPassword;