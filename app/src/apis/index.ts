import axios, {AxiosInstance} from 'axios';


const SERVER_ADDRESS = 'http://localhost:5000';

const Axios: AxiosInstance = axios.create({
    baseURL: `${SERVER_ADDRESS}`, // 기본 서버 주소 입력
    headers: {
      "Content-Type": "application/json",
      // access_token: cookies.get('access_token'),
    },
    timeout: 3000
});
Axios.interceptors.request.use(
  config =>{
    return config;
  },
  err => {
    return Promise.reject(err);
  }
)
Axios.interceptors.response.use(
  config => {
    /** 요청을 보낸 뒤에 response(응답)이 오는 경우에 여기서 먼저 확인이 가능하다.
     * [활용]
     * 1. status-code가 정상적이어도 내용상의 이유로 에러처리가 필요한 경우
     * 2. 민감정보 또는 데이터에 대한 가공 작업
     */
    
    return config;
  },
  ({ config, request, response, ...err }) => {
    /** response응답 후에 status-code가 4xx, 5xx 처럼 에러를 나타내는 경우 해당 루트를 수행한다.
     */
    const errMsg = 'Error Message';
    return Promise.reject({
      config,
      message: errMsg,
      response,
      ...err,
    });
  },
);

export default Axios;