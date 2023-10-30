import { NavBarType } from "../type";

type Action =
  | { type: "SET_LOGO"; payload: string }
  | { type: "SET_COLOR"; payload: string }
  | { type: "SET_BGCOLOR"; payload: string }
  | { type: "ADD_NAV" }
  | { type: "ADD_CHILD"; payload: { navId: number } }
  | {
      type: "UPDATE_NAV";
      payload: { id: number; type: string; value: string | boolean | number };
    }
  | {
      type: "UPDATE_CHILD";
      payload: {
        navId: number;
        childId: string;
        type: string;
        value: string | boolean | number;
      };
    };

export function reducer(state: NavBarType, action: Action): NavBarType {
  switch (action.type) {
    case "SET_LOGO":
      return { ...state, logo: action.payload };

    case "SET_COLOR":
      return { ...state, color: action.payload };

    case "SET_BGCOLOR":
      return { ...state, bgColor: action.payload };

    case "ADD_NAV":
      const newField = {
        id: Date.now(),
        name: "",
        url: "",
        isDropDown: false,
        childrens: [],
      };
      return { ...state, navs: [...state.navs, newField] };

    case "UPDATE_NAV":
      return {
        ...state,
        navs: state.navs.map((nav) =>
          nav.id === action.payload.id
            ? { ...nav, [action.payload.type]: action.payload.value }
            : nav
        ),
      };

    case "ADD_CHILD":
      return {
        ...state,
        navs: state.navs.map((nav) =>
          nav.id === action.payload.navId
            ? {
                ...nav,
                childrens: [
                  ...nav.childrens,
                  {
                    id: Date.now().toString(),
                    name: "",
                    url: "",
                    // 若你的子項目有其他屬性，請在這裡加上
                  },
                ],
              }
            : nav
        ),
      };

    case "UPDATE_CHILD":
      return {
        ...state,
        navs: state.navs.map((nav) =>
          nav.id === action.payload.navId
            ? {
                ...nav,
                childrens: nav.childrens?.map((child) =>
                  child.id === action.payload.childId
                    ? { ...child, [action.payload.type]: action.payload.value }
                    : child
                ),
              }
            : nav
        ),
      };

    default:
      return state;
  }
}