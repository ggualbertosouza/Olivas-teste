export type dataProps = {
  slug?: string;
  title?: {
    rendered: string;
  };
  id?: number;
  date?: string;
  content?: {
    rendered: string;
  };
  link?: string,
  excerpt?: {
    rendered?: string,
  }
};

export type postProps = {
  slug?: string;
  title?: string;
  id?: number;
  content?: string;
  date?: string;
  link?: string;
  description?: string,
};
