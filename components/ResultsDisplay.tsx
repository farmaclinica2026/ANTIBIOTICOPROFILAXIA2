
import React from 'react';
import { Specialty, Procedure } from '../data/guidelines';
import SpecialtyTable from './SpecialtyTable';

interface ResultsDisplayProps {
    guidelines: Specialty[];
}

const ResultsDisplay: React.FC<ResultsDisplayProps> = ({ guidelines }) => {
    if (guidelines.length === 0) {
        return (
            <div className="text-center py-10 px-6 bg-white rounded-lg shadow-md">
                <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path vectorEffect="non-scaling-stroke" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <h3 className="mt-2 text-sm font-medium text-gray-900">Nenhum resultado encontrado</h3>
                <p className="mt-1 text-sm text-gray-500">Tente ajustar seus termos de pesquisa ou filtros.</p>
            </div>
        );
    }

    return (
        <div className="space-y-8">
            {guidelines.map(specialty => (
                <SpecialtyTable key={specialty.category} specialty={specialty} />
            ))}
        </div>
    );
};

export default ResultsDisplay;
