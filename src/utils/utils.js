import axios from 'axios'; 

// const apiUrl = 'http://dev-api.seeso.kr'
const apiUrl = 'http://localhost:8000'

const codeMessage = {
  200: '성공적으로 데이터를 가지고 왔습니다. ',
};
function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const errortext = codeMessage[response.status] || response.statusText;
  // notification.error({
  //   message: `请求错误 ${response.status}: ${response.url}`,
  //   description: errortext,
  // });
  const error = new Error(errortext);
  error.name = response.status;
  error.response = response;
  throw error;
}

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */

 export default function request(url, options) {  
  url = apiUrl + url
  const newOptions = { ...options };
  let config = {
      'headers': { 
      'accept': 'application/json', 
      'content-type': 'application/json', 
    } 
  }

  if (newOptions.method === 'POST' || newOptions.method === 'PUT') {
    newOptions.headers = {
      Accept: 'application/json',
       'Content-Type': 'application/json',
      ...newOptions.headers,
    };
    newOptions.body = JSON.stringify(newOptions.body);
  }
  
  // if (getToken() && needToken) {
  //   config.headers.Authorization = 'JWT ' + getToken();
  // }

  return axios({
      url: url, 
      method: newOptions.method,
      data: newOptions.body,
      headers: config.headers
    })
}
