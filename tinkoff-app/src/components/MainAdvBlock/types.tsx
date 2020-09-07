export type TImage = {
  src: string;
  srcSet: string;
  mobile: {
    img: string;
    webp: string;
  };
  tablet: {
    webp: string;
  };
  desktop: {
    img: string;
    webp: string;
  };
  alt: string;
};

export type TComponentData = {
  id: number;
  title: string;
  subTitle: string;
  button: {
    text: string;
    link: string;
  };
  image: TImage;
};
