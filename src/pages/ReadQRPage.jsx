import React from 'react'
import ReadQR from '../components/readqr/ReadQR'
import NavBar from '../components/navbar/NavBar'
import Footer from '../components/footer/Footer'
import { Container } from 'react-bootstrap'

function ReadQRPage() {
    return (
        <div>
            <NavBar />
            <Container style={{
            'position': 'sticky',
            'top': '1000px',
            'minHeight': '75vh'
        }}>
            <ReadQR />
            </Container>
            <Footer />
        </div>
    )
}

export default ReadQRPage
