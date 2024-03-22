import React, { useState, useContext, useEffect } from 'react';
import { Button, Form, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import userContext from './context';
import { useNavigate } from 'react-router-dom';

export default function Create() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [accountNumber, setAccountNumber] = useState('');
  const { addUser } = useContext(userContext);
  const navigate = useNavigate();

  useEffect(() => {
    // Reset the balance in local storage when logging out
    return () => {
      localStorage.removeItem(`${email}-balance`);
    };
  }, [email]);

  function handleInputChange(e, setter) {
    setter(e.target.value);
  }

  // Function to generate a random 8-digit account number
  function generateAccountNumber() {
    let lastAccountNumber = 14571233;
    lastAccountNumber++;
    const firstFourDigits = Math.floor(1000 + Math.random() * 9000);
    return `${firstFourDigits}${lastAccountNumber.toString().slice(-4)}`;
  }

  function submitHandler(e) {
    e.preventDefault();
    if (!loggedIn) {
      if (name !== '' && email !== '' && password.length >= 8) {
        const newUser = {
          name: name,
          email: email,
          password: password,
          amount: 0, // Initialize balance to zero
          accountNumber: generateAccountNumber() // Generate account number
        };
        addUser(newUser);
        alert("Account created successfully!!!!");
        setName('');
        setEmail('');
        setPassword('');
        setLoggedIn(true);
        // Redirect to the login page and pass email and password as props
        navigate('/login', { state: { email: email, password: password } });
      } else {
        if (name === '' && email === '') {
          alert("Please enter your name and email");
        } else if (name === '') {
          alert("Please enter your name");
        } else if (email === '') {
          alert("Please enter your email");
        } else if (password.length < 8) {
          alert("Password must have at least 8 characters");
        }
      }
    }
  }

  return (
    <>
      {!loggedIn && ( // Render the form only if not logged in
        <Card style={{ border: "none" }}>
          <div id='form-div'>
            <Form className="form-inline" onSubmit={submitHandler}>
              <h1>Create Account</h1>
              <Form.Group className="mb-3">
                <Form.Control type="text" placeholder="Enter name" onChange={(e) => handleInputChange(e, setName)} value={name} />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control type="email" placeholder="Enter email" onChange={(e) => handleInputChange(e, setEmail)} value={email} autoComplete="off" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control type="password" placeholder="Password" onChange={(e) => handleInputChange(e, setPassword)} value={password} />
              </Form.Group>
              <Button type='submit' className='create-btn' style={{ backgroundColor: '#9d75cf', color: 'white', borderColor: '#9d75cf' }}>Create Account</Button>
              {accountNumber && (
                <p>Generated Account Number: {accountNumber}</p>
              )}
            </Form>
          </div>
        </Card>
      )}
    </>
  );
}
