import 'bootstrap/dist/css/bootstrap.min.css'; // Importación GLOBAL de Bootstrap para que funcione en toda la app
import type { Metadata } from "next"; // Tipo para definir metadatos SEO
import { Geist, Geist_Mono } from "next/font/google"; // Fuentes optimizadas de Google a través de Next.js
import "./globals.css"; // Estilos globales (reset, variables CSS, etc.)

// Configuración de la fuente Geist Sans
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

// Configuración de la fuente Geist Mono
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Metadatos de la aplicación (título que aparece en la pestaña del navegador, descripción para Google, etc.)
export const metadata: Metadata = {
  title: "IES Cura Valera",
  description: "Sitio recreado con Next.js",
};

// RootLayout: El componente raíz que envuelve a TODAS las páginas de la aplicación.
// Aquí se define el <html> y el <body> comunes.
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* Aplicamos las clases de las fuentes a todo el body */}
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children} {/* Aquí se renderiza el contenido de cada página (page.tsx) */}
      </body>
    </html>
  );
}
