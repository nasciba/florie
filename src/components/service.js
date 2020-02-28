import axios from 'axios';

const service = axios.create({
  baseURL: 'http://localhost:5000/api',
  withCredentials: true 
});

const errorHandler = err => {
  console.error(err);
  throw err;
};

export default {
  service,

  handleUpload (imageUrl) {
    console.log('file in service: ', imageUrl)
    return service.post('/upload', imageUrl)
      .then(res => res.data)
      .catch(errorHandler);
  },

  saveNewImage (productWithImage) {
    console.log('new thing is: ', productWithImage)
    return service.post('/products', productWithImage)
      .then(res => res.data)
      .catch(errorHandler);
  }
}