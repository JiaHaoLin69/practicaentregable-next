import Image from 'next/image';
import facebook from '../../public/facebook.png';
import youtube from '../../public/ytb.png';
import instagram from '../../public/instagram.jpg';

interface LogoProps {
    className?: string;
    size?: number;
}

export default function Logo({ className = '', size = 36 }: LogoProps) {
    const s = size;

    return (
        <div className={className} style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <Image src={facebook} alt="Facebook" width={s} height={s} />
            </a>

            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Image src={instagram} alt="Instagram" width={s} height={s} />
            </a>

            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <Image src={youtube} alt="YouTube" width={s} height={s} />
            </a>
        </div>
    );
}