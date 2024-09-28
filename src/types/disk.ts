export type Disk = {
  title: string;
  image: {
    url: string;
    height: number;
    width: number;
  }[];
  description?: string;
  link?: string;
};
