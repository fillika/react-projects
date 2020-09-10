export type TCard = {
  id: number;
  link: string;
  title: string;
  subTitle: string;
  buttonText: string;
  image: TImage;
};

export type TImage = {
  alt: string;
  src: string;
  srcSet: string;
  webp: string;
  mobile: {
    img: string;
    webp: string;
  };
};
