
import React, { useState, useMemo } from 'react';
import { guidelinesData, Specialty } from './data/guidelines';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import ResultsDisplay from './components/ResultsDisplay';
import Footer from './components/Footer';

const App: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');

    const categories = useMemo(() => ['all', ...guidelinesData.map(g => g.category)], []);

    const filteredGuidelines = useMemo(() => {
        const lowerCaseSearchTerm = searchTerm.toLowerCase();

        let guidelinesByCategory = guidelinesData;
        if (selectedCategory !== 'all') {
            guidelinesByCategory = guidelinesData.filter(
                specialty => specialty.category === selectedCategory
            );
        }

        if (!lowerCaseSearchTerm) {
            return guidelinesByCategory;
        }

        return guidelinesByCategory
            .map(specialty => {
                const matchingProcedures = specialty.procedures.filter(procedure =>
                    Object.values(procedure).some(value =>
                        String(value).toLowerCase().includes(lowerCaseSearchTerm)
                    )
                );

                if (matchingProcedures.length > 0) {
                    return { ...specialty, procedures: matchingProcedures };
                }
                return null;
            })
            .filter((specialty): specialty is Specialty => specialty !== null);
    }, [searchTerm, selectedCategory]);

    return (
        <div className="min-h-screen flex flex-col font-sans text-gray-800">
            <Header />
            <main className="flex-grow container mx-auto px-4 py-8">
                <div className="max-w-4xl mx-auto">
                    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                        <h2 className="text-xl font-semibold text-gray-700 mb-4">Ferramenta de Pesquisa</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-end">
                            <div>
                                <label htmlFor="search-input" className="block text-sm font-medium text-gray-700 mb-1">Pesquisar termo</label>
                                <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                            </div>
                            <div>
                                <label htmlFor="category-select" className="block text-sm font-medium text-gray-700 mb-1">Filtrar por Especialidade</label>
                                <select
                                    id="category-select"
                                    value={selectedCategory}
                                    onChange={(e) => setSelectedCategory(e.target.value)}
                                    className="block w-full pl-3 pr-10 py-2 border border-gray-300 rounded-md leading-5 bg-white focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                >
                                    {categories.map(category => (
                                        <option key={category} value={category}>
                                            {category === 'all' ? 'Todas as Especialidades' : category}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>
                    
                    <ResultsDisplay guidelines={filteredGuidelines} />
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default App;
