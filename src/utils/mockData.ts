import { Post, Category } from '../types/blog';

export const categories: Category[] = [
  { id: 1, name: 'Technology', slug: 'technology' },
  { id: 2, name: 'Design', slug: 'design' },
  { id: 3, name: 'Development', slug: 'development' },
  { id: 4, name: 'Career', slug: 'career' },
];

export const posts: Post[] = [
  {
    id: 1,
    title: 'Getting Started with React and TypeScript',
    content: 'Full content here...',
    excerpt: 'Learn how to set up a new React project with TypeScript and best practices for type safety.',
    author: 'John Doe',
    date: '2024-03-15',
    category: 'Development',
    imageUrl: 'https://source.unsplash.com/random/800x600?code',
    isDraft: false,
  },
  {
    id: 2,
    title: 'Modern Web Design Trends',
    content: 'Full content here...',
    excerpt: 'Explore the latest trends in web design and how to implement them in your projects.',
    author: 'Jane Smith',
    date: '2024-03-14',
    category: 'Design',
    imageUrl: 'https://source.unsplash.com/random/800x600?design',
    isDraft: false,
  },
  {
    id: 3,
    title: 'The Future of Web Development',
    content: 'Full content here...',
    excerpt: 'A look into upcoming technologies and methodologies that will shape web development.',
    author: 'Mike Johnson',
    date: '2024-03-13',
    category: 'Technology',
    imageUrl: 'https://source.unsplash.com/random/800x600?technology',
    isDraft: false,
  },
];