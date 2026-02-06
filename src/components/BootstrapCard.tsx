"use client"; // Directiva necesaria porque usamos componentes interactivos de React Bootstrap client-side (aunque este ejemplo sea visual)

import Card from 'react-bootstrap/Card'; // Importamos el componente Card de la librería React Bootstrap

// Componente BootstrapCard: Un ejemplo de tarjeta usando estilos de Bootstrap 5
export default function BootstrapCard() {
    return (
        // Componente Card de Bootstrap con estilos inline personalizados para ajuste fino
        <Card className="mb-3" style={{ width: '100%', border: '1px solid #ddd' }}>
            {/* Cabecera/Imagen simulada de la tarjeta */}
            <div style={{ height: '200px', backgroundColor: '#cdd0d3ff', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '1.2rem', fontWeight: 'bold' }}>
                Nextjs
            </div>
            {/* Cuerpo de la tarjeta */}
            <Card.Body>
                <Card.Title>Next.js</Card.Title>
                <Card.Text>
                    Nextjs
                </Card.Text>
            </Card.Body>
        </Card>
    );
}
