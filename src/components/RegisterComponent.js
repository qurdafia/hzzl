import '../App.css';
import { useState } from 'react';
import { InputComponent } from './InputComponent';
import { RegisterMessage } from './RegisterMessageComponent';

export const RegisterComponent = (props) => {

  const [ fName, setFname ] = useState('');
  const [ lName, setLname ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ confirmPw, setConfirmPw ] = useState('');

  const setFnameHandler = (event) => {
    setFname(event.target.value);
  }

  const setLnameHandler = (event) => {
    setLname(event.target.value);
  }

  const setEmailHandler = (event) => {
    setEmail(event.target.value);
  }

  const setPasswordlHandler = (event) => {
    setPassword(event.target.value);
  }

  const setConfirmPwHandler = (event) => {
    setConfirmPw(event.target.value);
  }

  const formSubmitHandler = (event) => {
    alert('You are registered, ' + fName + '! Thank you!');
    event.preventDefault();
  }

  return (
    <div className="Register">
      <RegisterMessage 
        fName={fName}
        lName={lName}
        email={email}
        password={password}
        confirmPw={confirmPw}
      />
      <form onSubmit={formSubmitHandler}>
        <InputComponent 
          type="text"
          name="first-name"
          placeholder="Enter First Name"
          onChange={setFnameHandler}
          value={fName}
          required={true}
        />
        <hr className="Divider" />
        <InputComponent 
          type="text"
          name="last-name"
          placeholder="Enter Last Name"
          onChange={setLnameHandler}
          value={lName}
          required={true}
        />
        <hr className="Divider" />
        <InputComponent 
          type="email"
          name="email"
          placeholder="Enter Email"
          onChange={setEmailHandler}
          value={email}
          required={true}
        />
        <hr className="Divider" />
        <InputComponent 
          type="password"
          name="password"
          placeholder="Enter Password"
          onChange={setPasswordlHandler}
          value={password}
          required={true}
        />
        <hr className="Divider" />
        <InputComponent 
          type="password"
          name="password2"
          placeholder="Confirm Password"
          onChange={setConfirmPwHandler}
          value={confirmPw}
          required={true}
        />
        <hr className="Divider" />
        <InputComponent 
          type="submit"
          name="submit"
          value="Register"
        />
      </form>
      
    </div>
  );
}
