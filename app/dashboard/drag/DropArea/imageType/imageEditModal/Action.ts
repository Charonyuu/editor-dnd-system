import { imageEditType } from "./index";

type Action =
  | {
      type: "UPDATE_LIST";
      payload: { id: number; type: string; value: string | boolean | number };
    }
  | {
      type: "ADD_LIST";
    }
  | {
      type: "INIT_DATA";
      payload: imageEditType[];
    }
  | {
      type: "DELETE_DATA";
      payload: { id: number };
    };

export function reducer(
  state: imageEditType[],
  action: Action
): imageEditType[] {
  switch (action.type) {
    case "INIT_DATA":
      return action.payload;

    case "ADD_LIST":
      const newItem = {
        id: Date.now(),
        img: "",
        url: "",
        title: "",
        textAlign: "",
      };
      return [...state, newItem];

    case "DELETE_DATA":
      return state.filter((item) => item.id !== action.payload.id);

    case "UPDATE_LIST":
      return state.map((item) =>
        item.id === action.payload.id
          ? { ...item, [action.payload.type]: action.payload.value }
          : item
      );

    default:
      return state;
  }
}
