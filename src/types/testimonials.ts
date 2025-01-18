export type Rating = 1 | 2 | 3 | 4 | 5;

export interface ReviewInterface {
  title: string;
  content: string;
  author: string;
  date: Date;
  rating: Rating;
}
