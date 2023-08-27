import axiosClient from "./axiosInstance";

export const getLoginService = async (body: any) => {
  return await axiosClient.post("/auth/login", body);
};
