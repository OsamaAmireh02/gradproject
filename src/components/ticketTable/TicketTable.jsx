import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import makeAuthenticatedRequest from '../userTable/Api';
import { Col, Dropdown, Row } from 'react-bootstrap';
import axios from 'axios';


function TicketTable() {

  const ShowActive = async () => {
    try {
      const url = 'http://localhost:8080/ticket/getActiveTickets';
      const token = localStorage.getItem('token');

      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      };

      const response = await axios.get(url, config);
      setResponseData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  const ShowPending = async () => {
    try {
      const url = 'http://localhost:8080/ticket/getPendingTickets';
      const token = localStorage.getItem('token');

      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      };

      const response = await axios.get(url, config);
      setResponseData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  const ShowFinished = async () => {
    try {
      const url = 'http://localhost:8080/ticket/getFinishedTickets';
      const token = localStorage.getItem('token');

      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      };

      const response = await axios.get(url, config);
      setResponseData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  const SortByDate = async () => {
    try {
      const url = 'http://localhost:8080/ticket/getByDate';
      const token = localStorage.getItem('token');

      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      };

      const response = await axios.get(url, config);
      setResponseData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };



  const SortByUserName = async () => {
    try {
      const url = 'http://localhost:8080/ticket/getByStudentName';
      const token = localStorage.getItem('token');

      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      };

      const response = await axios.get(url, config);
      setResponseData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const SortByParkingName = async () => {
    try {
      const url = 'http://localhost:8080/ticket/getByParkingName';
      const token = localStorage.getItem('token');

      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      };

      const response = await axios.get(url, config);
      setResponseData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  const [responseData, setResponseData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await makeAuthenticatedRequest('/ticket/all');
      setResponseData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);


  return (
    <>
      <Row>
        <Col lg={1} className='mb-2'>
          <Dropdown>
            <Dropdown.Toggle variant="warning" id="dropdown-basic">
              Sorting
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item onClick={SortByParkingName}>Sort By Parking Name</Dropdown.Item>
              <Dropdown.Item onClick={SortByUserName}>Sort By Student Name</Dropdown.Item>
              <Dropdown.Item onClick={SortByDate}>Sort By Date</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
        <Col>
          <Dropdown>
            <Dropdown.Toggle variant="warning" id="dropdown-basic">
              Filtering
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item onClick={ShowActive}>Show Active Tickets</Dropdown.Item>
              <Dropdown.Item onClick={ShowPending}>Show Pending Tickets</Dropdown.Item>
              <Dropdown.Item onClick={ShowFinished}>Show Finished Tickets</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
      </Row>

      <div style={{ overflowX: 'auto' }}>
        <Table striped variant='dark' className='my-3 table-hover' >
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Parking Name</th>
              <th>Date</th>
              <th>Starting Time</th>
              <th>Slot Number</th>
              <th>Car Model</th>
              <th>Car Color</th>
              <th>Car Plate Number</th>
              <th>Ticket Status</th>
              <th>Added Time</th>
            </tr>
          </thead>
          <tbody>
            {responseData.map(ticket => <tr key={ticket.ticketId}>
              <td>{ticket.firstName}</td>
              <td>{ticket.lastName}</td>
              <td>{ticket.parkingName}</td>
              <td>{ticket.date}</td>
              <td>{ticket.fromTime}</td>
              <td>{ticket.slotNumber}</td>
              <td>{ticket.carModel}</td>
              <td>{ticket.carColor}</td>
              <td>{ticket.carPlateNumber}</td>
              <td>{ticket.ticketStatus}</td>
              <td>{ticket.addedTime}</td>
            </tr>)}
          </tbody>
        </Table>
      </div>
    </>
  );
}

export default TicketTable;