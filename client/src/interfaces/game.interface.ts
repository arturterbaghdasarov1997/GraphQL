export interface IAuthor {
    name: string;
  }
  
  export interface IReview {
    content: string;
    rating: number;
    author: IAuthor;
  }
  
  export interface IGame {
    id: string;
    title: string;
    platform: string[];
    reviews: IReview[];
  }
  