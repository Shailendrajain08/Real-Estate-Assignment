import axios from 'axios';

const API_URL = 'http://localhost:3000/users';

export const Signup = async (userData) => {
  const response = await axios.post(API_URL, userData);
  return response.data;
};

export const CheckEmailExists = async (email) => {
    const response = await axios.get(`${API_URL}?email=${email}`);
    return response.data.length > 0;
};

export const CheckUserNameExists = async (userName) => {
  const response = await axios.get(`${API_URL}?userName=${userName}`);
  return response.data.length > 0;
};

export const Login = async (credentials) => {
  const response = await axios.get(`${API_URL}`, {
  params: {
    email: credentials.email,
    password: credentials.password
  }
})
return response
}

