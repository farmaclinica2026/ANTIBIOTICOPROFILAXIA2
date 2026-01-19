
import React from 'react';

interface CategoryFiltersProps {
    categories: string[];
    selectedCategory: string;
    setSelectedCategory: (category: string) => void;
}

const CategoryFilters: React.FC<CategoryFiltersProps> = ({ categories, selectedCategory, setSelectedCategory }) => {
    return (
        <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-700 mb-3">Filtrar por Especialidade</h3>
            <div className="flex flex-wrap gap-2">
                {categories.map(category => (
                    <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`px-4 py-2 text-sm font-medium rounded-full transition-colors duration-200 ${
                            selectedCategory === category
                                ? 'bg-blue-600 text-white shadow'
                                : 'bg-white text-blue-700 hover:bg-blue-100 border border-blue-200'
                        }`}
                    >
                        {category === 'all' ? 'Todas' : category.replace('Cirurgia Pediátrica - ', 'Ped.')}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default CategoryFilters;
