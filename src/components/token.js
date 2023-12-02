import axios from 'axios'
import { baseUrl } from './_api'
const generateToken = async () => {
  let token = localStorage.getItem('refreshToken')
  try {
    await axios({
      method: 'GET',
      url: `${baseUrl}/auth/generate-access`,
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    }).then((res) => {
      localStorage.setItem('token', res?.data?.data?.access_token)
    })
  } catch (error) {
    if (error.response) {
      // localStorage.clear();
      // window.location.href = "/login";
    }
  }
}

export default generateToken
