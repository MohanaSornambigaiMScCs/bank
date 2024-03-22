import React, { useState, useContext } from 'react';
import { Button, Form, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import userContext from './context';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { users, setLoggedIn, setCurrentUser } = useContext(userContext);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Check if the entered credentials match admin credentials
    const adminCredentials = {
      email: 'admin@example.com',
      password: 'admin123'
    };
    if (email === adminCredentials.email && password === adminCredentials.password) {
      setLoggedIn(true);
      if (setCurrentUser) {
        setCurrentUser({ name: 'Admin', email: adminCredentials.email }); // Set current user as admin
      }
      alert('Admin login successful!');
      navigate('/home');
      return;
    }

    // Check if the entered credentials match any other user's credentials
    const user = users.find(user => user.email === email && user.password === password);
    if (user) {
      // Retrieve balance from local storage if it exists
      const storedBalance = localStorage.getItem(`${user.email}-balance`);
      const balance = storedBalance ? parseFloat(storedBalance) : user.amount;

      setLoggedIn(true);
      if (setCurrentUser) {
        setCurrentUser(user); // Set current user
      }
      user.amount = balance; // Update user's balance
      alert('Login successful!');
      navigate('/home');
    } else {
      alert('Invalid email or password');
    }
  };

  return (
    <Card style={{ border: "none" }}>
      <div id='form-div'>
        <Form className="form-inline" onSubmit={handleLogin}>
          <h1>Log In</h1>
          <Form.Group className="mb-3">
            <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} value={email} autoComplete="off" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password} />
          </Form.Group>
          <div className='create-btn-parent'>
            <Button type='submit' className='create-btn' style={{ backgroundColor: '#9d75cf', color: 'white', borderColor: '#9d75cf' }}>Log In</Button>
          </div>
        </Form>
      </div>
    </Card>
  );
}
