import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Rate } from 'antd';
import { useState } from 'react';

function Forms() {
    const [value, setValue] = useState(1);
    const [value1, setValue1] = useState(1);
    const [value2, setValue2] = useState(1);
    const [value3, setValue3] = useState(1);
    const [value4, setValue4] = useState(1);
    const [value5, setValue5] = useState(1);
    function getVal(){
        console.log(value);
        console.log(value1);
        console.log(value2);
        console.log(value3);
        console.log(value4);
        console.log(value5);
    }
    return (
        <div className=" shadow-lg p-3 mb-5 bg-body rounded" style={{ width: "70%", margin: "0 auto", marginTop: "5rem", marginBottom: "5rem" }}>
            <Form >
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Full Name" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Phone</Form.Label>
                        <Form.Control type="number" placeholder="Phone Number" />
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3" controlId="formGridAddress1">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridAddress2">
                    <Form.Label>Sales Number</Form.Label>
                    <Form.Control type="number" placeholder="Enter Sales Number of your receipt" />
                </Form.Group>

                <div>
                <Row className="mb-3 mt-3">
                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>How would you rate your experience at Theek Kar Dengey?</Form.Label><br />
                        <Rate value={value5}
                            onChange={newValue => setValue5(newValue)} style={{ color: "#fb5112" }} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>The store communicated expectations about my device.</Form.Label><br />
                        <Rate value={value4}
                            onChange={newValue => setValue4(newValue)} style={{ color: "#fb5112" }} />
                    </Form.Group>

                </Row>
                <Row className="mb-3 mt-3">
                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>My device functions are good after my repair.</Form.Label><br />
                        <Rate value={value3}
                            onChange={newValue => setValue3(newValue)} style={{ color: "#fb5112" }} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>How likely are you to refer a friend or family member to Phixman?</Form.Label><br />
                        <Rate value={value2}
                            onChange={newValue => setValue2(newValue)} style={{ color: "#fb5112" }} />
                    </Form.Group>

                </Row>
                <Row>
                <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>Over all rating for our Store this will be helpful for us.</Form.Label><br />
                        <Rate value={value}
                            onChange={newValue => setValue(newValue)} style={{ color: "#fb5112" }}/>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>The store staff was courteous and helpful throughout my repair process.</Form.Label><br />
                        <Rate value={value1}
                            onChange={newValue => setValue1(newValue)} style={{ color: "#fb5112" }} />
                    </Form.Group>
                </Row>
                </div>

                <Button style={{backgroundColor:"#fb5112" , border:"none"}} onClick={getVal} variant="primary">
                    Submit
                </Button>
            </Form>
        </div>
    );
}

export default Forms;