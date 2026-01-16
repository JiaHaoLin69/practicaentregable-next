import { notFound } from 'next/navigation';
import Link from 'next/link';
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import FooterAddress from '@/components/Footer';

export function generateStaticParams() {
    return [
        { slug: 'noticias' },
        { slug: 'oferta-educativa' },
        { slug: 'contacto' },
    ];
}

export default async function DynamicPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;

    const validCustomErrorRoutes = ['noticias', 'oferta-educativa', 'contacto'];

    if (!validCustomErrorRoutes.includes(slug)) {
        notFound();
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: '#f0f2f5' }}>
            <Header />
            <Navbar />

            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '40px' }}>
                <h1 style={{ fontSize: '3rem', color: '#004d80', marginBottom: '20px' }}>404</h1>
                <h2 style={{ fontSize: '1.5rem', marginBottom: '20px', color: '#333' }}>Página no encontrada</h2>
                <p style={{ marginBottom: '30px', color: '#666' }}>
                    Estás intentando acceder a la sección: <strong>{slug}</strong>, pero no existe contenido aún.
                </p>
                <Link href="/" style={{ padding: '10px 20px', backgroundColor: '#004d80', color: 'white', borderRadius: '4px', textDecoration: 'none' }}>
                    Volver al Inicio
                </Link>
            </div>

            <FooterAddress />
        </div>
    );
}
