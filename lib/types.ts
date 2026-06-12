export interface Blog {
  id: number;
  blog_id: number; // alias for id, kept for compat
  title: string;
  content: string; // Quill HTML
  image: string;
  category: string;
  firstname: string;
  lastname: string;
  views: number;
  likes: number;
  published: boolean;
  created_at: string;
  updated_at: string;
}

export interface Comment {
  id: number;
  blog_id: number;
  user_id: string;
  name: string;
  text: string;
  created_at: string;
}

export interface Testimonial {
  img: string;
  name: string;
  role: string;
  message: string;
  rating: number;
}

export interface MapPoint {
  lat: number;
  lng: number;
  type: 'farm' | 'testing_hub' | 'research_hub';
  label: string;
}
