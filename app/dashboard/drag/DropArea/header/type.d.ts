type ChildrenNavType = {
  name: string,
  url: string,
  id: string
}

type NavType = {
  id: number,
  name: string,
  url?: string,
  isDropDown: boolean,
  childrens: ChildrenNavType[]
}

export type NavBarType = {
  bgColor: string,
  color: string,
  logo: string,
  navs: NavType[],
};

