import axiosInstance from "./axiosInstance";

const sendRequest = async (method, url, data = null) => {
  try {
    const response = await axiosInstance({
      method,
      url,
      data,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

// GET 요청을 보내는 함수
export const GET = async (url) => {
  return await sendRequest("get", url);
};

// POST 요청을 보내는 함수
export const POST = async (url, data) => {
  return await sendRequest("post", url, data);
};

// PUT 요청을 보내는 함수
export const PUT = async (url, data) => {
  return await sendRequest("PUT", url, data);
};

// PATCH 요청을 보내는 함수
export const PATCH = async (url, data) => {
  return await sendRequest("patch", url, data);
};

// DELETE 요청을 보내는 함수
export const DELETE = async (url, data) => {
  return await sendRequest("delete", url, data);
};
