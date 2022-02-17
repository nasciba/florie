import axios from 'axios';

const service = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}/api`,
  withCredentials: true
});

const errorHandler = (err) => {
  throw err;
};

export default {
  service,

  async handleUpload(imageUrl) {
    console.log('file in service: ', imageUrl)
    return service.post('/upload', imageUrl)
      .then(res => res.data)
      .catch(errorHandler);
  },

  async saveNewProduct(productWithImage) {
    console.log('product with image is: ', productWithImage)
    return service.post('/products', productWithImage)
      .then(res => res.data)
      .catch(errorHandler);
  },

  async updateProduct(updatedProduct) {
    console.log('updated product is: ', updatedProduct)
    return service.put(`/products/${updatedProduct._id}`, updatedProduct)
      .then(res => res.data)
      .catch(errorHandler);
  }
}