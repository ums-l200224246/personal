import React, { useState } from 'react';
import { Search } from 'lucide-react';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export function SearchBar({ onSearch }: SearchBarProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="relative">
      <div className={`flex items-center ${isExpanded ? 'w-64' : 'w-8'} transition-all duration-300`}>
        <input
          type="text"
          placeholder="Search..."
          className={`${
            isExpanded ? 'w-full pl-8 pr-4' : 'w-0'
          } py-1 bg-gray-100 dark:bg-gray-800 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500`}
          onFocus={() => setIsExpanded(true)}
          onBlur={(e) => {
            if (!e.target.value) setIsExpanded(false);
          }}
          onChange={(e) => onSearch(e.target.value)}
        />
        <Search
          className={`w-5 h-5 text-gray-600 dark:text-gray-400 cursor-pointer ${
            isExpanded ? 'absolute left-2' : ''
          }`}
          onClick={() => setIsExpanded(true)}
        />
      </div>
    </div>
  );
}