import { React, useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo, faMinus, faPlus, faXmark } from '@fortawesome/free-solid-svg-icons';
import data from '../data'
import Checkout from '../stripe/Checkout'

export default function Order() {
  // State variables
  const [selectedProduct, setSelectedProduct] = useState([]); // Selected products in the cart
  const [add2Cart, setAdd2Cart] = useState(false); // Toggle for displaying the cart
  const [openStates, setOpenStates] = useState(Array(data.length).fill(false)); // Toggle for displaying product information
  const [selectedProductIndex, setSelectedProductIndex] = useState(-1); // Index of the selected product
  const [buyNowButton, setBuyNowButton] = useState(false); // Toggle for displaying the checkout success screen

  // Toggle the cart and add products
  const toggleCart = (product, index) => {
    const existingProductIndex = selectedProduct.findIndex((item) => item.id === product.id);

    if (existingProductIndex !== -1) {
      // If the product already exists in the cart, update its quantity
      const updatedProducts = [...selectedProduct];
      updatedProducts[existingProductIndex].quantity += 1;
      setSelectedProduct(updatedProducts);
    } else {
      // If the product doesn't exist in the cart, add it with quantity 1
      setSelectedProduct((prevProducts) => [
        ...prevProducts,
        { ...product, quantity: 1, img: product.img },
      ]);
    }

    setSelectedProductIndex(index);
    setAdd2Cart(true);
  };

  // Delete a selected item from the cart
  const deleteSelectedItem = (id) => {
    setSelectedProduct((prevProducts) => {
      const updatedProducts = prevProducts.filter((item) => item.id !== id);
      return updatedProducts;
    });
  };

  // Hide the cart if no products are selected
  useEffect(() => {
    if (selectedProduct.length === 0) {
      setAdd2Cart(false);
    }
  }, [selectedProduct]);

  // Go back from the cart to the product selection
  const goBack = () => {
    setAdd2Cart(false);
  };

  // Increase the quantity of a product in the cart
  const increaseQuantity = (productId) => {
    const updatedProducts = selectedProduct.map((product) => {
      if (product.id === productId) {
        return {
          ...product,
          quantity: product.quantity + 1,
        };
      }
      return product;
    });

    setSelectedProduct(updatedProducts);
  };

  // Decrease the quantity of a product in the cart
  const decreaseQuantity = (productId) => {
    const updatedProducts = selectedProduct.map((product) => {
      if (product.id === productId && product.quantity > 1) {
        return {
          ...product,
          quantity: product.quantity - 1,
        };
      }
      return product;
    });

    setSelectedProduct(updatedProducts);
  };

  // Hide or show the Order-page scroll bar
  useEffect(() => {
    if (add2Cart && !buyNowButton) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }
  }, [add2Cart, buyNowButton]);

  // Toggle the product ingredients modal
  const toggleModal = (index) => {
    const newOpenStates = [...openStates];
    newOpenStates[index] = !newOpenStates[index];
    setOpenStates(newOpenStates);
  };

  // // Handle the Buy Now button click
  const handleBuyNowClick = (product) => {
    if (selectedProduct.length === 0) {
      setSelectedProduct([product]);
    }

   const existingProductIndex = selectedProduct.findIndex((item) => item.id === product.id);

    if (existingProductIndex !== -1) {
      console.log('already exists');
    } else {
     const updatedProducts = [
       ...selectedProduct,
       { ...product, quantity: 1, img: product.img },
    ];
    setSelectedProduct(updatedProducts);
};
  setBuyNowButton(true)
}

  const products = data.map((product, index) => {
    return (
      <div key={index} className="product">
        <img className="product-img" src={product.img} alt={product.alt} />
        {openStates[index] && !buyNowButton ? (
          <div className="order-area">
            <p>
              <FontAwesomeIcon
                onClick={() => toggleModal(index)}
                icon={faCircleInfo}
                style={{ color: "#ffffff", cursor: "pointer", marginRight: '5px' }}
              />
              {product.ingredients}
            </p>
          </div>
        ) : (
          <>
            <span>
              {product.topName}
              <br></br>
              <FontAwesomeIcon
                onClick={() => toggleModal(index)}
                icon={faCircleInfo}
                style={{ color: "#ffffff", cursor: "pointer", marginRight: '5px' }}
              />
              {product.bottomName}
            </span>
            <div className="order-area">
              <p>${(product.price / 100).toFixed(2)}</p>
              <button
                onClick={() => toggleCart(product, index)}
                className="add-cart"
              >
                Add To Cart
              </button>
              {selectedProductIndex === index && add2Cart && !buyNowButton && (
                <div className="modal-overlay" style={{ overflow: 'auto' }}>
                  <div className="modal-content">
                    <h2>Cart</h2>
                    {selectedProduct.map((product) => (
                      <section className="item-section" key={product.id}>
                        <img
                          className="modal-img"
                          src={product.img}
                          alt={product.alt}
                        />
                        <div className="modal-text">
                          <p className="boldtext">{product.bottomName}</p>
                          <p className="lighttext">{product.ingredients}</p>
                          <p className="boldtext">${(parseFloat((product.price / 100).toFixed(2)) * product.quantity).toFixed(2)}</p>
                        </div>
                        <div className="quantity">
                          <FontAwesomeIcon
                            icon={faMinus}
                            style={{
                              color: "#111111",
                              backgroundColor: "#D9D9D9",
                              padding: ".7rem",
                            }}
                            onClick={() => decreaseQuantity(product.id)}
                          />
                          {<p className="quantity-num">{product.quantity}</p>}
                          <FontAwesomeIcon
                            icon={faPlus}
                            style={{
                              color: "#111111",
                              backgroundColor: "#D9D9D9",
                              padding: ".7rem",
                            }}
                            onClick={() => increaseQuantity(product.id)}
                          />
                          <p className="delete" onClick={() => deleteSelectedItem(product.id)}>
                            <FontAwesomeIcon className='x-modal' icon={faXmark} size='lg' style={{ color: "#111111", paddingRight: "2px" }} />
                            Delete
                          </p>
                        </div>
                      </section>
                    ))}
                    <div className="order-bottom-modal">
                      <button onClick={goBack} className="add-cart">Go Back</button>
                      <button onClick={() => handleBuyNowClick(product)} className="buy-now">Buy Now</button>
                    </div>
                  </div>
                </div>
              )}
              <button onClick={() => handleBuyNowClick(product)} className="buy-now">Buy Now</button>
            </div>
          </>
        )}
      </div>
    );
  });


  if (buyNowButton) {
    return <Checkout selectedProduct={selectedProduct} />;
  } else {
    return (
      <div className="order-page">
        {products}
      </div>
    );
  }
}
