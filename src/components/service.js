import axios from 'axios';

const service = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}/api`,
  withCredentials: true
});

const errorHandler = err => {
  console.error(err);
  throw err;
};

export default {
  service,

  handleUpload(imageUrl) {
    console.log('file in service: ', imageUrl)
    return service.post('/upload', imageUrl)
      .then(res => res.data)
      .catch(errorHandler);
  },

  saveNewProduct(productWithImage) {
    console.log('product with image is: ', productWithImage)
    return service.post('/products', productWithImage)
      .then(res => res.data)
      .catch(errorHandler);
  },

  updateProduct(updatedProduct) {
    console.log('product with image is: ', updatedProduct)
    return service.put(`/products/${updatedProduct._id}`, updatedProduct)
      .then(res => res.data)
      .catch(errorHandler);
  }
}