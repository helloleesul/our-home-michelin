import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "/api",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});
axiosInstance.defaults.withCredentials = true;

// 요청 인터셉터 추가
axiosInstance.interceptors.request.use(
  (request) => {
    // 요청을 보내기 전에 수행할 작업을 여기에 추가할 수 있습니다.
    // 예: 헤더 수정, 요청 데이터 변경 등
    if (request.data instanceof FormData) {
      request.headers["Content-Type"] = "multipart/form-data";
    }
    return request;
  },
  (error) => {
    // 요청이 실패한 경우에 대한 처리
    return Promise.reject(error);
  }
);

// 응답 인터셉터 추가
axiosInstance.interceptors.response.use(
  (response) => {
    // 응답을 받은 후 수행할 작업을 여기에 추가할 수 있습니다.
    // 예: 응답 데이터 수정, 오류 처리 등
    return response;
  },
  (error) => {
    // 응답이 오류인 경우에 대한 처리
    return Promise.reject(error);
  }
);

export default axiosInstance;
