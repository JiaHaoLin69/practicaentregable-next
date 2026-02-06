import { notFound } from 'next/navigation'; // Función para forzar un error 404
import Link from 'next/link';
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import FooterAddress from '@/components/Footer';

// generateStaticParams: Función de Next.js para Definir qué rutas dinámicas ([slug]) se generarán estáticamente al construir la app.
// Esto es útil para SSG (Static Site Generation).
export function generateStaticParams() {
    return [
        { slug: 'noticias' },
        { slug: 'oferta-educativa' },
        { slug: 'contacto' },
        { slug: 'fp-del-centro' },
        { slug: 'trofeo-del-director' },
    ];
}

// Componente DynamicPage: Maneja cualquier ruta que no tenga una carpeta propia (ej: /noticias, /contacto)
export default async function DynamicPage({ params }: { params: Promise<{ slug: string }> }) {
    // "slug" es el valor dinámico de la URL (ej: "noticias")
    const { slug } = await params;

    // Lista blanca de rutas que queremos manejar aquí, aunque no tengan contenido real todavía.
    const validCustomErrorRoutes = ['noticias', 'oferta-educativa', 'contacto', 'fp-del-centro', 'trofeo-del-director'];

    // Si el slug NO está en nuestra lista blanca, devolvemos un 404 estándar de Next.js
    if (!validCustomErrorRoutes.includes(slug)) {
        notFound();
    }

    // Renderizamos una página personalizada de "En Construcción" o "Sin Contenido" para las rutas válidas
    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: '#f0f2f5' }}>
            {/* Mantenemos el Header y Navbar comunes */}
            <Header />
            <Navbar />

            {/* Contenido central: Mensaje amigable de que no hay contenido */}
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
