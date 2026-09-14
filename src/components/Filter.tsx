import React from 'react';
import { FilterType } from '../types';

interface FilterProps {
  activeFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
  stats: {
    total: number;
    active: number;
    completed: number;
  };
  onClearCompleted: () => void;
}

const Filter: React.FC<FilterProps> = ({
  activeFilter,
  onFilterChange,
  stats,
  onClearCompleted,
}) => {
  const filters: FilterType[] = ['all', 'active', 'completed'];

  return (
    <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200 mb-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="flex gap-2 flex-wrap">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => onFilterChange(filter)}
              className={`px-4 py-2 rounded-md font-semibold transition ${
                activeFilter === filter
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {filter.charAt(0).toUpperCase() + filter.slice(1)}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3 text-sm text-gray-600">
          <span>{stats.active} Active</span>
          <span className="text-gray-300">•</span>
          <span>{stats.completed} Completed</span>
          {stats.completed > 0 && (
            <>
              <span className="text-gray-300">•</span>
              <button
                onClick={onClearCompleted}
                className="text-danger hover:underline font-semibold"
              >
                Clear Completed
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Filter;
