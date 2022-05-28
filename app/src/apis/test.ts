import axios from './'

export const Get = async (url: string, params: any) => await axios.get(url, params);
export const Post = (url: string, params: any) => axios.post(url, params);

