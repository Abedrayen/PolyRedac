import React, { useEffect } from 'react';
import Navbar from './Navbar';

const CalendlyWidget = () => {
    useEffect(() => {
        // Charge le script de Calendly
        const script = document.createElement('script');
        script.src = 'https://assets.calendly.com/assets/external/widget.js';
        script.async = true;
        document.body.appendChild(script);

        // Nettoyage lors du démontage du composant
        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <>
            <Navbar />
            <div className="calendly-inline-widget" data-url="https://calendly.com/polyredac/rdvtel?hide_gdpr_banner=1" style={{ minWidth: '320px', height: '630px' }} />
        </>

    );
};

export default CalendlyWidget;
