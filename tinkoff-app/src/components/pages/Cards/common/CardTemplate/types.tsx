export type TCardtemplate = {
  isMain?: boolean
}

export interface IData extends TCardtemplate {
  cardTitle: string;
  desktop: IDesktop;
  mobile: IMobile;
}

export interface IDesktop extends TCardtemplate {
  img: {
    min1360: string,
    min1360webp: string,
    max1360webp: string,
    src: string,
    srcSet: string,
    alt: string
  },
  title: string,
  about: string,
  list: TListItemForDesktop[],
  formButton: {
    href: string,
    text: string
  },
  learnMoreButton: {
    href: string,
    text: string
  },
}

export interface IMobile extends TCardtemplate {
  img: {
    src: string,
    srcSet: string,
    webp: string,
    alt: string
  },
  title: string,
  about: string,
  list: string[],
  formButton: {
    href: string,
    text: string
  },
  learnMoreButton: {
    href: string,
    text: string
  },
}

type TListItemForDesktop = {
  itemTitle: string,
  itemSubtitle: string
}