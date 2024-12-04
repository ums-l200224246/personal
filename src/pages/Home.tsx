import React from 'react';
import { Link } from 'react-router-dom';
import { AnimatedText } from '../components/AnimatedText';
import { BlogCard } from '../components/blog/BlogCard';
import { posts } from '../utils/mockData';

export function Home() {
  const featuredPosts = posts.slice(0, 3);

  return (
    <div className="space-y-12">
      <section className="text-center py-20">
        <AnimatedText
          text="Welcome to ModernBlog"
          className="text-5xl font-bold text-gray-900 dark:text-white mb-4"
        />
        <AnimatedText
          text="Discover stories, thinking, and expertise from writers on any topic."
          className="text-xl text-gray-600 dark:text-gray-300"
        />
        <div className="mt-8">
          <Link
            to="/blog"
            className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Explore Posts
          </Link>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Featured Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredPosts.map(post => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </section>
    </div>
  );
}