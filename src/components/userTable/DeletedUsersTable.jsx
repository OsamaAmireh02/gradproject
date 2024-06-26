import React, { useState, useEffect } from 'react';
import makeAuthenticatedRequest from './Api';
import { Table } from 'react-bootstrap';
import axios from 'axios';

function DeletedUserTable() {

    const [responseData, setResponseData] = useState([]);

    const fetchData = async () => {
        try {
            const response = await makeAuthenticatedRequest('/user/getDeletedUsers');
            setResponseData(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const api = axios.create({
        baseURL: 'http://localhost:8080',
    });

    useEffect(() => {
        fetchData();
    }, []);



    return (
        <>
            <Table striped variant='dark' className='table-hover'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Phone Number</th>
                        <th>faculty</th>
                        <th>Role</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {responseData.map(user => <><tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.firstName}</td>
                        <td>{user.lastName}</td>
                        <td>{user.email}</td>
                        <td>{user.phoneNumber}</td>
                        <td>{user.faculty}</td>
                        <td>{user.userRole}</td>
                        <td>INACTIVE</td>
                    </tr>
                    </>
                    )}
                </tbody>
            </Table>
        </>
    );
}

export default DeletedUserTable;
