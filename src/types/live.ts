export type Live = {
  id: string;
  date: Date;
  place: string;
  title?: string;
  costar?: string;
  adv?: number;
  door: number;
  open?: string;
  start: string;
  url?: string;
  image?: {
    url: string;
    height: number;
    width: number;
  };
  drink: boolean;
  option?: string;
  tba?: boolean;
};
