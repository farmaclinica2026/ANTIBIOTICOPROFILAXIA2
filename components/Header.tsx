
import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="bg-white shadow-md">
            <div className="container mx-auto px-4 py-6">
                <div className="text-center">
                    <h1 className="text-3xl font-bold text-blue-800">
                        Guia de Profilaxia Antimicrobiana ISCAL
                    </h1>
                    <p className="text-md text-gray-600 mt-2">
                        Consulta rápida da Norma Técnica SPCIH-015 para Antibioticoprofilaxia Peri Operatória.
                    </p>
                </div>
            </div>
        </header>
    );
};

export default Header;
