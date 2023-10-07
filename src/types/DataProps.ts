export type dataProps = {
  slug?: string;
  title?: {
    rendered: string;
  };
  id?: number;
  date?: string | number | undefined;
  content: {
    rendered: string,
  }
};
