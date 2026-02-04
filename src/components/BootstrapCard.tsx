"use client";

import Card from 'react-bootstrap/Card';


export default function BootstrapCard() {
    return (
        <Card className="mb-3" style={{ width: '100%', border: '1px solid #ddd' }}>
            <div style={{ height: '200px', backgroundColor: '#cdd0d3ff', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '1.2rem', fontWeight: 'bold' }}>
                Nextjs
            </div>
            <Card.Body>
                <Card.Title>Next.js</Card.Title>
                <Card.Text>
                    Nextjs
                </Card.Text>
            </Card.Body>
        </Card>
    );
}
