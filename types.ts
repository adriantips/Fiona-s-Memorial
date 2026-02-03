export interface Tribute {
  id: string;
  author: string;
  message: string;
  date: string;
}

export interface Photo {
  id: number;
  url: string;
  caption: string;
}

export interface Poem {
  id: string;
  text: string;
  topic: string;
  date: string;
}
