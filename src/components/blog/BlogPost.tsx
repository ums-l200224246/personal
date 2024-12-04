import React from 'react';
import { Post } from '../../types/blog';
import { Calendar, User, Tag } from 'lucide-react';

interface BlogPostProps {
  post: Post;
}

export function BlogPost({ post }: BlogPostProps) {
  return (
    <article className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
      <img
        src={post.imageUrl}
        alt={post.title}
        className="w-full h-64 object-cover"
      />
      <div className="p-8">
        <div className="flex items-center space-x-6 text-sm text-gray-500 dark:text-gray-400 mb-4">
          <div className="flex items-center">
            <Calendar className="w-4 h-4 mr-2" />
            <span>{post.date}</span>
          </div>
          <div className="flex items-center">
            <User className="w-4 h-4 mr-2" />
            <span>{post.author}</span>
          </div>
          <div className="flex items-center">
            <Tag className="w-4 h-4 mr-2" />
            <span>{post.category}</span>
          </div>
        </div>

        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          {post.title}
        </h1>

        <div className="prose dark:prose-invert max-w-none">
          {post.content}
        </div>
      </div>
    </article>
  );
}