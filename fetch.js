const get_btn_1 = document.getElementById('get-btn-fetch');
const post_btn_1 = document.getElementById('post-btn-fetch');

const sendHttpReq = (url, method, data) => {
  return fetch(url, {
    method: method,
    body: JSON.stringify(data),
    headers: data ? { 'Content-Type': 'application/json' } : {}
  }).then(res => {
    if (res.status >= 400) {
      return res.json().then(errRes => {
        const erro = new Error('Something went wrong');
        erro.data = errRes;
        throw erro;
      });
    }
    return res.json();
  });
}

const get_data = () => {
  sendHttpReq('https://reqres.in/api/users','GET').then(resData => {
      console.log(resData);
    })
    .catch(err => {
      console.log(err);
    })
}

const post_data = () => {
  sendHttpReq('https://reqres.in/api/register', 'POST',{
      email: "eve.holt@reqres.in",
      password: "pistol",
    }
  ).then(resData => {
      console.log(resData);
    })
    .catch(err => {
      console.log(err,err.data);
    })
}

get_btn_1.addEventListener('click', get_data);
post_btn_1.addEventListener('click', post_data);
