export type Book = {
  _id?: string;
  author: string;
  cover: string;
  description: string;
  pages: number;
  rating?: {
    reviews: string[];
    score: number;
  };
  release_date: Date;
  title: string;
  users: string[];
  isbn?: string;
  isFavourite?: boolean;
  status?: string;
};
export type UserBook = {
  isFavourite?: boolean;
  status?: string;
  id: string;
};
