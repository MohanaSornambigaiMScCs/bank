import { useState } from 'react';
import { Button, Form, Card } from 'react-bootstrap';

export default function Deposit({ total, setTotal }) {
    const [deposit, setDeposit] = useState();

    function changeHandler(val) {
        setDeposit(val);
    }

    function submitHandler(e) {
        e.preventDefault();

        if (isNaN(deposit) || deposit <= 0) {
            alert("Please enter a valid amount.");
        } else {
            const updatedTotal = total + deposit;
            setTotal(updatedTotal);
            setDeposit();
            alert(`Amount ${deposit} deposited successfully!`);
        }
    }

    return (
        <div id='form-div'>
            <>
                <h3>Account Balance: {total}</h3>
                <Card>
                    <Form className="form-inline" onSubmit={submitHandler}>
                        <h1>Deposit</h1>
                        <Form.Group className="mb-3">
                            <Form.Control
                                type="number"
                                placeholder="Enter amount"
                                value={deposit}
                                onChange={(e) => changeHandler(Number(e.target.value))}
                            />
                        </Form.Group>
                        <Button
                            type='submit'
                            className={`create-btn ${deposit === undefined || isNaN(deposit) || deposit <= 0 ? 'disabled' : ''}`}
                            style={{ backgroundColor: '#9d75cf', color: 'white', borderColor: '#9d75cf' }}
                        >
                            Deposit
                        </Button>
                    </Form>
                </Card>
            </>
        </div>
    );
}
