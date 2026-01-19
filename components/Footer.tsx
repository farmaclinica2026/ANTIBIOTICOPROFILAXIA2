
import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-white mt-12 py-4 shadow-inner">
            <div className="container mx-auto px-4 text-center text-sm text-gray-500">
                <p>&copy; {new Date().getFullYear()} Guia de Profilaxia Antimicrobiana ISCAL. Todos os direitos reservados.</p>
                <p className="mt-1">
                    Baseado no documento SPCIH-015 da ISCAL - Irmandade da Santa Casa de Londrina.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
