export interface User {
  name: string;
  age: number;
  phone: number;
}

export interface Welcome {
    people: Person[];
}

export interface Person {
    name:          string;
    "high score"?: number;
}

export interface CardProps {
  title: string;
  content: string;
}