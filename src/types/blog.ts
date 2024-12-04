export interface Post {
  id: number;
  title: string;
  content: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
  imageUrl: string;
  isDraft: boolean;
}

export interface Category {
  id: number;
  name: string;
  slug: string;
}