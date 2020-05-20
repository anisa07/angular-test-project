import AuthorInterface from './author.interface';

export default interface CourseInterface {
  id: string;
  date: Date;
  length: number;
  description: string;
  name: string;
  topRated: boolean;
  authors: Array<AuthorInterface>;
}
