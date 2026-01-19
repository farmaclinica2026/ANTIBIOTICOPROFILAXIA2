
import React from 'react';
import { Specialty } from '../data/guidelines';

interface SpecialtyTableProps {
    specialty: Specialty;
}

const SpecialtyTable: React.FC<SpecialtyTableProps> = ({ specialty }) => {
    const renderCell = (content: any) => {
        if (typeof content === 'string' && content.includes('\n')) {
            return (
                <div className="whitespace-pre-line">
                    {content.split('\n').map((line, index) => (
                        <span key={index} className="block">{line}</span>
                    ))}
                </div>
            );
        }
        return content || '---';
    };
    
    // Determine the keys from the first procedure object to ensure order
    const procedureKeys = specialty.procedures.length > 0 ? Object.keys(specialty.procedures[0]) : [];

    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <h2 className="text-xl font-bold text-white bg-blue-700 p-4">{specialty.category}</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            {specialty.headers.map(header => (
                                <th key={header} scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    {header}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {specialty.procedures.map((procedure, index) => (
                            <tr key={index} className="hover:bg-gray-50">
                                {procedureKeys.map(key => (
                                    <td key={key} className="px-6 py-4 text-sm text-gray-700">
                                        {renderCell(procedure[key])}
                                    </td>
                                ))}
                                {/* Pad empty cells if procedure has fewer keys than headers */}
                                {Array(specialty.headers.length - procedureKeys.length).fill(0).map((_, i) => (
                                     <td key={`pad-${i}`} className="px-6 py-4 text-sm text-gray-700">---</td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {specialty.notes && (
                <div className="p-4 bg-gray-50 border-t border-gray-200">
                    {specialty.notes.map((note, index) => (
                        <p key={index} className="text-sm text-gray-600 italic">
                            {note}
                        </p>
                    ))}
                </div>
            )}
        </div>
    );
};

export default SpecialtyTable;
