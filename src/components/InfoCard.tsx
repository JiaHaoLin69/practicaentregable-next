"use client";

import React from 'react';
import Image from 'next/image';
import styles from './InfoCard.module.css';
import { MyVerticallyCenteredModal } from './modal';

interface InfoCardProps {
    title: string;         
    subtitle?: string;     
    description?: string;  
    imageText?: string;    
    imageSrc?: string;     
    className?: string;    
    icon?: React.ReactNode; 
}

export default function InfoCard({ title, subtitle, description, imageText, imageSrc, className, icon }: InfoCardProps) {
    const [showModal, setShowModal] = React.useState(false);

    return (
        <>
            <div className={`${styles.card} ${className || ''}`} onClick={() => setShowModal(true)} role="button" tabIndex={0} onKeyDown={() => setShowModal(true)} style={{ cursor: 'pointer' }}>
               <div className={styles.imagePlaceholder}>
                    {imageSrc ? (
                        <Image
                            src={imageSrc}
                            alt={title}
                            fill
                            className={styles.cardImage}
                            style={{ objectFit: 'cover' }} 
                        />
                    ) : (
                        <span>{imageText || 'Image'}</span>
                    )}
                </div>


                <div className={styles.content}>
                    <h2 className={styles.title}>
                        {title}
                        {icon && <span className={styles.iconWrapper}>{icon}</span>}
                    </h2>
                    {subtitle && <h3 className={styles.subtitle}>{subtitle}</h3>}
                    {description && <p className={styles.description}>{description}</p>}
                </div>
            </div>

            <button className={styles.modalButton} onClick={() => setShowModal(true)}>
                Ver detalles
            </button>
            <MyVerticallyCenteredModal show={showModal} onHide={() => setShowModal(false)} title={title}>
                <p>{description}</p>
            </MyVerticallyCenteredModal>

        </>
    );
}
