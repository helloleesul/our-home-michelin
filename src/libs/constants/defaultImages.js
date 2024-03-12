import { RECIPE_TYPE_LIST } from "./listItems";

export const PROFILE_DEFAULT_IMG = "/img/profile_default.png";
export const PROFILE_UPLOAD_IMG = "/img/profile_upload.png";

export const RECIPE_TYPE_DEFAULT_IMG = RECIPE_TYPE_LIST.reduce((acc, type) => {
  const { value } = type;
  acc[value] = `/img/default_${value}.png`;
  return acc;
}, {});
export const RECIPR_UPLOAD_IMG = "/img/file_upload.png";
