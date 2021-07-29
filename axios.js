const get_btn_2 = document.getElementById('get-btn-axios');
const post_btn_2 = document.getElementById('post-btn-axios');

const get_data_ax = () => {
  axios.get('https://reqres.in/api/users').then(res => {
    console.log(res)
  })
}

const post_data_ax = () => {
  axios.post('https://reqres.in/api/register', {
      email: "eve.holt@reqres.in",
      password: "pistol",
  }).then(res => {
    console.log(res);
  }).catch(err => {
    console.log(err,err.response)
  })
}

get_btn_2.addEventListener('click', get_data_ax);
post_btn_2.addEventListener('click', post_data_ax);