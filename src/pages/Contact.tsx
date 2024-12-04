import React, { useState } from 'react';
import { AnimatedText } from '../components/AnimatedText';
import { Mail, MessageSquare, Send } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="max-w-3xl mx-auto space-y-12">
      <section className="text-center">
        <AnimatedText
          text="Get in Touch"
          className="text-4xl font-bold text-gray-900 dark:text-white mb-4"
        />
        <AnimatedText
          text="Have questions or suggestions? We'd love to hear from you."
          className="text-xl text-gray-600 dark:text-gray-300"
        />
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <Mail className="w-8 h-8 text-indigo-600 mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Email Us</h3>
          <p className="text-gray-600 dark:text-gray-300">contact@modernblog.com</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <MessageSquare className="w-8 h-8 text-indigo-600 mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Live Chat</h3>
          <p className="text-gray-600 dark:text-gray-300">Available Monday to Friday, 9am - 5pm EST</p>
        </div>
      </section>

      <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full flex items-center justify-center space-x-2 bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors"
        >
          <Send className="w-5 h-5" />
          <span>Send Message</span>
        </button>
      </form>
    </div>
  );
}