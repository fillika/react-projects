import { TImage } from '../CardImage/types';

export type TCard = {
  id: number;
  link: string;
  title: string | null;
  subTitle: string;
  buttonText: string;
  image: TImage;
};

export type TTitle = {
  classes: {
    [key: string]: string
  };
  title: string | null;
}
