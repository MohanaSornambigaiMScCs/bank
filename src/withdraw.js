import { useState } from 'react';
import { Button, Form, Card } from 'react-bootstrap';

export default function Withdraw({ total, setTotal }) {
    const [withdraw, setWithdraw] = useState();

    function changeHandler(val) {
        setWithdraw(val);
    }

    function submitHandler(e) {
        e.preventDefault();

        if (isNaN(withdraw) || withdraw <= 0) {
            alert("Please enter a valid amount.");
        } else if (withdraw > total) {
            alert("Insufficient account balance!");
        } else {
            const updatedTotal = total - withdraw;
            setTotal(updatedTotal);
            setWithdraw();
            alert(`Amount ${withdraw} withdrawn successfully!`);
        }
    }

    return (
        <div id='form-div'>
            <>
                <h3>Account Balance: {total}</h3>
                <Card>
                    <Form className="form-inline" onSubmit={submitHandler}>
                        <h1>Withdraw</h1>
                        <Form.Group className="mb-3">
                            <Form.Control
                                type="number"
                                placeholder="Enter amount"
                                value={withdraw}
                                onChange={(e) => changeHandler(Number(e.target.value))}
                            />
                        </Form.Group>
                        <Button
                            type='submit'
                            className={`create-btn ${withdraw === undefined || isNaN(withdraw) || withdraw <= 0 ? 'disabled' : ''}`}
                            style={{ backgroundColor: '#9d75cf', color: 'white', borderColor: '#9d75cf' }}
                        >
                            Withdraw
                        </Button>
                    </Form>
                </Card>
            </>
        </div>
    );
}
