import React from 'react';
import { AnimatedText } from '../components/AnimatedText';
import { Users, Code, Globe } from 'lucide-react';

export function About() {
  return (
    <div className="space-y-12">
      <section className="text-center">
        <AnimatedText
          text="About ModernBlog"
          className="text-4xl font-bold text-gray-900 dark:text-white mb-4"
        />
        <AnimatedText
          text="A platform for sharing knowledge and connecting with fellow developers"
          className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
        />
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <Users className="w-12 h-12 text-indigo-600 mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Community Driven</h3>
          <p className="text-gray-600 dark:text-gray-300">Join a thriving community of developers sharing their knowledge and experiences.</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <Code className="w-12 h-12 text-indigo-600 mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Technical Excellence</h3>
          <p className="text-gray-600 dark:text-gray-300">High-quality technical content written by developers for developers.</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <Globe className="w-12 h-12 text-indigo-600 mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Global Reach</h3>
          <p className="text-gray-600 dark:text-gray-300">Connect with developers from around the world and expand your horizons.</p>
        </div>
      </section>

      <section className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Mission</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          ModernBlog aims to create a space where developers can share their knowledge, experiences, and insights with the global development community. We believe in the power of shared knowledge and continuous learning.
        </p>
        <p className="text-gray-600 dark:text-gray-300">
          Whether you're a seasoned developer or just starting your journey, ModernBlog is here to support your growth and connect you with like-minded individuals.
        </p>
      </section>
    </div>
  );
}