import axios from 'axios';


const sendRequest = async (url, method, formData) => {
  try {
    const config = {
      method: method,
      url: url,
    };

    // Если метод POST и предоставлена FormData, добавляем данные и заголовки
    if (method === 'POST' && formData) {
      config.data = formData;
      config.headers = { 'Content-Type': 'multipart/form-data' };
    }

    const response = await axios(config);

    console.log('Ответ от сервера:', response.data);
  } catch (error) {
    console.error('Ошибка при выполнении запроса:', error);
  }
};
  
export { sendRequest };