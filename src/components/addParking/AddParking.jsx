import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import PostMethod from '../PostMethod';
import { useState } from 'react';

function AddParking() {

    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [numberOfSlot, setSlots] = useState(48);
    const [numberOfAvailableSlot, setNoSlots] = useState(0);

    const handleButtonClick = async (e) => {
        const endpoint = '/parking/save'; // Replace with your actual endpoint
        const requestData = {
            id: "1",
            name,
            address,
            numberOfSlot,
            numberOfAvailableSlot
        }; // Your data object

        try {
            e.preventDefault();
            const apiResponse = await PostMethod(endpoint, requestData);
            console.log('API Response:', apiResponse);
            window.location.href = '/admin/parkings?success=true';
            // Handle the response data as needed
        } catch (error) {
            console.error('Error making authenticated request:', error);
            // Handle the error
        }
    };

    return (
        <Container>
            <Form onSubmit={handleButtonClick}>
                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Parking Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter Parking Name" value={name} onChange={(e) => setName(e.target.value)} />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Address</Form.Label>
                            <Form.Control type="text" placeholder="Enter Address" value={address} onChange={(e) => setAddress(e.target.value)} />
                        </Form.Group>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>No. Of Slots</Form.Label>
                            <Form.Select
                            aria-label="Default select example"
                                value={numberOfSlot}
                                onChange={(e) => setSlots(parseInt(e.target.value, 10))}>
                                <option value="48">48</option>
                                <option value="36">36</option>
                            </Form.Select>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>No. Of Available Slots</Form.Label>
                            <Form.Control type="text" placeholder="Enter No. Of Available Slots" value={numberOfAvailableSlot} onChange={(e) => setNoSlots(parseInt(e.target.value))} />
                        </Form.Group>
                    </Col>
                </Row>

                <Button variant="primary" type="danger">
                    Add Parking
                </Button>
                <Button variant="caution" type="clear">
                    Clear
                </Button>
            </Form>
        </Container>
    );
}

export default AddParking;