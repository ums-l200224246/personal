import React from 'react';
import { Link } from 'react-router-dom';
import { Post } from '../../types/blog';

interface BlogCardProps {
  post: Post;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <img
        src={post.imageUrl}
        alt={post.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <div className="flex items-center mb-2">
          <span className="text-sm text-gray-500 dark:text-gray-400">{post.date}</span>
          <span className="mx-2">•</span>
          <span className="text-sm text-gray-500 dark:text-gray-400">{post.category}</span>
        </div>
        <Link to={`/blog/${post.id}`}>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 hover:text-indigo-600 dark:hover:text-indigo-400">
            {post.title}
          </h3>
        </Link>
        <p className="text-gray-600 dark:text-gray-300">{post.excerpt}</p>
        <div className="mt-4 flex items-center">
          <span className="text-sm text-gray-500 dark:text-gray-400">By {post.author}</span>
        </div>
      </div>
    </div>
  );
}