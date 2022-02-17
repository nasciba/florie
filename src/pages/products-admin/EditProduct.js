import React from "react";
import { Link } from "react-router-dom";
import {
  StyledDisplay,
  StyledInputAuth,
  StyledTextAccount,
} from "../auth/style";
import { StyledGreenButton } from "../../components/buttons/styles";
import service from "../../service/service";
import getSingleProduct from "./service";

const EditProduct = () => {
  const [product, setProduct] = React.useState({
    name: "",
    description: "",
    brand: "",
    price: "",
    stock: "",
    image: "",
  });

  const { name, description, brand, price, stock, image } = product;

  const getProduct = async () => {
    const { params } = this.props.match;
    const product = await getSingleProduct(params);
    setProduct(product);
  };

  React.useEffect(() => {
    getProduct();
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target || "";
    this.setState({ [name]: value });
  };

  const handleFileUpload = (e) => {
    console.log("The file to be uploaded is: ", e.target.files[0]);

    const uploadData = new FormData();
    uploadData.append("imageUrl", e.target.files[0]);
    service
      .handleUpload(uploadData)
      .then((response) => {
        setProduct({ [image]: response.secure_url });
      })
      .catch((error) => {
        console.error("Error while uploading the file: ", error);
      });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await service
      .updateProduct(this.state)
      .then((res) => {
        console.log("added: ", res);
        this.props.history.push("/list-admin");
      })
      .catch((err) => {
        console.error("Error while adding the image: ", err);
      });
  };

  return (
    <StyledDisplay>
      <StyledInputAuth>
        <StyledTextAccount>EDITAR PRODUTO</StyledTextAccount>
        <form onSubmit={handleSubmit}>
          <label>Produto:</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => handleChange(e)}
          />
          <label>Descrição:</label>
          <input
            name="description"
            value={description}
            onChange={(e) => handleChange(e)}
          />
          <label>Marca:</label>
          <input
            type="text"
            name="brand"
            value={brand}
            onChange={(e) => handleChange(e)}
          />
          <label>Preço:</label>
          <input
            type="number"
            name="price"
            value={price}
            onChange={(e) => handleChange(e)}
          />
          <label>Estoque:</label>
          <input
            type="number"
            name="stock"
            value={stock}
            onChange={(e) => handleChange(e)}
          />
          <input
            type="file"
            name="imageUrl"
            onChange={(e) => handleFileUpload(e)}
          />
          <StyledGreenButton>
            {" "}
            <Link
              to="/list-admin"
              style={{ textDecoration: "none", color: " #26acb5" }}
            >
              CANCELAR
            </Link>
          </StyledGreenButton>
          <StyledGreenButton type="submit">SALVAR</StyledGreenButton>
        </form>
      </StyledInputAuth>
    </StyledDisplay>
  );
};

export default EditProduct;
