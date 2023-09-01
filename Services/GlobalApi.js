const BASE_URL = "http:192.168.0.113:3001/api/bardapi";

const getBardApi = (userMsg) => axios.get(BASE_URL + "?ques=" + userMsg);

export default {
	getBardApi
};
