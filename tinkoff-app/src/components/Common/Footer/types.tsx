export type TLinkData = {
  isLink?: boolean,
  to: string,
  name: string;
}

export type TNavigation = {
  id: string,
  headLink: TLinkData,
  listLink: TLinkData[]
}
