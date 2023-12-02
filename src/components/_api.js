import axios from 'axios'
import { NotificationManager } from 'react-notifications'
import generateToken from './token'
export const baseUrl = 'https://qc-express.co/api/v1'
export let timoutReq = 10000

export const axiosCalls = async (path, method, data = null) => {
  await generateToken()
  const token = localStorage.getItem('token')
  try {
    let res = await axios({
      method,
      url: `${baseUrl}/${path}`,
      data,
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    })
    if (res) {
      return res.data
    }
  } catch (error) {
    if (error.message == 'timeout of 100ms exceeded') {
      return { er: 'slowNetwork' }
    }
    return { er: error.response.data }
  }
}
