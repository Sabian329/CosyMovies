import { Baselink } from "../Constatns/Api";

export const variantReducer = (state = Baselink.popular, action) => {
  switch (action.type) {
    case "POPULAR_TV":
      return (state = Baselink.popularTv);
    case "POPULAR_MOVIE":
      return (state = Baselink.popular);
    default:
      return state;
  }
};
