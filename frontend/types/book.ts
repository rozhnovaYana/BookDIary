export type Book = {
  _id: string;
  author: string;
  cover: string;
  description: string;
  pages: number;
  rating: {
    reviews: string[];
    score: number;
  };
  release_date: Date;
  title: string;
  users: string[];
};
