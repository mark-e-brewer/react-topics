import React, { useState } from 'react';

const ProductForm = () => {
  const [productData, setProductData] = useState({
    productName: '',
    productDescription: '',
    productPrice: '',
    productCards: [], // New state to keep track of product cards
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    // Generate a unique ID for the product card
    const cardId = `productCard_${Math.random().toString(36).substr(2, 9)}`;
    // Create the product card element
    const productCard = (
      <div key={cardId} className="product-card">
        <h2 className="product-card__title">{productData.productName}</h2>
        <p className="product-card__field">
          <strong>Description:</strong> {productData.productDescription}
        </p>
        <p className="product-card__field">
          <strong>Price:</strong> {productData.productPrice}
        </p>
      </div>
    );
    // Update the state with the new product card
    setProductData({ ...productData, productCards: [...productData.productCards, productCard] });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProductData({ ...productData, [name]: value });
  };

  return (
    <div>
      <form className="product-form" onSubmit={handleSubmit}>
        <label htmlFor="productName" className="product-form__label">
          Product Name:
        </label>
        <input
          type="text"
          id="productName"
          name="productName"
          className="product-form__input"
          value={productData.productName}
          onChange={handleChange}
        />
        <label htmlFor="productDescription" className="product-form__label">
          Product Description:
        </label>
        <textarea
          id="productDescription"
          name="productDescription"
          className="product-form__textarea"
          value={productData.productDescription}
          onChange={handleChange}
        />
        <label htmlFor="productPrice" className="product-form__label">
          Product Price:
        </label>
        <input
          type="text"
          id="productPrice"
          name="productPrice"
          className="product-form__input"
          value={productData.productPrice}
          onChange={handleChange}
        />
        <button type="submit" className="product-form__button">
          Submit
        </button>
      </form>
      {/* Render product cards */}
      <div className="product-cards-container">
        {productData.productCards.map((productCard) => (
          <React.Fragment key={productCard.key}>{productCard}</React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default ProductForm;
