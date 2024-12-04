import React from 'react';
import { Category } from '../../types/blog';

interface CategoryFilterProps {
  categories: Category[];
  selectedCategory: string;
  onChange: (category: string) => void;
}

export function CategoryFilter({ categories, selectedCategory, onChange }: CategoryFilterProps) {
  return (
    <select
      className="bg-gray-100 dark:bg-gray-800 rounded-lg px-4 py-2 border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-indigo-500"
      value={selectedCategory}
      onChange={(e) => onChange(e.target.value)}
    >
      <option value="">All Categories</option>
      {categories.map(category => (
        <option key={category.id} value={category.name}>
          {category.name}
        </option>
      ))}
    </select>
  );
}