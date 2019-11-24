import  fetch from 'axios'
export  function login (params) {
  return fetch({
    url:'http://localhost:8080/commonAccount/login001',
    method:'post',
    data:params
  })
}
