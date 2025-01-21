import axios from "axios";

export const ajaxGet = async (_url:string) => {
  let res = await axios.get(_url);
  return res.data;
};

// export const ajaxInsert = async (val: string) => {
//   const _url = LOCAL_URL_STORE + val;
//   console.log(_url)
//   let res = await axios.get(_url);
//   return res.data;
// };
