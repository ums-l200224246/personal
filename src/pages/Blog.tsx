import React, { useState } from 'react';
import { BlogCard } from '../components/blog/BlogCard';
import { SearchBar } from '../components/common/SearchBar';
import { posts, categories } from '../utils/mockData';
import { AnimatedText } from '../components/AnimatedText';

export function Blog() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('');

  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = !selectedCategory || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-center mb-8">
        <AnimatedText
          text="Latest Blog Posts"
          className="text-3xl font-bold text-gray-900 dark:text-white mb-4 md:mb-0"
        />
        <div className="flex items-center space-x-4">
          <select
            className="bg-gray-100 dark:bg-gray-800 rounded-lg px-4 py-2"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="">All Categories</option>
            {categories.map(category => (
              <option key={category.id} value={category.name}>
                {category.name}
              </option>
            ))}
          </select>
          <SearchBar onSearch={setSearchQuery} />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPosts.map(post => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}